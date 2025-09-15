<?php

<?php

require_once __DIR__ . '/includes/db.php';

// total students
$row = db_query_one("SELECT COUNT(*) AS c FROM `_student information`");
$total = $row['c'] ?? 0;

$row = db_query_one("SELECT SUM(CASE WHEN LOWER(`gender`) LIKE '%female%' THEN 1 ELSE 0 END) AS f, SUM(CASE WHEN LOWER(`gender`) LIKE '%male%' THEN 1 ELSE 0 END) AS m FROM `_student information`");
$female = $row['f'] ?? 0;
$male = $row['m'] ?? 0;


$avg_attendance = 'N/A';
?>
<!-- ...existing code... -->
<div class="cardBox">
    <div class="card">
        <div>
            <div class="numbers"><?php echo (int)$total; ?></div>
            <div class="cardName">Total Interns</div>
        </div>
        <div class="iconBx">
            <ion-icon name="people-outline" style="color:#2136f3"></ion-icon>
        </div>
    </div>

    <div class="card">
        <div>
            <div class="numbers" style="color:#d12e23"><?php echo (int)$female; ?></div>
            <div class="cardName">Female Interns</div>
        </div>
        <div class="iconBx">
            <ion-icon name="person-remove-outline" style="color:#f44336"></ion-icon>
        </div>
    </div>

    <div class="card">
        <div>
            <div class="numbers"  style="color:#219653"><?php echo (int)$male; ?></div>
            <div class="cardName">Male Interns</div>
        </div>
        <div class="iconBx">
            <ion-icon name="person-add-outline" style="color:#219653"></ion-icon>
        </div>
    </div>

    <div class="card">
        <div>
            <div class="numbers" style="color:#c77800"><?php echo htmlspecialchars($avg_attendance); ?></div>
            <div class="cardName">Avg. Daily Attendance</div>
        </div>
        <div class="iconBx">
            <ion-icon name="calendar-outline" style="color:#ff9800"></ion-icon>
        </div>
    </div>
</div>
<!-- ...existing code... -->