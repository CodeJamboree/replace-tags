function handleChangeEnvironment() {
  const script = document.createElement("script");
  script.src = this.value;
  script.type = "text/javascript";
  script.onload = displayPackage;
  script.onerror = function () {
    alert("Failed to load library");
  };
  document.body.appendChild(script);
}
