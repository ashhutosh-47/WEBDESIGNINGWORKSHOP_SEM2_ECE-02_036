const heading = document.getElementById('mainHeading');
const paragraph = document.getElementById('mainParagraph');
const textInput = document.getElementById('textInput');
const changeTextBtn = document.getElementById('changeTextBtn');
const colorBtn = document.getElementById('colorBtn');
const sizeBtn = document.getElementById('sizeBtn');
const toggleBtn = document.getElementById('toggleBtn');
const resetBtn = document.getElementById('resetBtn');

const originalHeadingText = heading.textContent;
const originalFontSize = 32; 
let currentFontSize = originalFontSize;

changeTextBtn.addEventListener('click', function() {
    const inputValue = textInput.value.trim();
    if (inputValue !== "") {
        heading.textContent = inputValue;
        textInput.value = "";
    } else {
        alert("Please enter some text first.");
    }
});

colorBtn.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

sizeBtn.addEventListener('click', function() {
    currentFontSize += 4;
    heading.style.fontSize = currentFontSize + 'px';
});

toggleBtn.addEventListener('click', function() {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        toggleBtn.textContent = 'Hide Paragraph';
    } else {
        paragraph.style.display = 'none';
        toggleBtn.textContent = 'Show Paragraph';
    }
});

resetBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = '#eef2f3';
    heading.textContent = originalHeadingText;
    currentFontSize = originalFontSize;
    heading.style.fontSize = originalFontSize + 'px';
    paragraph.style.display = 'block';
    toggleBtn.textContent = 'Hide Paragraph';
    textInput.value = "";
});