document.addEventListener("DOMContentLoaded", () => {
  console.log("ji");
  function calculateTotal() {
    const priceElements = document.querySelectorAll('[data-ns-test="prices"]');
    console.log(priceElements);
    let total = 0;

    priceElements.forEach((priceElement) => {
      const price = parseFloat(priceElement.textContent);
      total += price;
    });

    return total.toFixed(2);
  }

  function updateTotal() {
    const grandTotalElement = document.querySelector(
      '[data-ns-test="grandTotal"]'
    );
    const total = calculateTotal();
    grandTotalElement.textContent += total;
  }

  updateTotal();
});
