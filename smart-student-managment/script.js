

  
        // Sample data
        let departments = {
            computer_science: {
                name: 'Computer Science',
                sections: ['CS-A', 'CS-B', 'CS-C']
            },
            it: {
                name: 'Information Technology',
                sections: ['IT-A', 'IT-B', 'IT-C']
            }
        };

        let courses = [
            { id: 'CS101', name: 'Programming Fundamentals', code: 'CS101', department: 'computer_science', credits: 3, description: 'Introduction to programming concepts' },
            { id: 'CS102', name: 'Data Structures', code: 'CS102', department: 'computer_science', credits: 4, description: 'Basic data structures and algorithms' },
            { id: 'CS103', name: 'Database Systems', code: 'CS103', department: 'computer_science', credits: 3, description: 'Database design and management' },
            { id: 'IT101', name: 'Network Administration', code: 'IT101', department: 'it', credits: 3, description: 'Network setup and management' },
            { id: 'IT102', name: 'Web Development', code: 'IT102', department: 'it', credits: 4, description: 'Frontend and backend web development' },
            { id: 'IT103', name: 'System Administration', code: 'IT103', department: 'it', credits: 3, description: 'Server and system management' }
        ];

        let students = [
            { id: 'ST001', name: 'Alice Johnson', department: 'computer_science', section: 'CS-A', email: 'alice@school.com', courses: ['CS101', 'CS102'] },
            { id: 'ST002', name: 'Bob Smith', department: 'computer_science', section: 'CS-A', email: 'bob@school.com', courses: ['CS101', 'CS103'] },
            { id: 'ST003', name: 'Carol Davis', department: 'computer_science', section: 'CS-B', email: 'carol@school.com', courses: ['CS102', 'CS103'] },
            { id: 'ST004', name: 'David Wilson', department: 'it', section: 'IT-A', email: 'david@school.com', courses: ['IT101', 'IT102'] },
            { id: 'ST005', name: 'Emma Brown', department: 'it', section: 'IT-A', email: 'emma@school.com', courses: ['IT102', 'IT103'] },
            { id: 'ST006', name: 'Frank Miller', department: 'computer_science', section: 'CS-C', email: 'frank@school.com', courses: ['CS101', 'CS102', 'CS103'] }
        ];

        let attendanceRecords = [];
        let currentAttendance = {};

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            updateCurrentDate();
            updateAnalytics();
            displayAllStudents();
            displayAllCourses();
            displayAllDepartments();
            displaySections();
            loadSampleRecords();
            populateCoursesInAttendance();
            populateDepartmentSelects();
        });

        function updateCurrentDate() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
        }

        function showTab(tabName) {
            // Hide all tab contents
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.add('hidden'));
            
            // Remove active state from all tabs
            const tabs = document.querySelectorAll('.tab-button');
            tabs.forEach(tab => {
                tab.classList.remove('border-blue-500', 'text-blue-600');
                tab.classList.add('border-transparent', 'text-gray-500');
            });
            
            // Show selected tab content
            document.getElementById(tabName + 'Content').classList.remove('hidden');
            
            // Add active state to selected tab
            const activeTab = document.getElementById(tabName + 'Tab');
            activeTab.classList.remove('border-transparent', 'text-gray-500');
            activeTab.classList.add('border-blue-500', 'text-blue-600');
        }

        function updateSections() {
            const department = document.getElementById('departmentSelect').value;
            const sectionSelect = document.getElementById('sectionSelect');
            const courseSelect = document.getElementById('courseSelect');
            
            sectionSelect.innerHTML = '<option value="">Select Section</option>';
            courseSelect.innerHTML = '<option value="">Select Course</option>';
            
            if (department && departments[department]) {
                departments[department].sections.forEach(section => {
                    sectionSelect.innerHTML += `<option value="${section}">${section}</option>`;
                });
                
                const departmentCourses = courses.filter(course => course.department === department);
                departmentCourses.forEach(course => {
                    courseSelect.innerHTML += `<option value="${course.id}">${course.name} (${course.code})</option>`;
                });
            }
        }

        function updateStudentSections() {
            const department = document.getElementById('studentDepartment').value;
            const sectionSelect = document.getElementById('studentSection');
            const coursesList = document.getElementById('studentCoursesList');
            
            sectionSelect.innerHTML = '<option value="">Select Section</option>';
            coursesList.innerHTML = '<p class="text-sm text-gray-500">Select department first</p>';
            
            if (department && departments[department]) {
                departments[department].sections.forEach(section => {
                    sectionSelect.innerHTML += `<option value="${section}">${section}</option>`;
                });
                
                const departmentCourses = courses.filter(course => course.department === department);
                if (departmentCourses.length > 0) {
                    coursesList.innerHTML = departmentCourses.map(course => `
                        <label class="flex items-center">
                            <input type="checkbox" value="${course.id}" class="course-checkbox mr-2 text-blue-600 focus:ring-blue-500">
                            <span class="text-sm">${course.name} (${course.code})</span>
                        </label>
                    `).join('');
                } else {
                    coursesList.innerHTML = '<p class="text-sm text-gray-500">No courses available for this department</p>';
                }
            }
        }

        function populateCoursesInAttendance() {
            const courseSelect = document.getElementById('courseSelect');
            courseSelect.innerHTML = '<option value="">Select Course</option>';
            courses.forEach(course => {
                courseSelect.innerHTML += `<option value="${course.id}">${course.name} (${course.code})</option>`;
            });
        }

        function loadStudents() {
            const selectedDepartment = document.getElementById('departmentSelect').value;
            const selectedSection = document.getElementById('sectionSelect').value;
            const selectedCourse = document.getElementById('courseSelect').value;
            
            if (!selectedDepartment || !selectedSection || !selectedCourse) {
                document.getElementById('studentList').innerHTML = '<p class="text-gray-500 text-center py-8">Please select department, section, and course</p>';
                return;
            }
            
            const filteredStudents = students.filter(student => 
                student.department === selectedDepartment && 
                student.section === selectedSection &&
                student.courses.includes(selectedCourse)
            );
            const studentList = document.getElementById('studentList');
            
            if (filteredStudents.length === 0) {
                studentList.innerHTML = '<p class="text-gray-500 text-center py-8">No students found for this department, section, and course combination</p>';
                return;
            }
            
            const selectedCourseInfo = courses.find(course => course.id === selectedCourse);
            
            studentList.innerHTML = filteredStudents.map(student => `
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 slide-in">
                    <div class="flex items-center space-x-4">
                        <div class="bg-blue-100 p-2 rounded-full">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">${student.name}</p>
                            <p class="text-sm text-gray-500">ID: ${student.id}</p>
                            <p class="text-xs text-blue-600">${departments[student.department].name} - ${student.section}</p>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <button onclick="markAttendance('${student.id}', 'present')" 
                                class="attendance-btn px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${currentAttendance[student.id] === 'present' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-100'}">
                            Present
                        </button>
                        <button onclick="markAttendance('${student.id}', 'absent')" 
                                class="attendance-btn px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${currentAttendance[student.id] === 'absent' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-red-100'}">
                            Absent
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function markAttendance(studentId, status) {
            currentAttendance[studentId] = status;
            loadStudents(); // Refresh the display
        }

        function markAllPresent() {
            const selectedDepartment = document.getElementById('departmentSelect').value;
            const selectedSection = document.getElementById('sectionSelect').value;
            const selectedCourse = document.getElementById('courseSelect').value;
            
            const filteredStudents = students.filter(student => 
                student.department === selectedDepartment && 
                student.section === selectedSection &&
                student.courses.includes(selectedCourse)
            );
            
            filteredStudents.forEach(student => {
                currentAttendance[student.id] = 'present';
            });
            
            loadStudents();
        }

        // Course Management Functions
        document.getElementById('addCourseForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('courseName').value;
            const code = document.getElementById('courseCode').value;
            const department = document.getElementById('courseDepartment').value;
            const credits = parseInt(document.getElementById('courseCredits').value);
            const description = document.getElementById('courseDescription').value;
            
            // Check if course code already exists
            if (courses.find(course => course.code === code)) {
                alert('Course code already exists!');
                return;
            }
            
            const newCourse = {
                id: code,
                name: name,
                code: code,
                department: department,
                credits: credits,
                description: description
            };
            
            courses.push(newCourse);
            
            // Reset form
            this.reset();
            
            // Update displays
            displayAllCourses();
            populateCoursesInAttendance();
            
            alert('Course added successfully!');
        });

        function displayAllCourses() {
            const allCoursesList = document.getElementById('allCoursesList');
            
            allCoursesList.innerHTML = courses.map(course => `
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="bg-green-100 p-2 rounded-full">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">${course.name}</p>
                            <p class="text-sm text-gray-500">Code: ${course.code} | Credits: ${course.credits}</p>
                            <p class="text-xs text-blue-600">${departments[course.department].name}</p>
                            ${course.description ? `<p class="text-xs text-gray-400 mt-1">${course.description}</p>` : ''}
                        </div>
                    </div>
                    <button onclick="removeCourse('${course.id}')" class="text-red-600 hover:text-red-800 transition duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            `).join('');
        }

        function filterCourses() {
            const selectedDepartment = document.getElementById('filterDepartment').value;
            const filteredCourses = selectedDepartment ? 
                courses.filter(course => course.department === selectedDepartment) : 
                courses;
            
            const allCoursesList = document.getElementById('allCoursesList');
            
            if (filteredCourses.length === 0) {
                allCoursesList.innerHTML = '<p class="text-gray-500 text-center py-8">No courses found</p>';
                return;
            }
            
            allCoursesList.innerHTML = filteredCourses.map(course => `
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="bg-green-100 p-2 rounded-full">
                            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">${course.name}</p>
                            <p class="text-sm text-gray-500">Code: ${course.code} | Credits: ${course.credits}</p>
                            <p class="text-xs text-blue-600">${departments[course.department].name}</p>
                            ${course.description ? `<p class="text-xs text-gray-400 mt-1">${course.description}</p>` : ''}
                        </div>
                    </div>
                    <button onclick="removeCourse('${course.id}')" class="text-red-600 hover:text-red-800 transition duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            `).join('');
        }

        function removeCourse(courseId) {
            if (confirm('Are you sure you want to remove this course? This will also remove it from all students.')) {
                courses = courses.filter(course => course.id !== courseId);
                
                // Remove course from all students
                students.forEach(student => {
                    student.courses = student.courses.filter(id => id !== courseId);
                });
                
                displayAllCourses();
                displayAllStudents();
                populateCoursesInAttendance();
            }
        }

        function saveAttendance() {
            const selectedDepartment = document.getElementById('departmentSelect').value;
            const selectedSection = document.getElementById('sectionSelect').value;
            const selectedCourse = document.getElementById('courseSelect').value;
            const today = new Date().toISOString().split('T')[0];
            
            if (!selectedDepartment || !selectedSection || !selectedCourse) {
                alert('Please select department, section, and course first!');
                return;
            }
            
            const filteredStudents = students.filter(student => 
                student.department === selectedDepartment && 
                student.section === selectedSection &&
                student.courses.includes(selectedCourse)
            );
            
            const courseInfo = courses.find(course => course.id === selectedCourse);
            
            filteredStudents.forEach(student => {
                const status = currentAttendance[student.id] || 'absent';
                attendanceRecords.push({
                    date: today,
                    studentId: student.id,
                    studentName: student.name,
                    department: student.department,
                    section: student.section,
                    course: courseInfo.name,
                    courseCode: courseInfo.code,
                    status: status
                });
            });
            
            currentAttendance = {};
            loadStudents();
            updateAnalytics();
            
            // Show success message
            alert('Attendance saved successfully!');
        }

        function filterRecords() {
            const date = document.getElementById('recordDate').value;
            const selectedDepartment = document.getElementById('recordDepartment').value;
            const selectedSection = document.getElementById('recordSection').value;
            
            let filteredRecords = attendanceRecords;
            
            if (date) {
                filteredRecords = filteredRecords.filter(record => record.date === date);
            }
            
            if (selectedDepartment) {
                filteredRecords = filteredRecords.filter(record => record.department === selectedDepartment);
            }
            
            if (selectedSection) {
                filteredRecords = filteredRecords.filter(record => record.section === selectedSection);
            }
            
            displayRecords(filteredRecords);
        }

        function displayRecords(records = attendanceRecords) {
            const recordsTable = document.getElementById('recordsTable');
            
            if (records.length === 0) {
                recordsTable.innerHTML = '<tr><td colspan="6" class="px-6 py-4 text-center text-gray-500">No records found</td></tr>';
                return;
            }
            
            recordsTable.innerHTML = records.map(record => `
                <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${record.date}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${record.studentName}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${departments[record.department].name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${record.section}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${record.course} (${record.courseCode})</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 py-1 text-xs font-medium rounded-full ${record.status === 'present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                            ${record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                    </td>
                </tr>
            `).join('');
        }

        document.getElementById('addStudentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('studentName').value;
            const id = document.getElementById('studentId').value;
            const department = document.getElementById('studentDepartment').value;
            const section = document.getElementById('studentSection').value;
            const email = document.getElementById('studentEmail').value;
            
            // Get selected courses
            const selectedCourses = [];
            document.querySelectorAll('.course-checkbox:checked').forEach(checkbox => {
                selectedCourses.push(checkbox.value);
            });
            
            if (selectedCourses.length === 0) {
                alert('Please select at least one course!');
                return;
            }
            
            // Check if student ID already exists
            if (students.find(student => student.id === id)) {
                alert('Student ID already exists!');
                return;
            }
            
            students.push({
                id: id,
                name: name,
                department: department,
                section: section,
                email: email,
                courses: selectedCourses
            });
            
            // Reset form
            this.reset();
            document.getElementById('studentCoursesList').innerHTML = '<p class="text-sm text-gray-500">Select department first</p>';
            
            // Update displays
            displayAllStudents();
            updateAnalytics();
            
            alert('Student added successfully!');
        });

        function displayAllStudents() {
            const allStudentsList = document.getElementById('allStudentsList');
            
            allStudentsList.innerHTML = students.map(student => {
                const studentCourses = student.courses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return course ? course.name : courseId;
                }).join(', ');
                
                return `
                    <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div class="flex items-center space-x-4">
                            <div class="bg-blue-100 p-2 rounded-full">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <p class="font-medium text-gray-900">${student.name}</p>
                                <p class="text-sm text-gray-500">ID: ${student.id} | ${departments[student.department].name} - ${student.section}</p>
                                <p class="text-xs text-blue-600">Courses: ${studentCourses}</p>
                            </div>
                        </div>
                        <button onclick="removeStudent('${student.id}')" class="text-red-600 hover:text-red-800 transition duration-200">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                `;
            }).join('');
        }

        function removeStudent(studentId) {
            if (confirm('Are you sure you want to remove this student?')) {
                students = students.filter(student => student.id !== studentId);
                displayAllStudents();
                updateAnalytics();
            }
        }

        function updateAnalytics() {
            const today = new Date().toISOString().split('T')[0];
            const todayRecords = attendanceRecords.filter(record => record.date === today);
            
            const totalStudents = students.length;
            const presentToday = todayRecords.filter(record => record.status === 'present').length;
            const absentToday = todayRecords.filter(record => record.status === 'absent').length;
            const attendanceRate = totalStudents > 0 ? Math.round((presentToday / totalStudents) * 100) : 0;
            
            document.getElementById('totalStudents').textContent = totalStudents;
            document.getElementById('presentToday').textContent = presentToday;
            document.getElementById('absentToday').textContent = absentToday;
            document.getElementById('attendanceRate').textContent = attendanceRate + '%';
            
            // Update class analytics and student statistics
            updateClassAnalytics();
            updateStudentStatistics();
        }

        function updateStudentStatistics() {
            const selectedDepartment = document.getElementById('analyticsFilterDepartment').value;
            const selectedSection = document.getElementById('analyticsFilterSection').value;
            
            // Update section dropdown based on selected department
            updateAnalyticsSectionDropdown();
            
            let filteredStudents = students;
            
            if (selectedDepartment) {
                filteredStudents = filteredStudents.filter(student => student.department === selectedDepartment);
            }
            
            if (selectedSection) {
                filteredStudents = filteredStudents.filter(student => student.section === selectedSection);
            }
            
            const studentStatisticsTable = document.getElementById('studentStatisticsTable');
            
            if (filteredStudents.length === 0) {
                studentStatisticsTable.innerHTML = '<tr><td colspan="7" class="px-6 py-4 text-center text-gray-500">No students found</td></tr>';
                return;
            }
            
            // Group students by department and section
            const groupedStudents = {};
            
            filteredStudents.forEach(student => {
                const deptKey = student.department;
                const sectionKey = student.section;
                
                if (!groupedStudents[deptKey]) {
                    groupedStudents[deptKey] = {};
                }
                
                if (!groupedStudents[deptKey][sectionKey]) {
                    groupedStudents[deptKey][sectionKey] = [];
                }
                
                const studentRecords = attendanceRecords.filter(record => record.studentId === student.id);
                const totalClasses = studentRecords.length;
                const presentCount = studentRecords.filter(record => record.status === 'present').length;
                const absentCount = studentRecords.filter(record => record.status === 'absent').length;
                const attendanceRate = totalClasses > 0 ? Math.round((presentCount / totalClasses) * 100) : 0;
                
                groupedStudents[deptKey][sectionKey].push({
                    student: student,
                    totalClasses: totalClasses,
                    presentCount: presentCount,
                    absentCount: absentCount,
                    attendanceRate: attendanceRate
                });
            });
            
            // Sort students within each section by attendance rate (lowest first)
            Object.keys(groupedStudents).forEach(deptKey => {
                Object.keys(groupedStudents[deptKey]).forEach(sectionKey => {
                    groupedStudents[deptKey][sectionKey].sort((a, b) => a.attendanceRate - b.attendanceRate);
                });
            });
            
            // Generate HTML with section headers
            let tableHTML = '';
            
            Object.keys(groupedStudents).forEach(deptKey => {
                Object.keys(groupedStudents[deptKey]).forEach(sectionKey => {
                    const sectionStudents = groupedStudents[deptKey][sectionKey];
                    const sectionAvgRate = Math.round(sectionStudents.reduce((sum, stat) => sum + stat.attendanceRate, 0) / sectionStudents.length);
                    
                    // Section header row
                    tableHTML += `
                        <tr class="bg-gray-100 border-t-2 border-gray-300">
                            <td colspan="7" class="px-6 py-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-3">
                                        <div class="bg-blue-500 p-2 rounded-lg">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-gray-900">${departments[deptKey].name} - ${sectionKey}</h4>
                                            <p class="text-sm text-gray-600">${sectionStudents.length} students</p>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${sectionAvgRate >= 80 ? 'bg-green-100 text-green-800' : sectionAvgRate >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}">
                                            Section Average: ${sectionAvgRate}%
                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    `;
                    
                    // Student rows for this section
                    sectionStudents.forEach(stat => {
                        const rateColor = stat.attendanceRate >= 80 ? 'text-green-600' : 
                                         stat.attendanceRate >= 60 ? 'text-yellow-600' : 'text-red-600';
                        const rateBg = stat.attendanceRate >= 80 ? 'bg-green-100' : 
                                      stat.attendanceRate >= 60 ? 'bg-yellow-100' : 'bg-red-100';
                        
                        tableHTML += `
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                                            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">${stat.student.name}</div>
                                            <div class="text-sm text-gray-500">ID: ${stat.student.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${departments[stat.student.department].name}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${stat.student.section}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${stat.totalClasses}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        ${stat.presentCount}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        ${stat.absentCount}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${rateBg} ${rateColor}">
                                        ${stat.attendanceRate}%
                                    </span>
                                </td>
                            </tr>
                        `;
                    });
                });
            });
            
            studentStatisticsTable.innerHTML = tableHTML;
        }

        function updateClassAnalytics() {
            updateDepartmentAnalytics();
            updateCourseAnalytics();
        }

        function updateDepartmentAnalytics() {
            const departmentAnalytics = document.getElementById('departmentAnalytics');
            const today = new Date().toISOString().split('T')[0];
            
            const departmentData = Object.keys(departments).map(deptKey => {
                const dept = departments[deptKey];
                const deptStudents = students.filter(student => student.department === deptKey);
                const deptTodayRecords = attendanceRecords.filter(record => 
                    record.date === today && record.department === deptKey
                );
                const deptPresentCount = deptTodayRecords.filter(record => record.status === 'present').length;
                const deptRate = deptStudents.length > 0 ? Math.round((deptPresentCount / deptStudents.length) * 100) : 0;
                
                const sectionData = dept.sections.map(section => {
                    const sectionStudents = students.filter(student => 
                        student.department === deptKey && student.section === section
                    );
                    const sectionTodayRecords = attendanceRecords.filter(record => 
                        record.date === today && 
                        record.department === deptKey && 
                        record.section === section
                    );
                    const sectionPresentCount = sectionTodayRecords.filter(record => record.status === 'present').length;
                    const sectionRate = sectionStudents.length > 0 ? Math.round((sectionPresentCount / sectionStudents.length) * 100) : 0;
                    
                    return {
                        section: section,
                        totalStudents: sectionStudents.length,
                        presentCount: sectionPresentCount,
                        absentCount: sectionStudents.length - sectionPresentCount,
                        attendanceRate: sectionRate
                    };
                });
                
                return {
                    department: deptKey,
                    name: dept.name,
                    totalStudents: deptStudents.length,
                    presentCount: deptPresentCount,
                    absentCount: deptStudents.length - deptPresentCount,
                    attendanceRate: deptRate,
                    sections: sectionData
                };
            });
            
            departmentAnalytics.innerHTML = departmentData.map(dept => `
                <div class="border border-gray-200 rounded-lg p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-900">${dept.name}</h4>
                            <p class="text-sm text-gray-500">Department Overview</p>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl font-bold text-gray-900">${dept.attendanceRate}%</p>
                            <p class="text-sm text-gray-500">Overall Rate</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-4 mb-6">
                        <div class="bg-blue-50 p-3 rounded-lg text-center">
                            <p class="text-2xl font-bold text-blue-600">${dept.totalStudents}</p>
                            <p class="text-sm text-gray-600">Total Students</p>
                        </div>
                        <div class="bg-green-50 p-3 rounded-lg text-center">
                            <p class="text-2xl font-bold text-green-600">${dept.presentCount}</p>
                            <p class="text-sm text-gray-600">Present Today</p>
                        </div>
                        <div class="bg-red-50 p-3 rounded-lg text-center">
                            <p class="text-2xl font-bold text-red-600">${dept.absentCount}</p>
                            <p class="text-sm text-gray-600">Absent Today</p>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <div class="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Department Attendance</span>
                            <span>${dept.attendanceRate}%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300" style="width: ${dept.attendanceRate}%"></div>
                        </div>
                    </div>
                    
                    <div>
                        <h5 class="font-medium text-gray-900 mb-3">Section Breakdown</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${dept.sections.map(section => `
                                <div class="bg-gray-50 p-3 rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <h6 class="font-medium text-gray-900">${section.section}</h6>
                                        <span class="text-sm font-medium ${section.attendanceRate >= 80 ? 'text-green-600' : section.attendanceRate >= 60 ? 'text-yellow-600' : 'text-red-600'}">${section.attendanceRate}%</span>
                                    </div>
                                    <div class="space-y-1">
                                        <div class="flex justify-between text-xs text-gray-600">
                                            <span>Total: ${section.totalStudents}</span>
                                            <span>Present: ${section.presentCount}</span>
                                        </div>
                                        <div class="w-full bg-gray-200 rounded-full h-2">
                                            <div class="h-2 rounded-full transition-all duration-300 ${section.attendanceRate >= 80 ? 'bg-green-500' : section.attendanceRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'}" style="width: ${section.attendanceRate}%"></div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function updateCourseAnalytics() {
            const courseAnalytics = document.getElementById('courseAnalytics');
            const today = new Date().toISOString().split('T')[0];
            
            const courseData = courses.map(course => {
                const courseRecords = attendanceRecords.filter(record => record.courseCode === course.code);
                const todayRecords = courseRecords.filter(record => record.date === today);
                const totalClasses = [...new Set(courseRecords.map(record => record.date))].length;
                const presentCount = todayRecords.filter(record => record.status === 'present').length;
                const totalStudentsInCourse = students.filter(student => student.courses.includes(course.id)).length;
                const attendanceRate = totalStudentsInCourse > 0 ? Math.round((presentCount / totalStudentsInCourse) * 100) : 0;
                
                return {
                    course: course,
                    totalClasses: totalClasses,
                    totalStudents: totalStudentsInCourse,
                    presentToday: presentCount,
                    absentToday: totalStudentsInCourse - presentCount,
                    attendanceRate: attendanceRate
                };
            }).filter(data => data.totalStudents > 0);
            
            if (courseData.length === 0) {
                courseAnalytics.innerHTML = '<p class="text-gray-500 text-center py-8">No course data available</p>';
                return;
            }
            
            courseAnalytics.innerHTML = courseData.map(data => `
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <h5 class="font-medium text-gray-900">${data.course.name}</h5>
                            <p class="text-sm text-gray-500">${data.course.code} • ${departments[data.course.department].name}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-lg font-bold ${data.attendanceRate >= 80 ? 'text-green-600' : data.attendanceRate >= 60 ? 'text-yellow-600' : 'text-red-600'}">${data.attendanceRate}%</p>
                            <p class="text-xs text-gray-500">Today's Rate</p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-4 gap-3 mb-3">
                        <div class="text-center">
                            <p class="text-lg font-semibold text-gray-900">${data.totalStudents}</p>
                            <p class="text-xs text-gray-500">Enrolled</p>
                        </div>
                        <div class="text-center">
                            <p class="text-lg font-semibold text-green-600">${data.presentToday}</p>
                            <p class="text-xs text-gray-500">Present</p>
                        </div>
                        <div class="text-center">
                            <p class="text-lg font-semibold text-red-600">${data.absentToday}</p>
                            <p class="text-xs text-gray-500">Absent</p>
                        </div>
                        <div class="text-center">
                            <p class="text-lg font-semibold text-blue-600">${data.totalClasses}</p>
                            <p class="text-xs text-gray-500">Classes Held</p>
                        </div>
                    </div>
                    
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="h-2 rounded-full transition-all duration-300 ${data.attendanceRate >= 80 ? 'bg-green-500' : data.attendanceRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'}" style="width: ${data.attendanceRate}%"></div>
                    </div>
                </div>
            `).join('');
        }

        function loadSampleRecords() {
            // Load some sample records for demonstration
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            const sampleRecords = [
                { date: today.toISOString().split('T')[0], studentId: 'ST001', studentName: 'Alice Johnson', department: 'computer_science', section: 'CS-A', course: 'Programming Fundamentals', courseCode: 'CS101', status: 'present' },
                { date: today.toISOString().split('T')[0], studentId: 'ST002', studentName: 'Bob Smith', department: 'computer_science', section: 'CS-A', course: 'Programming Fundamentals', courseCode: 'CS101', status: 'absent' },
                { date: yesterday.toISOString().split('T')[0], studentId: 'ST001', studentName: 'Alice Johnson', department: 'computer_science', section: 'CS-A', course: 'Data Structures', courseCode: 'CS102', status: 'present' },
                { date: yesterday.toISOString().split('T')[0], studentId: 'ST004', studentName: 'David Wilson', department: 'it', section: 'IT-A', course: 'Network Administration', courseCode: 'IT101', status: 'present' }
            ];
            
            attendanceRecords.push(...sampleRecords);
            displayRecords();
            updateAnalytics();
        }

        // Department Management Functions
        function populateDepartmentSelects() {
            const selects = ['sectionDepartment', 'departmentSelect', 'studentDepartment', 'courseDepartment', 'recordDepartment', 'filterDepartment', 'analyticsFilterDepartment'];
            
            selects.forEach(selectId => {
                const select = document.getElementById(selectId);
                if (select) {
                    const currentValue = select.value;
                    const options = select.innerHTML.split('<option value="">')[0] + '<option value="">' + 
                        (selectId === 'sectionDepartment' ? 'Select Department' : 
                         selectId === 'recordDepartment' ? 'All Departments' : 
                         selectId === 'filterDepartment' ? 'All Departments' : 
                         selectId === 'analyticsFilterDepartment' ? 'All Departments' : 'Select Department') + '</option>';
                    
                    select.innerHTML = options + Object.keys(departments).map(key => 
                        `<option value="${key}">${departments[key].name}</option>`
                    ).join('');
                    
                    if (currentValue) select.value = currentValue;
                }
            });
        }

        document.getElementById('addDepartmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('departmentName').value;
            const code = document.getElementById('departmentCode').value.toLowerCase().replace(/\s+/g, '_');
            const description = document.getElementById('departmentDescription').value;
            
            // Check if department code already exists
            if (departments[code]) {
                alert('Department code already exists!');
                return;
            }
            
            departments[code] = {
                name: name,
                sections: [],
                description: description
            };
            
            // Reset form
            this.reset();
            
            // Update displays
            displayAllDepartments();
            displaySections();
            populateDepartmentSelects();
            
            alert('Department added successfully!');
        });

        document.getElementById('addSectionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const departmentCode = document.getElementById('sectionDepartment').value;
            const sectionName = document.getElementById('sectionName').value;
            
            if (!departments[departmentCode]) {
                alert('Please select a valid department!');
                return;
            }
            
            // Check if section already exists in this department
            if (departments[departmentCode].sections.includes(sectionName)) {
                alert('Section already exists in this department!');
                return;
            }
            
            departments[departmentCode].sections.push(sectionName);
            
            // Reset form
            this.reset();
            
            // Update displays
            displaySections();
            
            alert('Section added successfully!');
        });

        function displayAllDepartments() {
            const allDepartmentsList = document.getElementById('allDepartmentsList');
            
            const departmentEntries = Object.entries(departments);
            
            if (departmentEntries.length === 0) {
                allDepartmentsList.innerHTML = '<p class="text-gray-500 text-center py-8">No departments found</p>';
                return;
            }
            
            allDepartmentsList.innerHTML = departmentEntries.map(([code, dept]) => `
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div class="flex items-center space-x-4">
                        <div class="bg-purple-100 p-2 rounded-full">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">${dept.name}</p>
                            <p class="text-sm text-gray-500">Code: ${code.toUpperCase()} | Sections: ${dept.sections.length}</p>
                            ${dept.description ? `<p class="text-xs text-gray-400 mt-1">${dept.description}</p>` : ''}
                        </div>
                    </div>
                    <button onclick="removeDepartment('${code}')" class="text-red-600 hover:text-red-800 transition duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            `).join('');
        }

        function displaySections() {
            const sectionsDisplay = document.getElementById('sectionsDisplay');
            
            const departmentEntries = Object.entries(departments);
            
            if (departmentEntries.length === 0) {
                sectionsDisplay.innerHTML = '<p class="text-gray-500 text-center py-4">No departments found</p>';
                return;
            }
            
            sectionsDisplay.innerHTML = departmentEntries.map(([code, dept]) => `
                <div class="border border-gray-200 rounded-lg p-4">
                    <h5 class="font-medium text-gray-900 mb-2">${dept.name}</h5>
                    <div class="flex flex-wrap gap-2">
                        ${dept.sections.length > 0 ? 
                            dept.sections.map(section => `
                                <div class="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                                    <span>${section}</span>
                                    <button onclick="removeSection('${code}', '${section}')" class="ml-2 text-blue-600 hover:text-blue-800">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            `).join('') : 
                            '<span class="text-gray-500 text-sm">No sections</span>'
                        }
                    </div>
                </div>
            `).join('');
        }

        function removeDepartment(departmentCode) {
            // Check if department has students or courses
            const hasStudents = students.some(student => student.department === departmentCode);
            const hasCourses = courses.some(course => course.department === departmentCode);
            
            if (hasStudents || hasCourses) {
                alert('Cannot delete department. It has students or courses assigned to it. Please remove them first.');
                return;
            }
            
            if (confirm('Are you sure you want to remove this department and all its sections?')) {
                delete departments[departmentCode];
                
                displayAllDepartments();
                displaySections();
                populateDepartmentSelects();
                updateAnalytics();
            }
        }

        function removeSection(departmentCode, sectionName) {
            // Check if section has students
            const hasStudents = students.some(student => 
                student.department === departmentCode && student.section === sectionName
            );
            
            if (hasStudents) {
                alert('Cannot delete section. It has students assigned to it. Please move or remove them first.');
                return;
            }
            
            if (confirm(`Are you sure you want to remove section "${sectionName}"?`)) {
                departments[departmentCode].sections = departments[departmentCode].sections.filter(
                    section => section !== sectionName
                );
                
                displaySections();
            }
        }

        function updateAnalyticsSectionDropdown() {
            const selectedDepartment = document.getElementById('analyticsFilterDepartment').value;
            const sectionSelect = document.getElementById('analyticsFilterSection');
            
            sectionSelect.innerHTML = '<option value="">All Sections</option>';
            
            if (selectedDepartment && departments[selectedDepartment]) {
                departments[selectedDepartment].sections.forEach(section => {
                    sectionSelect.innerHTML += `<option value="${section}">${section}</option>`;
                });
            }
        }

        // Initialize records display
        displayRecords();
   
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96675f9606cc1412',t:'MTc1MzczNzEzMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();