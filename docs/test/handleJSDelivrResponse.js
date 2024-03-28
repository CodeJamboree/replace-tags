function handleJSDelivrResponse(response) {
  response.json().then(function (data) {
    var latestVersion = data.tags.latest;

    var cdnVersion = document.getElementById("cdnVersion");

    // Setup itterations
    data.versions.forEach((versionInfo) => {
      var option = document.createElement("option");
      option.value = versionInfo.version;
      option.textContent = versionInfo.version;
      if (versionInfo.version === latestVersion) {
        option.textContent += " (latest)";
      }
      cdnVersion.appendChild(option);
    });
  });
}
