
src="https://cdn.jsdelivr.net/npm/chart.js"

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
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

