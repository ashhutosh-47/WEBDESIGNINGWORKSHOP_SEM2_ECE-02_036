let employees = [];

document.getElementById('addBtn').addEventListener('click', function() {
    const name = document.getElementById('empName').value.trim();
    const id = document.getElementById('empId').value.trim();
    const salary = parseFloat(document.getElementById('empSalary').value);
    const department = document.getElementById('empDept').value.trim();

    if (!name || !id || isNaN(salary) || !department) {
        alert('Please fill out all employee detail fields properly.');
        return;
    }

    const employeeObj = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(employeeObj);
    alert('Employee Added Successfully!');

    document.getElementById('empName').value = '';
    document.getElementById('empId').value = '';
    document.getElementById('empSalary').value = '';
    document.getElementById('empDept').value = '';
});

document.getElementById('displayAllBtn').addEventListener('click', function() {
    const display = document.getElementById('outputDisplay');
    if (employees.length === 0) {
        display.innerHTML = '<h3>All Employees</h3><p>No records found.</p>';
        return;
    }

    let html = '<h3>All Employees</h3>';
    employees.forEach(emp => {
        html += `<p>Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.department}</p>`;
    });
    display.innerHTML = html;
});

document.getElementById('filterBtn').addEventListener('click', function() {
    const display = document.getElementById('outputDisplay');
    const highEarners = employees.filter(emp => emp.salary > 50000);

    if (highEarners.length === 0) {
        display.innerHTML = '<h3>Employees with Salary > ₹50,000</h3><p>No records found matching this criterion.</p>';
        return;
    }

    let html = '<h3>Employees with Salary > ₹50,000</h3>';
    highEarners.forEach(emp => {
        html += `<p>Name: ${emp.name} | ID: ${emp.id} | Salary: ₹${emp.salary} | Dept: ${emp.department}</p>`;
    });
    display.innerHTML = html;
});

document.getElementById('totalBtn').addEventListener('click', function() {
    const display = document.getElementById('outputDisplay');
    const totalPayout = employees.reduce((sum, emp) => sum + emp.salary, 0);
    display.innerHTML = `<h3>Total Salary Payout</h3><p>Total Salary Payout: ₹${totalPayout}</p>`;
});

document.getElementById('avgBtn').addEventListener('click', function() {
    const display = document.getElementById('outputDisplay');
    if (employees.length === 0) {
        display.innerHTML = '<h3>Average Salary</h3><p>Average Salary: ₹0</p>';
        return;
    }
    const totalPayout = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const average = totalPayout / employees.length;
    display.innerHTML = `<h3>Average Salary</h3><p>Average Salary: ₹${average.toFixed(2)}</p>`;
});

document.getElementById('countDeptBtn').addEventListener('click', function() {
    const display = document.getElementById('outputDisplay');
    const deptInput = prompt('Enter Department Name to count employees:');
    if (!deptInput) return;

    const targetDept = deptInput.trim().toLowerCase();
    const count = employees.filter(emp => emp.department.toLowerCase() === targetDept).length;
    
    display.innerHTML = `<h3>Department Count</h3><p>Number of employees in department "${deptInput}": ${count}</p>`;
});