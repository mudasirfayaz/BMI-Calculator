var stdUnit = document.getElementById("standardUnit");
var mtrUnit = document.getElementById("metricUnit");
var std = document.getElementById("standard");
var mtr = document.getElementById("metric");

stdUnit.addEventListener("click", () => {
  stdUnit.className = "large";
  std.classList.remove("none");
  mtrUnit.className = "small";
  mtr.classList.add("none");
});
mtrUnit.addEventListener("click", () => {
  mtrUnit.className = "large";
  mtr.classList.remove("none");
  stdUnit.className = "small";
  std.classList.add("none");
});

function bmiCalc() {
  var output = document.getElementById("output");
  var pds = parseInt(document.getElementById("pds").value);
  var ft = parseInt(document.getElementById("ft").value);
  var ins = parseInt(document.getElementById("in").value);
  var kg = parseInt(document.getElementById("kg").value);
  var cm = parseInt(document.getElementById("cm").value);
  var inches = ft * 12 + ins;

  var result1 = ((pds / inches ** 2) * 703).toFixed(1);
  var result2 = ((kg / cm ** 2) * 10000).toFixed(1);

  if (stdUnit.className === "large") {
    output.value = result1;
  } else {
    output.value = result2;
  }
}
