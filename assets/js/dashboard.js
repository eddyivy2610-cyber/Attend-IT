// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// Set active navigation item
let naviLinks = document.querySelectorAll('.navigation ul li a[data-page]');

naviLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.navigation ul li').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to parent li
        this.parentElement.classList.add('active');
    });
});



let navLinks = document.querySelectorAll('.navigation ul li a[data-tooltip]');
let tooltip = document.getElementById('sidebar-tooltip');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', function(e) {
    if (navigation.classList.contains('active')) {
      tooltip.textContent = link.getAttribute('data-tooltip');
      const rect = link.getBoundingClientRect();
      tooltip.style.top = rect.top + window.scrollY + 'px';
      tooltip.classList.add('active');
    }
  });
  link.addEventListener('mouseleave', function(e) {
    tooltip.classList.remove('active');
  });
});

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  tooltip.classList.remove('active'); // Hide tooltip when toggling
};

// ...existing code...