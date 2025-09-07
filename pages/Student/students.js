document.addEventListener("DOMContentLoaded", function () {
            const toggler = document.querySelector(".sidebar-toggler");
            const sidebar = document.querySelector(".asidebar");

            toggler.addEventListener("click", function () {
                sidebar.classList.toggle("collapsed");


            
                const icon = toggler.querySelector(".material-symbols-outlined");
                if (sidebar.classList.contains("collapsed")) {
                    icon.textContent = "chevron_forward";
                } else {
                    icon.textContent = "chevron_backward";
                }
            });

            // checkbox
            const selectAll = document.getElementById("select-all");
            const studentCheckboxes = document.querySelectorAll('.student-checkbox');
            
            selectAll.addEventListener('change', function() {
                studentCheckboxes.forEach(checkbox => {
                    checkbox.checked = selectAll.checked;
                });
            });
            
            // sort
            const tableHeaders = document.querySelectorAll('.students-table th');
            
            tableHeaders.forEach(header => {
                if (header.querySelector('.fa-sort')) {
                    header.addEventListener('click', () => {
                        const table = header.parentElement.parentElement.parentElement;
                        const columnIndex = Array.prototype.indexOf.call(header.parentElement.children, header);
                        const rows = Array.from(table.querySelectorAll('tr:not(:first-child)'));
                        
                        rows.sort((a, b) => {
                            const aValue = a.children[columnIndex].textContent;
                            const bValue = b.children[columnIndex].textContent;
                            
                            return aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
                        });
                        
                        // Remove existing rows
                        rows.forEach(row => table.querySelector('tbody').removeChild(row));
                        
                        // Add sorted rows
                        rows.forEach(row => table.querySelector('tbody').appendChild(row));
                    });
                }
            });
            
            // Search
            const searchInput = document.querySelector('.search-container input');
            const searchButton = document.querySelector('.search-container button');
            
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    performSearch();
                }
            });
            
            function performSearch() {
                const searchText = searchInput.value.toLowerCase();
                const rows = document.querySelectorAll('.students-table tbody tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(searchText)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
            
            // Pagination button
            const paginationButtons = document.querySelectorAll('.pagination button');
            
            paginationButtons.forEach(button => {
                button.addEventListener('click', () => {
                    paginationButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                });
            });
        });
