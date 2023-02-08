import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
    let productDiv = document.getElementsByClassName("product")[0];
    let priceDiv = document.getElementsByClassName("price")[0];
    let price = priceDiv.innerHTML;

    productDiv.setAttribute("data-price", price);
});
