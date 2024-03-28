function handleRunTestsButtonClick() {
  document.getElementById("runTestsButton").disabled = true;
  document.getElementById("results").textContent = "Running...";

  var text = getText();
  var values = getValues();
  var itterations = parseInt(
    document.getElementById("itterations").value,
  );
  var options = {};

  options.cache = document.getElementById("caching").checked;

  var tagStyle = document.getElementById("tagStyle");
  var style = styles[parseInt(tagStyle.value)];
  options.tagPattern = style.tagPattern;
  options.tagStartPattern = style.tagStartPattern;
  options.tagEndPattern = style.tagEndPattern;
  results = "";

  var start = performance.now();
  for (var i = 1; i < itterations; i++)
    replaceTags(text, values, options);
  results = replaceTags(text, values, options);
  var end = performance.now();
  var time = end - start;
  var average = (end - start) / itterations;

  document.getElementById("results").textContent = results;
  document.getElementById("time").textContent = time.toLocaleString();
  document.getElementById("average").textContent =
    average.toLocaleString();
  document.getElementById("runTestsButton").disabled = false;
}
