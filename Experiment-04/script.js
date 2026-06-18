document.getElementById('calculateBtn').addEventListener('click', function() {
    const countInput = document.getElementById('subjectCount').value;
    const numSubjects = parseInt(countInput);
    
    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert('Please enter a valid number of subjects.');
        return;
    }

    let totalMarks = 0;
    
    for (let i = 1; i <= numSubjects; i++) {
        let marksInput = prompt(`Enter marks for Subject ${i}`);
        let marks = parseFloat(marksInput);
        
        while (isNaN(marks) || marks < 0 || marks > 100) {
            marksInput = prompt(`Invalid entry. Enter marks for Subject ${i} (0-100):`);
            marks = parseFloat(marksInput);
        }
        
        totalMarks += marks;
    }

    const averageMarks = totalMarks / numSubjects;
    let grade = '';
    let result = 'PASS';

    if (averageMarks >= 90) {
        grade = 'O';
    } else if (averageMarks >= 80) {
        grade = 'A+';
    } else if (averageMarks >= 70) {
        grade = 'A';
    } else if (averageMarks >= 60) {
        grade = 'B';
    } else if (averageMarks >= 50) {
        grade = 'C';
    } else if (averageMarks >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
        result = 'FAIL';
    }

    const displayDiv = document.getElementById('resultDisplay');
    displayDiv.innerHTML = `
        <p>Total Marks: ${totalMarks}</p>
        <p>Average Marks: ${averageMarks.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
        <p>Result: ${result}</p>
    `;
});