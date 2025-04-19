document.addEventListener("DOMContentLoaded", function () {
    const fullName = localStorage.getItem('fullName');
    const studentNumber = localStorage.getItem('studentNumber');
    const mpesaNumber = localStorage.getItem('mpesaNumber');
  
    document.getElementById('receiptName').textContent = fullName || "N/A";
    document.getElementById('receiptNumber').textContent = studentNumber || "N/A";
    document.getElementById('receiptMpesa').textContent = mpesaNumber || "N/A";
  
    // Generate a random 10-character alphanumeric ID
    const randomId = Math.random().toString(36).substring(2, 12).toUpperCase();
    document.getElementById('paymentId').textContent = randomId;
  
    // Generate QR code
    new QRCode(document.getElementById("qrcode"), {
      text: randomId,
      width: 128,
      height: 128
    });
  });
  