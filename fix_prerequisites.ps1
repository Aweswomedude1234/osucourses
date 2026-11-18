# Fix prerequisite course codes in GENERATED_COURSES.js
$jsFile = "C:\Users\nithi\Downloads\osucourses\GENERATED_COURSES.js"

# Read the file
$content = Get-Content -Path $jsFile -Raw

# Function to fix course codes within a department context
function Fix-CourseCodesInText {
    param(
        [string]$Text,
        [string]$Department
    )

    # Pattern to match course codes in arrays like ["1210"]
    # Only match if it's just digits/letters without a department prefix
    $pattern = '\["(\d{3,4}[A-Z]*)"\]'

    $result = $Text

    # Find all matches
    $matches = [regex]::Matches($Text, $pattern)

    foreach ($match in $matches) {
        $courseCode = $match.Groups[1].Value
        $oldRef = '["' + $courseCode + '"]'
        $newRef = '["' + $Department + ' ' + $courseCode + '"]'

        $result = $result -replace [regex]::Escape($oldRef), $newRef
    }

    return $result
}

# Process each course - find all course objects and fix their prerequisites
$fullCoursePattern = '\{\s*id:\s*"([^"]+)"[^}]*?prereqs:\s*\[(.*?)\][^}]*?concur:\s*\[(.*?)\]'

$courseMatches = [regex]::Matches($content, $fullCoursePattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

Write-Host "Processing $($courseMatches.Count) courses..."

$fixedCount = 0

foreach ($courseMatch in $courseMatches) {
    $fullId = $courseMatch.Groups[1].Value
    $prereqsContent = $courseMatch.Groups[2].Value
    $concurContent = $courseMatch.Groups[3].Value

    # Extract department from the id (e.g., "CHEM 1110" -> "CHEM")
    $dept = $fullId -replace '\s+.*', ''

    # Fix prereqs
    $fixedPrereqs = Fix-CourseCodesInText -Text $prereqsContent -Department $dept

    # Fix concur
    $fixedConcur = Fix-CourseCodesInText -Text $concurContent -Department $dept

    # If anything changed, do the replacement
    if ($fixedPrereqs -ne $prereqsContent) {
        $content = $content -replace [regex]::Escape($prereqsContent), $fixedPrereqs
        $fixedCount++
    }

    if ($fixedConcur -ne $concurContent) {
        $content = $content -replace [regex]::Escape($concurContent), $fixedConcur
    }
}

# Write the fixed content back to the file
Set-Content -Path $jsFile -Value $content -Encoding UTF8

Write-Host "✓ Fixed prerequisite codes in $fixedCount courses"
Write-Host "✓ Updated: $jsFile"

# Display samples
Write-Host ""
Write-Host "Sample of fixed courses:"

$samples = [regex]::Matches($content, 'id:\s*"([^"]+)"[^}]*?prereqs:\s*\[(.*?)\]', [System.Text.RegularExpressions.RegexOptions]::Singleline) | Select-Object -First 5

foreach ($sample in $samples) {
    $id = $sample.Groups[1].Value
    $prereqs = $sample.Groups[2].Value

    if ($prereqs.Trim().Length -gt 0) {
        $preview = ($prereqs -replace '\s+', ' ').Substring(0, [Math]::Min(100, ($prereqs -replace '\s+', ' ').Length))
        Write-Host "  $id"
        Write-Host "    $preview"
    }
}
