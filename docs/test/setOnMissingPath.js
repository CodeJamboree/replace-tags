function setOnMissingPath(value) {
  var el = document.getElementById("onMissingPath");
  console.log("value", value);
  el.innerHTML = value.replace("\n", "<br />").replace("\r", "");
  delete el.dataset.highlighted;
  hljs.highlightElement(el, { language: "javascript" });
}
