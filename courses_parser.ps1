param([string]$InputFile = "C:\Users\nithi\Downloads\osucourses\osu_courses.md")

$content = Get-Content -Path $InputFile -Raw
$lines = $content -split "`n"

$courses = @()
$i = 0

while ($i -lt $lines.Count) {
    $line = $lines[$i]

    # Match course header: ### DEPT NUMBER — Title (em dash or regular dash)
    if ($line -match '###\s+(\w+)\s+([\d.]+[A-Za-z0-9]*)\s+[—-]\s+(.+)$') {
        $deptCode = $matches[1]
        $courseNum = $matches[2]
        $courseTitle = $matches[3]

        $credits = 0
        $prereqs = @()
        $concur = @()
        $description = ""
        $terms = @()

        $i++

        # Parse course details (lines starting with "- ")
        while ($i -lt $lines.Count -and $lines[$i] -match "^-\s") {
            $detailLine = $lines[$i]

            # Credit Hours - handle both single and range values (e.g., "4" or "1-3")
            if ($detailLine -imatch "\*\*Credit Hours:\*\*\s+([0-9\-\.]+)") {
                $credStr = $matches[1]
                $credits = [int]($credStr -replace "-.*", "")  # Take first number if range
            }

            # Terms Offered
            elseif ($detailLine -imatch "Terms Offered:\s*(.+?)(?:\s*-|$)") {
                $termsText = $matches[1]
                $terms = @()
                if ($termsText -imatch "Su|Summer|summer") { $terms += "Su" }
                if ($termsText -imatch "Au|Autumn|autumn") { $terms += "Au" }
                if ($termsText -imatch "Wi|Winter|winter") { $terms += "Wi" }
                if ($termsText -imatch "Sp|Spring|spring") { $terms += "Sp" }
            }

            # Prerequisite or concurrent
            elseif ($detailLine -imatch "Prereq or concur:\s*(.+?)$") {
                $text = $matches[1]
                # Extract course codes (3-4 digits, optionally followed by letters)
                $m = [regex]::Matches($text, "\b(\d{3,4}[A-Z]*)\b")
                if ($m.Count -gt 0) {
                    $concur = @()
                    foreach ($match in $m) {
                        if ($match.Groups[1].Value -notmatch "^(113|123|163|203|211|212)$") {
                            # Filter out old course code patterns in parentheses
                            $concur += , @($match.Groups[1].Value)
                        }
                    }
                }
            }

            # Standard prerequisite (handle both **Prereq:** and Prereq:)
            elseif ($detailLine -imatch "Prereq[^:]*:\s*(.+?)(?:\s*Graded|$)") {
                $text = $matches[1]
                # Extract course codes
                $m = [regex]::Matches($text, "\b(\d{3,4}[A-Z]*)\b")
                if ($m.Count -gt 0) {
                    $prereqs = @()
                    foreach ($match in $m) {
                        if ($match.Groups[1].Value -notmatch "^(113|123|163|203|211|212)$") {
                            # Filter out old course code patterns
                            $prereqs += , @($match.Groups[1].Value)
                        }
                    }
                }
            }

            # Description
            elseif ($detailLine -imatch "Description:\s*(.+?)$") {
                $description = $matches[1] -replace "\*\*", "" -replace "\*", ""
            }

            $i++
        }

        # Add course to list
        $courseObj = @{
            id = "$deptCode $courseNum"
            dept = $deptCode
            number = $courseNum
            name = $courseTitle
            credits = $credits
            terms = $terms
            sentence = $description
            prereqs = $prereqs
            concur = $concur
            notes = ""
        }

        $courses += $courseObj
        continue
    }

    $i++
}

Write-Host "✓ Parsed $($courses.Count) courses"

# Generate JavaScript code
$jsLines = @()

foreach ($c in $courses) {
    # Format terms array
    $termsJson = if ($c.terms.Count -gt 0) {
        '"' + ($c.terms -join '", "') + '"'
    } else {
        ""
    }

    # Format prerequisites array
    $prereqJson = ""
    if ($c.prereqs.Count -gt 0) {
        $preqLines = @()
        foreach ($group in $c.prereqs) {
            if ($group -is [array] -and $group.Count -gt 0) {
                $codes = $group | ForEach-Object { """$_""" }
                $preqLines += "    [" + ($codes -join ", ") + "]"
            }
        }
        if ($preqLines.Count -gt 0) {
            $prereqJson = "`n" + ($preqLines -join ",`n") + "`n  "
        }
    }

    # Format concurrent array
    $concurJson = ""
    if ($c.concur.Count -gt 0) {
        $concLines = @()
        foreach ($group in $c.concur) {
            if ($group -is [array] -and $group.Count -gt 0) {
                $codes = $group | ForEach-Object { """$_""" }
                $concLines += "    [" + ($codes -join ", ") + "]"
            }
        }
        if ($concLines.Count -gt 0) {
            $concurJson = "`n" + ($concLines -join ",`n") + "`n  "
        }
    }

    # Escape strings properly
    $name = $c.name -replace '"', '\"' -replace "`n", " "
    $desc = $c.sentence -replace '"', '\"' -replace "`n", " " -replace '\s+', ' '

    # Build course object
    $courseJs = @"
  {
    id: "$($c.id)",
    dept: "$($c.dept)",
    number: "$($c.number)",
    name: "$name",
    credits: $($c.credits),
    terms: [$termsJson],
    sentence: "$desc",
    prereqs: [$prereqJson],
    concur: [$concurJson],
    notes: ""
  },
"@

    $jsLines += $courseJs
}

# Write JavaScript to file
$jsContent = $jsLines -join [Environment]::NewLine
Set-Content -Path "C:\Users\nithi\Downloads\osucourses\GENERATED_COURSES.js" -Value $jsContent -Encoding UTF8

Write-Host "Generated JavaScript written to GENERATED_COURSES.js"
Write-Host ""
Write-Host "Sample courses:"
for ($j = 0; $j -lt [Math]::Min(5, $courses.Count); $j++) {
    $c = $courses[$j]
    Write-Host "  $($c.id): $($c.name)"
    Write-Host "    Credits: $($c.credits), Terms: $(if($c.terms.Count -gt 0) { $c.terms -join ', ' } else { 'N/A' })"
    if ($c.prereqs.Count -gt 0) {
        Write-Host "    Prereqs: $($c.prereqs -join ', ')"
    }
}

Write-Host ""
Write-Host "Statistics:"
$withCredits = ($courses | Where-Object { $_.credits -gt 0 }).Count
$withTerms = ($courses | Where-Object { $_.terms.Count -gt 0 }).Count
$withPrereqs = ($courses | Where-Object { $_.prereqs.Count -gt 0 }).Count
Write-Host "  Total courses: $($courses.Count)"
Write-Host "  With credit hours: $withCredits"
Write-Host "  With terms offered: $withTerms"
Write-Host "  With prerequisites: $withPrereqs"
