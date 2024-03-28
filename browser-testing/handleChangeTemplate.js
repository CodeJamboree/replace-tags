function handleChangeTemplate() {
  var templateRadios = document.getElementsByName("template");
  var templateValue = "";
  templateRadios.forEach(function (radio) {
    if (radio.checked) templateValue = radio.value;
  });
  switch (templateValue) {
    case "invoice": {
      var t = getInvoiceTemplate();
      template = t.template;
      setValues(t.values);
      break;
    }
    case "complex": {
      var t = getComplexTemplate();
      template = t.template;
      setValues(t.values);
      break;
    }
    default:
    // Let it be
  }
  handleStyleChanged();
}
