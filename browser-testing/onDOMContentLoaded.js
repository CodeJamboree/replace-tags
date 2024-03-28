function onDOMContentLoaded() {
  var t = getInvoiceTemplate();
  template = t.template;
  values = t.values;

  displayPackage();
  document
    .getElementById("loadButton")
    .addEventListener("click", handleChangeEnvironment);

  // Setup itterations
  var itterations = document.getElementById("itterations");
  for (var i = 1; i <= 1000000; i *= 10) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i.toLocaleString();
    itterations.appendChild(option);
  }

  tagStyle.addEventListener("change", handleStyleChanged);
  document
    .getElementById("runTestsButton")
    .addEventListener("click", handleRunTestsButtonClick);
  setValues(values);

  var templateRadios = document.getElementsByName("template");
  templateRadios.forEach(function (radio) {
    radio.addEventListener("change", handleChangeTemplate);
  });

  fetch(
    "https://data.jsdelivr.com/v1/packages/npm/@codejamboree/replace-tags",
  ).then(handleJSDelivrResponse);
}
