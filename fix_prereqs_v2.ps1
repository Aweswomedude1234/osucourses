param(
    [string]$InputFile = "C:\Users\nithi\Downloads\osucourses\GENERATED_COURSES.js"
)

# Read the entire file as lines
$lines = Get-Content -Path $InputFile
$updatedLines = @()
$currentDept = $null
$currentId = $null

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]

    # Track current course department
    if ($line -match 'id:\s*"(\w+)\s+\d+') {
        $currentId = $matches[1]
        $currentDept = $currentId
    }

    # Fix prerequisite lines - look for ["XXXX"] patterns where XXXX is just a course number
    if ($currentDept -and ($line -match 'prereqs:|concur:' -or ($i -gt 0 -and $updatedLines[-1] -match 'prereqs:|concur:'))) {
        # Check if this line contains course code references like ["1210"]
        if ($line -match '\["(\d{3,4}[A-Z]*)"\]') {
            # This line has course codes that need department prefixes
            $updated = $line

            # Find all ["XXXX"] patterns where XXXX is just digits/letters
            $courseCodePattern = '\["(\d{3,4}[A-Z]*)"\]'
            $codeMatches = [regex]::Matches($line, $courseCodePattern)

            foreach ($codeMatch in $codeMatches) {
                $courseCode = $codeMatch.Groups[1].Value
                $oldPattern = '["' + $courseCode + '"]'
                $newPattern = '["' + $currentDept + ' ' + $courseCode + '"]'

                $updated = $updated -replace [regex]::Escape($oldPattern), $newPattern
            }

            $updatedLines += $updated
        } else {
            $updatedLines += $line
        }
    } else {
        $updatedLines += $line
    }
}

# Write the updated content back
$updatedLines -join "`n" | Set-Content -Path $InputFile -Encoding UTF8

Write-Host "✓ Fixed prerequisite course codes"
Write-Host "✓ Updated file: $InputFile"

# Show sample of fixes
Write-Host ""
Write-Host "Sample of updated prerequisites:"
$content = Get-Content -Path $InputFile -Raw
$matches = [regex]::Matches($content, 'id:\s*"([^"]+)"[^}]*?prereqs:\s*\[(.*?)\]', [System.Text.RegularExpressions.RegexOptions]::Singleline) | Select-Object -First 5
foreach ($m in $matches) {
    $id = $m.Groups[1].Value
    $prereqs = $m.Groups[2].Value
    if ($prereqs.Trim() -ne "") {
        $sample = $prereqs -replace '\s+', ' ' | Select-String -Pattern '\[.*?\]' -o | Select-Object -First 3
        Write-Host "  $id : $sample"
    }
}
