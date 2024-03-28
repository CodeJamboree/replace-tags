function setValues(newValues) {
  values = newValues;
  var el = document.getElementById("values");
  el.textContent = JSON.stringify(values, null, 2);
  delete el.dataset.highlighted;
  hljs.highlightElement(el);
}
