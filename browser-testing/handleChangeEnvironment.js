function handleChangeEnvironment() {
  const cdnSource = document.getElementById("cdnSource").value;
  const cdnVersion = document.getElementById("cdnVersion").value;
  const cdnEnvironment =
    document.getElementById("cdnEnvironment").value;

  let src;

  if (cdnSource === "local") {
    loadScript("../" + cdnEnvironment);
  } else {
    loadScript(`${cdnSource}@${cdnVersion}${cdnEnvironment}`);
  }
}

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript";
  script.onload = displayPackage;
  script.onerror = function () {
    alert("Failed to load library");
  };
  document.body.appendChild(script);
}
