var std = document.getElementById("standard");
var mtr = document.getElementById("metric");

std.addEventListener("click", () => {
  std.className = "large";
  mtr.className = "small";
});
mtr.addEventListener("click", () => {
  mtr.className = "large";
  std.className = "small";
});
