function displayPackage() {
  const lib = window["@codejamboree/replace-tags"];
  replaceTags = lib.replaceTags;
  styles = lib.styles ?? [];
  styles.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  // Setup tag style
  var tagStyle = document.getElementById("tagStyle");
  var selectedIndex = tagStyle.selectedIndex;
  tagStyle.innerHTML = "";
  styles.forEach(function (style, i) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent =
      style.openingTag +
      " name " +
      style.closingTag +
      " " +
      style.name;
    tagStyle.appendChild(option);
  });
  if (selectedIndex === -1 || selectedIndex >= styles.length)
    selectedIndex = 0;

  tagStyle.selectedIndex = selectedIndex;

  document.getElementById("version").textContent = lib.version;
  document.getElementById("timestamp").textContent = new Date(
    lib.timestamp,
  ).toLocaleString();
  handleStyleChanged();
}
