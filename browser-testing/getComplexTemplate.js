function getComplexTemplate() {
  paths = generateDotPaths(100);
  values = createObjectFromDotPaths(paths);

  paths.push(paths);
  paths.push(paths);
  paths.sort(function () {
    return Math.random() - 0.5;
  });

  template = "";
  paths.forEach(function (path) {
    template += `{{${path}}}\n`;
  });

  return { template, values };
}
