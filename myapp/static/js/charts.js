document.addEventListener('DOMContentLoaded', function() {
    renderCharts();
});

function renderCharts() {
    // Bar Chart
    new Chart(document.getElementById('bar-chart'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(0, 123, 255, 0.5)'
            }]
        }
    });

    // Line Chart
    new Chart(document.getElementById('line-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Visitors',
                data: [10, 11, 5, 8, 3, 7],
                borderColor: 'rgba(220, 53, 69, 0.5)',
                fill: false
            }]
        }
    });

    // Pie Chart
    new Chart(document.getElementById('pie-chart'), {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['Red', 'Blue', 'Yellow']
            }]
        }
    });

    // Doughnut Chart
    new Chart(document.getElementById('doughnut-chart'), {
        type: 'doughnut',
        data: {
            labels: ['Green', 'Purple', 'Orange'],
            datasets: [{
                data: [50, 150, 120],
                backgroundColor: ['Green', 'Purple', 'Orange']
            }]
        }
    });
}
