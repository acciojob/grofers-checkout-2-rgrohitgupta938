document.addEventListener("DOMContentLoaded", () => {
  console.log("ji");
  function calculateTotal() {
    const priceElements = document.querySelectorAll('[data-ns-test="price"]');
    console.log(priceElements);
    let total = 0;

    priceElements.forEach((priceElement) => {
      const price = parseInt(priceElement.textContent);
      if (!isNaN(price)) {
      total += price;
    }
    });

    return total;
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
