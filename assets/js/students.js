// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// Set active navigation item
let navLinks = document.querySelectorAll('.navigation ul li a[data-page]');

navLinks.forEach(link => {
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

        // View Toggle Functionality
        const listViewBtn = document.getElementById('list-view-btn');
        const gridViewBtn = document.getElementById('grid-view-btn');
        const listView = document.getElementById('students-list-view');
        const gridView = document.getElementById('students-grid-view');

        listViewBtn.addEventListener('click', function() {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            listView.style.display = 'block';
            gridView.style.display = 'none';
        });

        gridViewBtn.addEventListener('click', function() {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            gridView.style.display = 'grid';
            listView.style.display = 'none';
        });

        // Year Pagination
        const yearBtns = document.querySelectorAll('.year-btn');
        
        yearBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all year buttons
                yearBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real application, this would filter students by the selected year
                const selectedYear = this.textContent;
                alert(`Showing students from ${selectedYear}`);
            });
        });

        // Scroll to Bottom Button
        const scrollToBottomBtn = document.getElementById('scroll-to-bottom-btn');
        const content = document.querySelector('.content');
        
        scrollToBottomBtn.addEventListener('click', function() {
            content.scrollTo({
                top: content.scrollHeight,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll button based on scroll position
        content.addEventListener('scroll', function() {
            if (content.scrollTop > 100) {
                scrollToBottomBtn.style.display = 'flex';
            } else {
                scrollToBottomBtn.style.display = 'none';
            }
        });

        // Initially hide scroll button
        scrollToBottomBtn.style.display = 'none';

        // Action Button Functions
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.querySelector('i').className;
                const studentName = this.closest('.student-row, .student-card').querySelector('.student-name').textContent;
                
                if (action.includes('edit')) {
                    alert(`Edit student: ${studentName}`);
                } else if (action.includes('trash')) {
                    if (confirm(`Are you sure you want to delete ${studentName}?`)) {
                        alert(`Deleted student: ${studentName}`);
                    }
                } else if (action.includes('file-alt')) {
                    alert(`View report for: ${studentName}`);
                }
            });
        });

        // Export Button
        document.querySelector('.export-btn').addEventListener('click', function() {
            alert('Exporting student data...');
        });
