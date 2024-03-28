var packageJson = { name: "@codejamboree/replace-tags" };
var replaceTags;
var styles;
var template = `Hello {{user.name}}, 

Thank you for your recent purchase of {{product.name}}.
You purchased {{product.quantity}} {{product.name}}(s) at {{product.price}} each.

Here are the items you purchased:
- {{product.items[0].name}} (Quantity: {{product.items[0].quantity}}, Price: {{product.items[0].price}})
- {{product.items[1].name}} (Quantity: {{product.items[1].quantity}}, Price: {{product.items[1].price}})

Your total comes to {{total}}.

If you have any questions, please contact our support team at {{support.email}}.

Regards,
{{company.name}}
`;
var values = {
  user: {
    name: "John Doe",
  },
  product: {
    name: "Widget",
    quantity: 3,
    price: 10.99,
    items: [
      {
        name: "Item 1",
        quantity: 1,
        price: 5.99,
      },
      {
        name: "Item 2",
        quantity: 2,
        price: 6.99,
      },
    ],
  },
  total: 32.97,
  support: {
    email: "support@example.com",
  },
  company: {
    name: "Example Inc.",
  },
};

// values = generateRandomObject(3, 10);

paths = generateDotPaths(10000); //.sort();
values = createObjectFromDotPaths(paths);

console.log(paths);

// paths = getDotPaths(values).sort(function () {
//   return Math.random() - 0.5;
// });
template = "";
paths.forEach(function (path) {
  template += `{{${path}}}\n`;
});

function onStyleChanged() {
  var tagStyle = document.getElementById("tagStyle");
  document.getElementById("average").textContent = "0";
  document.getElementById("time").textContent = "0";
  var style = styles[parseInt(tagStyle.value)];
  var text = document.getElementById("text");
  text.value = template
    .replace(/{{/g, style.openingTag)
    .replace(/}}/g, style.closingTag);
}

function onDOMContentLoaded() {
  replaceTags = window["@codejamboree/replace-tags"].replaceTags;
  styles = window["@codejamboree/replace-tags"].styles;
  styles.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  // Setup itterations
  var itterations = document.getElementById("itterations");
  for (var i = 1; i <= 1000000; i *= 10) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i.toLocaleString();
    itterations.appendChild(option);
  }

  // Setup tag style
  var tagStyle = document.getElementById("tagStyle");

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
  tagStyle.addEventListener("change", onStyleChanged);
  document
    .getElementById("runTestsButton")
    .addEventListener("click", onRunTestsButtonClick);
  document.getElementById("text").value = template;
  document.getElementById("values").textContent = JSON.stringify(
    values,
    null,
    2,
  );
  hljs.highlightElement(document.getElementById("values"));
  onStyleChanged();
}

function onRunTestsButtonClick() {
  document.getElementById("runTestsButton").disabled = true;
  document.getElementById("results").textContent = "Running...";

  var text = document.getElementById("text").value;
  var values = JSON.parse(
    document.getElementById("values").textContent,
  );
  var itterations = parseInt(
    document.getElementById("itterations").value,
  );
  var options = {};

  options.caching = document.getElementById("caching").checked;

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

describe("replaceTags", function () {
  it("should replace text", function () {
    expect(replaceTags("{{name}}", { name: "John Doe" })).toBe(
      "John Doe",
    );
  });
});

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
