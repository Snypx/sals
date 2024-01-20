document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
});

function loadDashboardData() {
    // Here you would fetch data from your backend or API
    // For demonstration, we're using static data

    document.getElementById('total-sales').innerHTML = 'Rs.120,000';
    document.getElementById('sales-by-region').innerHTML = 'New road: 40%, Putalisadak: 30%, Pulchowk: 30%';
    document.getElementById('top-products').innerHTML = ' Acer, Asus, Dell';
}

// Implement more complex logic and data fetching here
document.addEventListener('DOMContentLoaded', function() {
    populateProductTable();
});

function populateProductTable() {
    // Example product data
    const products = [
        { id: 1, name: 'Product A', price: '$20' },
        { id: 2, name: 'Product B', price: '$30' },
        // Add more products as needed
    ];

    const tableBody = document.getElementById('product-table-body');
    products.forEach(product => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><button onclick="viewProductDetails(${product.id})" class="btn btn-primary">View</button></td>
        `;
    });
}

function viewProductDetails(productId) {
    alert('Viewing details for product ID: ' + productId);
    // Implement the logic to view product details
    // This could be redirecting to a new page or displaying a modal
}
