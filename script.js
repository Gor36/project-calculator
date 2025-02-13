const checkBoard = document.querySelector('input[name="display"]');

checkBoard.addEventListener("input", function (event) {
  this.value = this.value.replace(/[^0-9]/g, "");
});
