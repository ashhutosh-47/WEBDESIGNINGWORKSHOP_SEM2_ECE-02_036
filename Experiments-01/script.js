function calculateResult() {
    const n = document.getElementById("subjects").value;
    let total = 0;
    let i;

    for (i = 0; i < n; i++) {
        
        let x = parseFloat(prompt("Enter the subject Number " + (i + 1)));
        total += x;
    }

    let avg = total / n;
    let grade;

    
    if (avg > 90) {
        grade = 'A';
    } else if (avg > 80) {
        grade = 'B';
    } else if (avg > 70) {
        grade = 'C';
    } else if (avg > 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    let r;
    if (avg > 60) {
        r = 'Pass';
    } else {
        r = 'Fail';
    }

    
    document.getElementById("result").innerHTML = 
        "Total Marks: " + total + "<br />" +
        "Average Marks: " + avg.toFixed(2) + "<br />" +
        "Grade: " + grade + "<br />" +
        "Result: " + r;
}