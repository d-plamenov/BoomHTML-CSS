import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const imageDiv = document.querySelectorAll(".image")[0];
  imageDiv.addEventListener("click", () => {
    imageDiv.style['transform'] = 'scale(2)';
  })

});
