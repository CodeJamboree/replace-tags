function handleStyleChanged() {
  var tagStyle = document.getElementById("tagStyle");
  var style = styles[tagStyle.selectedIndex] ?? {};
  setText(
    template
      .replace(/{{/g, style.openingTag)
      .replace(/}}/g, style.closingTag),
  );
}
