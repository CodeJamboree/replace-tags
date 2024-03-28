function getOnMissingPath() {
  const src = document
    .getElementById("onMissingPath")
    .innerText.trim();
  if (src === "") return undefined;
  return new Function("path", "tag", src);
}
