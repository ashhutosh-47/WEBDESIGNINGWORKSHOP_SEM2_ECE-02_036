let employees = [];

/* ===================== ADD EMPLOYEE ===================== */
function addEmployee() {
    let name   = document.getElementById("empName").value.trim();
    let id     = parseInt(document.getElementById("empId").value);
    let salary = parseFloat(document.getElementById("empSalary").value);
    let dept   = document.getElementById("empDept").value.trim();

    // Validation
    if (!name || isNaN(id) || isNaN(salary) || !dept) {
        showAddMessage("⚠️ Fill all fields correctly", "error");
        return;
    }

    // Check duplicate ID
    let exists = employees.find(emp => emp.id === id);
    if (exists) {
        showAddMessage("⚠️ ID already exists", "error");
        return;
    }

    // Add employee
    employees.push({ name, id, salary, department: dept });

    showAddMessage(`✅ ${name} added!`, "success");
    clearInputs();
}

/* ===================== DISPLAY ALL ===================== */
function displayAllEmployees() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">No employees found</div>');
        return;
    }

    let html = `<p class="result-title">All Employees (${employees.length})</p>`;
    html += `<table class="emp-table">
    <thead>
        <tr><th>ID</th><th>Name</th><th>Dept</th><th>Salary</th></tr>
    </thead><tbody>`;

    for (let emp of employees) {
        let cls = emp.salary > 50000 ? "badge-high" : "badge-low";

        html += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td class="${cls}">₹${emp.salary.toLocaleString('en-IN')}</td>
        </tr>`;
    }

    html += "</tbody></table>";
    showResult(html);
}

/* ===================== FILTER ===================== */
function filterHighSalary() {
    let data = employees.filter(emp => emp.salary > 50000);

    if (data.length === 0) {
        showResult('<div class="empty-state">No high salary employees</div>');
        return;
    }

    let html = `<p class="result-title">High Earners (${data.length})</p>`;
    html += `<table class="emp-table"><tbody>`;

    for (let emp of data) {
        html += `<tr>
            <td>${emp.name}</td>
            <td>₹${emp.salary.toLocaleString('en-IN')}</td>
        </tr>`;
    }

    html += "</tbody></table>";
    showResult(html);
}

/* ===================== TOTAL ===================== */
function calculateTotalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    showResult(`
    <div class="stat-card">
        <div class="stat-label">Total Salary</div>
        <div class="stat-value">₹${total.toLocaleString('en-IN')}</div>
    </div>`);
}

/* ===================== AVERAGE ===================== */
function calculateAverageSalary() {
    if (employees.length === 0) {
        showResult('<div class="empty-state">No employees available</div>');
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    showResult(`
    <div class="stat-card">
        <div class="stat-label">Average Salary</div>
        <div class="stat-value">₹${avg.toFixed(2)}</div>
    </div>`);
}

/* ===================== COUNT BY DEPT ===================== */
function countByDepartment() {
    let dept = document.getElementById("deptInput").value.trim().toLowerCase();

    let count = employees.filter(
        emp => emp.department.toLowerCase() === dept
    ).length;

    showResult(`
    <div class="stat-card">
        <div class="stat-label">${dept.toUpperCase()} Department</div>
        <div class="stat-value">${count}</div>
    </div>`);
}

/* ===================== HELPERS ===================== */
function showResult(html) {
    let el = document.getElementById("resultArea");
    el.innerHTML = html;
    el.classList.remove("hidden");
}

function showAddMessage(text, type) {
    let msg = document.getElementById("addMessage");
    msg.textContent = text;
    msg.className = "message " + type;
    msg.classList.remove("hidden");

    setTimeout(() => msg.classList.add("hidden"), 3000);
}

function clearInputs() {
    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}

/* ===================== UI CONTROLS ===================== */
let heading = document.getElementById('mainheading');
let paragraph = document.getElementById('paragraph');
let input = document.getElementById('name');
let fontSize = 16;

document.getElementById('changtxtbtn').addEventListener('click', function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

document.getElementById('bgcolorbtn').onclick = function () {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById('fontsizebtn').addEventListener('click', function () {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
});

document.getElementById('togglebtn').addEventListener('click', function () {
    paragraph.style.display =
        (paragraph.style.display === "none") ? "block" : "none";
});

document.getElementById('resetbtn').addEventListener('click', function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.fontSize = "16px";
    fontSize = 16;
    paragraph.style.display = "block";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
});