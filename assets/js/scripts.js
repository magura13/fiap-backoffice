function updateDashboard() {
  document.getElementById('totalBalance').innerText = "$15000.00";
  document.getElementById('totalReceivables').innerText = "$8000.00";
  document.getElementById('totalPayments').innerText = "$5000.00";
}

const ctx = document.getElementById('financeChart').getContext('2d');
const financeChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
          label: 'Receivables',
          data: [3000, 4000, 5000, 6000, 7000],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
      }, {
          label: 'Payments',
          data: [1000, 2000, 3000, 4000, 5000],
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false,
      }]
  },
  options: {
      responsive: true,
      title: {
          display: true,
          text: 'Financial Data Overview'
      }
  }
});

window.onload = function() {
  updateDashboard();
}
