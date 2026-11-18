$mdPath = "C:\Users\nithi\Downloads\osucourses\osu_courses.md"
$jsPath = "C:\Users\nithi\Downloads\osucourses\courses.js"

# Read markdown
$mdContent = Get-Content -Path $mdPath -Raw -Encoding UTF8
$mdLines = $mdContent -split "`n"

# Read current JavaScript
$jsContent = Get-Content -Path $jsPath -Raw

# Extract ECON and STAT courses from markdown
$depts = @("ECON", "STAT")
$courseObjects = @()

$i = 0
while ($i -lt $mdLines.Count) {
    $line = $mdLines[$i]

    # Match course header
    if ($line -match '^###\s+(\w+)\s+([\d\.]+[A-Za-z0-9]*)\s+.+?\s+(.+)$') {
        $deptCode = $matches[1]
        $courseNum = $matches[2]
        $courseTitle = $matches[3].Trim()

        # Only process ECON and STAT
        if ($depts -contains $deptCode) {
            $credits = 0
            $description = ""
            $i++

            # Parse course details
            while ($i -lt $mdLines.Count -and $mdLines[$i] -match "^\s*-\s") {
                $detailLine = $mdLines[$i]

                # Extract credit hours
                if ($detailLine -imatch "Credit Hours.*?(\d+)") {
                    $credits = [int]$matches[1]
                }

                # Extract description
                if ($detailLine -imatch "Description:\s*(.+)$") {
                    $description = $matches[1] -replace "\*\*", "" -replace "\*", ""
                }

                $i++
            }

            # Create JavaScript object
            $name = $courseTitle -replace '"', '\"'
            $desc = $description -replace '"', '\"' -replace '\s+', ' '

            $obj = @"
  {
    id: "$deptCode $courseNum",
    dept: "$deptCode",
    number: "$courseNum",
    name: "$name",
    credits: $credits,
    terms: [],
    sentence: "$desc",
    prereqs: [],
    concur: [],
    notes: ""
  },
"@

            $courseObjects += $obj
            continue
        }
    }

    $i++
}

Write-Host "Extracted $($courseObjects.Count) ECON/STAT courses"

# Remove the closing bracket and semicolon from courses.js
$jsContent = $jsContent -replace '\r?\n\r?\n\];\s*$', ''

# Add new courses and closing bracket
$newJsContent = $jsContent + [Environment]::NewLine + ($courseObjects -join [Environment]::NewLine) + [Environment]::NewLine + "];" + [Environment]::NewLine + [Environment]::NewLine + @"
// Make available to app.js whether loaded via <script> tag (browser global)
if (typeof module !== "undefined") { module.exports = COURSES_DB; }
"@

# Write back
Set-Content -Path $jsPath -Value $newJsContent -Encoding UTF8

Write-Host "Updated courses.js with ECON and STAT courses"
