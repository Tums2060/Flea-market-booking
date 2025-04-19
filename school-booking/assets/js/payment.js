document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('paymentForm');
    const paymentSuccess = document.getElementById('paymentSuccess');
    const receiptBtn = document.getElementById('receiptBtn');
  
    if (!form || !paymentSuccess || !receiptBtn) {
      console.error("One or more elements not found!");
      return;
    }
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent form from submitting normally
  
      const fullName = document.getElementById('fullName').value;
      const studentNumber = document.getElementById('studentNumber').value;
      const mpesaNumber = document.getElementById('mpesaNumber').value;
  
      // Store values for the receipt
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('studentNumber', studentNumber);
      localStorage.setItem('mpesaNumber', mpesaNumber);
  
      // Simulate payment with alert and show success message
      alert('Processing payment via M-Pesa...');
  
      setTimeout(() => {
        form.style.display = 'none';
        paymentSuccess.style.display = 'block';
      }, 3000);
    });
  
    receiptBtn.addEventListener('click', function () {
      window.location.href = 'receipt.html';
    });
  });
  