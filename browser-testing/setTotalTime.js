function setTotalTime(milliseconds) {
  var text = window.luxon.Duration.fromMillis(milliseconds)
    .rescale()
    .mapUnits((value, unit) => {
      if (isNaN(value)) return 0;
      if (unit === "millisecond") return value;
      if (unit === "milliseconds") return value;
      return Math.round(value);
    })
    .rescale()
    .toHuman({
      listStyle: "long",
    });
  document.getElementById("time").textContent = text;
}
