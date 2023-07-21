import "./styles.css";

import * as React from "react";
import { CardBundle, Bundle, Product } from "@tripadd/components";

// Functional Component
const ExampleBundle = () => {
  // Construct products and bundle offer
  const products: Product[] = [
    {
      id: "1",
      category: "ACTIVITIES",
      description: "Surfing on sand dunes ",
      price: "222",
      name: "Surfing",
      pricing_type: "PASSENGER",
      quantity: 1,
      short_description: "Surfing on sand dunes",
      icon_url: "https://linkto.com/iconurl.png"
    },
    {
      id: "2",
      category: "LUGGAGE_PROTECTION",
      description: "Your luggage protection service",
      price: "10",
      name: "Luggage Protection",
      pricing_type: "PASSENGER",
      quantity: 1,
      short_description: "Protected your luggage",
      icon_url: "https://linkto.com/iconurl.png"
    }
  ];

  const bundle: Bundle = {
    id: "1",
    currency: "USD",
    price: "200",
    products: products,
    fee: {
      minimum: 5,
      percent: 10
    },
    passengers_count: 1
  };

  // the handler gets called with updated data every time the user interacts with the bundle offer
  const onChangeHandler = (selectedProducts: Product[], price: number) => {
    // pass to your back-end for ordering
  };

  // pass data for rendering
  return (
    <CardBundle
      bundle={bundle}
      onChange={onChangeHandler}
      preSelectedProducts={products}
    />
  );
};

export default ExampleBundle;
