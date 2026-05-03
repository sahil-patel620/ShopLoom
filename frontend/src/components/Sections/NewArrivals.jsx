import React from "react";
import SectionHeading from "./SectionsHeading/SectionHeading";
import Card from "../Card/Card";
import Jeans from "../../assets/img/jeans.jpg";
import Tshirt from "../../assets/img/tshirts.jpeg";
import Dresses from "../../assets/img/dresses.jpg";
import Shirt from "../../assets/img/shirts.jpg";
import Joggers from "../../assets/img/joggers.jpg";
import Kurtis from "../../assets/img/kurtis.jpg";

const items = [
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "Shirts",
    imagePath: Shirt,
  },
  {
    title: "T-shirts",
    imagePath: Tshirt,
  },
  {
    title: "Dresses",
    imagePath: Dresses,
  },
  {
    title: "Joggers",
    imagePath:Joggers,
  },
  {
    title: "Kurtis",
    imagePath: Kurtis,
  },
  
];

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />
      <div className="flex flex-wrap">
        {items && items.map((item, index) => (
          <Card key={index} imagePath={item.imagePath} title={item.title} />
        ))}
      </div>
    </>
  );
};

export default NewArrivals;
