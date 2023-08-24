const calculateBtn = document.getElementById("calculateBtn");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  
  if (!isNaN(amount)) {
    const vatAmount = amount * 0.16;
    const totalAmount = amount + vatAmount;
    
    resultDiv.innerHTML = `
      <p>Amount: Ksh ${amount.toFixed(2)}</p>
      <p>VAT (16%): Ksh ${vatAmount.toFixed(2)}</p>
      <p>Total: Ksh ${totalAmount.toFixed(2)}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p>Please enter a valid amount.</p>";
  }
});
