const sidebar = document.querySelector(".profile-card");
const overlay = document.getElementById("overlay");
const closeBtn = sidebar.querySelector(".close-btn");

document.querySelectorAll(".student-row").forEach(row => {
  row.addEventListener("click", () => {
    
    document.getElementById("profile-name").textContent = row.dataset.name;
    document.getElementById("detailPhone").textContent = row.dataset.phone;
    document.getElementById("detailSchool").textContent = row.dataset.school;
    document.getElementById("detailCourse").textContent = row.dataset.course;
    document.getElementById("detailPeriod").textContent = row.dataset.period;
    document.getElementById("detailSkill").textContent = row.dataset.skill;
    document.getElementById("present").textContent = row.dataset.present;
    document.getElementById("absent").textContent = row.dataset.absent;
    document.getElementById("late").textContent = row.dataset.late;
    document.getElementById("projects").textContent = row.dataset.projects;
    document.getElementById("rating-score").textContent = row.dataset.score;

  
    sidebar.style.display = "block";
    setTimeout(() => sidebar.classList.add("active"), 10);
    overlay.classList.add("active");
  });
});

function closeSidebar() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");

  setTimeout(() => {
    if (!sidebar.classList.contains("active")) {
      sidebar.style.display = "none";
    }
  }, 300);
}

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
