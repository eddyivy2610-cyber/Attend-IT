        // Initialize Chart
        const ctx = document.getElementById('skillsChart').getContext('2d');
        const skillsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Technical Skill', 'Learning Activity', 'Active Contribution'],
                datasets: [{
                    label: 'Skill Level',
                    data: [75, 85, 65],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)'
                    ],
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(155, 89, 182, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Calendar functionality
        let currentMonth = 6; // July (0-indexed)
        let currentYear = 2020;
        const attendanceData = {
            // Sample attendance data for July 2020
            '2020-7-1': 'present',
            '2020-7-2': 'present',
            '2020-7-3': 'late',
            '2020-7-6': 'present',
            '2020-7-7': 'present',
            '2020-7-8': 'absent',
            '2020-7-9': 'present',
            '2020-7-10': 'present',
            '2020-7-13': 'present',
            '2020-7-14': 'late',
            '2020-7-15': 'present',
            '2020-7-16': 'present',
            '2020-7-17': 'present',
            '2020-7-20': 'present',
            '2020-7-21': 'present',
            '2020-7-22': 'absent',
            '2020-7-23': 'present',
            '2020-7-24': 'present',
            '2020-7-27': 'late',
            '2020-7-28': 'present',
            '2020-7-29': 'present',
            '2020-7-30': 'present',
        };

        function generateCalendar(month, year) {
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const daysInPrevMonth = new Date(year, month, 0).getDate();
            
            const calendarGrid = document.getElementById('calendar-grid');
            calendarGrid.innerHTML = '';
            
            // Add day headers
            const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            dayHeaders.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-day-header';
                dayHeader.textContent = day;
                calendarGrid.appendChild(dayHeader);
            });
            
            // Add previous month's trailing days
            for (let i = firstDay - 1; i >= 0; i--) {
                const day = document.createElement('div');
                day.className = 'calendar-day other-month';
                day.textContent = daysInPrevMonth - i;
                calendarGrid.appendChild(day);
            }
            
            // Add current month's days
            const today = new Date();
            for (let i = 1; i <= daysInMonth; i++) {
                const day = document.createElement('div');
                day.className = 'calendar-day';
                day.textContent = i;
                
                // Check if this is today
                if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                    day.classList.add('today');
                }
                
                // Check attendance status (display only)
                const dateStr = `${year}-${month + 1}-${i}`;
                if (attendanceData[dateStr]) {
                    day.classList.add(attendanceData[dateStr]);
                }
                
                calendarGrid.appendChild(day);
            }
            
            // Add next month's leading days
            const totalCells = calendarGrid.children.length - 7; // Subtract day headers
            const remainingCells = 35 - totalCells; // 5 rows * 7 days - day headers
            for (let i = 1; i <= remainingCells; i++) {
                const day = document.createElement('div');
                day.className = 'calendar-day other-month';
                day.textContent = i;
                calendarGrid.appendChild(day);
            }
            
            // Update month display
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.getElementById('current-month').textContent = `${monthNames[month]} ${year}`;
        }

        function changeMonth(direction) {
            currentMonth += direction;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            } else if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        }

        // Initialize calendar
        generateCalendar(currentMonth, currentYear);

         // Profile tab switching
        function switchProfileTab(tabName) {
            // Remove active class from all tabs and content
            document.querySelectorAll('.profile-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab and corresponding content
            event.target.classList.add('active');
            document.getElementById(tabName + '-info').classList.add('active');
        }

        // View student profile function
        function viewStudentProfile(studentName) {
            alert(`Viewing profile for ${studentName}`);
            // In a real application, this would load the student's data
        }

        // Update rating display when slider changes
        document.getElementById('technical-skill').addEventListener('input', function() {
            document.getElementById('technical-value').textContent = this.value;
        });

        document.getElementById('learning-activity').addEventListener('input', function() {
            document.getElementById('learning-value').textContent = this.value;
        });

        document.getElementById('active-contribution').addEventListener('input', function() {
            document.getElementById('contribution-value').textContent = this.value;
        });

        // Submit rating function
        function submitRating() {
            const technicalSkill = document.getElementById('technical-skill').value;
            const learningActivity = document.getElementById('learning-activity').value;
            const activeContribution = document.getElementById('active-contribution').value;
            
            // Update chart with new values
            skillsChart.data.datasets[0].data = [technicalSkill, learningActivity, activeContribution];
            skillsChart.update();
            
            // Show success message
            const button = document.querySelector('.submit-rating-btn');
            const originalText = button.textContent;
            button.textContent = 'Rating Submitted!';
            button.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '#3498db';
            }, 2000);
        }

        // View profile functionality
        function viewProfile(studentName) {
            alert(`Viewing profile for ${studentName}`);
        }

        // Export report functionality
        function exportReport() {
            alert('Exporting report...');
            // In a real application, this would generate and download a report file
        }

        // Send report functionality
        function sendReport() {
            alert('Sending report...');
            // In a real application, this would open a dialog to send the report via email
        }
        