
src="https://cdn.jsdelivr.net/npm/chart.js"



function handleButtonClick(section, buttonId) {
    var pointsCounter = document.getElementById('pointsCounter');
    var currentPoints = parseInt(pointsCounter.textContent);
    var pointsToAdd = 0;

    // Determine points to add based on section
    if (section === 'beginner') {
        pointsToAdd = 5;
    } else if (section === 'intermediate') {
        pointsToAdd = 10;
    } else if (section === 'advanced') {
        pointsToAdd = 15;
    }

    // Add points and update counter
    pointsCounter.textContent = currentPoints + pointsToAdd;
}

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}


function loadPageAndHandleButtonClick(page, section, buttonId) {
    var button = document.getElementById(buttonId);
  if(!button.disabled)
  {
    handleButtonClick(section, buttonId);
    button.disabled = true;
  }
  loadPage(page);
    
    
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function calculateInterest() {
    // Get values from input fields
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Calculate simple interest
    var interest = (principal * rate * time) / 100;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Simple Interest: " + interest.toFixed(2);
}

function calculateInterest() {
    // Get values from input fields
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Calculate simple interest
    var interest = (principal * rate * time) / 100;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Simple Interest: " + interest.toFixed(2);

    // Create data for the pie chart
    var data = {
        labels: ['Principal', 'Simple Interest'],
        datasets: [{
            data: [principal, interest],
            backgroundColor: ['#36a2eb', '#ff6384'],
            hoverBackgroundColor: ['#36a2eb', '#ff6384']
        }]
    };

    // Get the canvas element
    var ctx = document.getElementById('pieChart').getContext('2d');

    // Create and render the pie chart
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data
    });
}

// Get all buttons and panels
const buttons = document.querySelectorAll('.button-container button');
const panels = document.querySelectorAll('.panel');

// Initialize button counters
let buttonCounter = 0;

// Function to enable or disable buttons based on buttonCounter
function updateButtonStatus() {
    const section2Button = document.getElementById('section2');
    const section3Button = document.getElementById('section3');

    // Enable Section 2 button if all Section 1 buttons are clicked
    if (buttonCounter >= 3) {
        section2Button.disabled = false;
    }

    // Enable Section 3 button if all Section 2 buttons are clicked
    if (buttonCounter >= 6) {
        section3Button.disabled = false;
    }
}

// Add event listeners to buttons to increment buttonCounter and call updateButtonStatus
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonCounter++;
        updateButtonStatus();
    });
});

function handleButtonClick(buttonId) {
    var pointsCounter = document.getElementById('pointsCounter');
    var currentPoints = parseInt(pointsCounter.textContent);
    pointsCounter.textContent = currentPoints + 5;
}