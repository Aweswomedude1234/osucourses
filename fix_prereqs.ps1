param(
    [string]$InputFile = "C:\Users\nithi\Downloads\osucourses\GENERATED_COURSES.js"
)

# Read the generated file
$content = Get-Content -Path $InputFile -Raw

# Parse the JavaScript to extract course objects
# We'll use a regex-based approach to find each course object and its properties

$coursePattern = '\{\s*id:\s*"([^"]+)",\s*dept:\s*"([^"]+)",\s*number:\s*"([^"]+)",\s*name:\s*"([^"]*)",\s*credits:\s*(\d+),\s*terms:\s*\[(.*?)\],\s*sentence:\s*"([^"]*)",\s*prereqs:\s*\[(.*?)\],\s*concur:\s*\[(.*?)\],\s*notes:\s*""'

$matches = [regex]::Matches($content, $coursePattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

Write-Host "Found $($matches.Count) courses to process"

$fixedContent = $content
$replacementCount = 0

foreach ($match in $matches) {
    $fullId = $match.Groups[1].Value
    $dept = $match.Groups[2].Value
    $courseNum = $match.Groups[3].Value
    $courseName = $match.Groups[4].Value
    $credits = $match.Groups[5].Value
    $terms = $match.Groups[6].Value
    $sentence = $match.Groups[7].Value
    $prereqsText = $match.Groups[8].Value
    $concurText = $match.Groups[9].Value

    # Process prerequisites
    $fixedPrereqs = Fix-CourseReferences -Text $prereqsText -Department $dept
    $fixedConcur = Fix-CourseReferences -Text $concurText -Department $dept

    if ($fixedPrereqs -ne $prereqsText -or $fixedConcur -ne $concurText) {
        # Build the original pattern for this course
        $originalCourse = $match.Value

        # Build the replacement
        $replacementCourse = $originalCourse -replace [regex]::Escape($prereqsText), $fixedPrereqs
        $replacementCourse = $replacementCourse -replace [regex]::Escape($concurText), $fixedConcur

        $fixedContent = $fixedContent -replace [regex]::Escape($originalCourse), $replacementCourse
        $replacementCount++
    }
}

# Write the fixed content
Set-Content -Path $InputFile -Value $fixedContent -Encoding UTF8

Write-Host "✓ Fixed $replacementCount courses"
Write-Host "✓ Updated file: $InputFile"

function Fix-CourseReferences {
    param(
        [string]$Text,
        [string]$Department
    )

    if ([string]::IsNullOrWhiteSpace($Text)) {
        return $Text
    }

    # Extract course codes from the array format
    # Look for patterns like ["1110"], ["CHEM 1110"], etc.

    $fixed = $Text

    # Find all course code references: ["XXXX"] or ["XXXXH"] format
    $codePattern = '\["([^"]+)"\]'
    $codeMatches = [regex]::Matches($Text, $codePattern)

    foreach ($codeMatch in $codeMatches) {
        $courseCode = $codeMatch.Groups[1].Value

        # Check if this code already has a department prefix
        if ($courseCode -match "^[A-Z]{2,}") {
            # Already has a department prefix, skip
            continue
        }

        # Check if it's a course number (3-4 digits, optionally followed by letters)
        if ($courseCode -match "^\d{3,4}[A-Z]*$") {
            # This is a course number without department - prepend current department
            $fullCode = "$Department $courseCode"
            $fixed = $fixed -replace [regex]::Escape('["' + $courseCode + '"]'), ('["' + $fullCode + '"]')
        }
    }

    return $fixed
}

# Display sample of fixed courses
Write-Host ""
Write-Host "Sample of fixed courses:"

$samplePattern = '\{\s*id:\s*"([^"]+)"[^}]*?prereqs:\s*\[(.*?)\]'
$sampleMatches = [regex]::Matches($fixedContent, $samplePattern, [System.Text.RegularExpressions.RegexOptions]::Singleline) | Select-Object -First 5

foreach ($sampleMatch in $sampleMatches) {
    $id = $sampleMatch.Groups[1].Value
    $prereqs = $sampleMatch.Groups[2].Value
    if ($prereqs.Trim() -ne "") {
        Write-Host "  $id : $($prereqs -replace '\s+', ' ')"
    }
}
