function getInvoiceTemplate() {
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

  return { template, values };
}
