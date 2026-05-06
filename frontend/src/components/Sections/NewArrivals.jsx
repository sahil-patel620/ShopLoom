import React from "react";
import SectionHeading from "./SectionsHeading/SectionHeading";
import Card from "../Card/Card";

import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Jeans from "../../assets/img/jeans.jpg";
import Tshirt from "../../assets/img/tshirts.jpeg";
import Dresses from "../../assets/img/dresses.jpg";
import Shirt from "../../assets/img/shirts.jpg";
import Joggers from "../../assets/img/joggers.jpg";
import Kurtis from "../../assets/img/kurtis.jpg";
import { responsive } from "../utils/sectionConstants";

const Carousel = CarouselModule.default || CarouselModule;

const items = [
  { title: "Jeans", imagePath: Jeans },
  { title: "Shirts", imagePath: Shirt },
  { title: "T-shirts", imagePath: Tshirt },
  { title: "Dresses", imagePath: Dresses },
  { title: "Joggers", imagePath: Joggers },
  { title: "Kurtis", imagePath: Kurtis },
];
console.log(Card);
console.log(SectionHeading);
console.log(Carousel);

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />

      <Carousel
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        infinite
        autoPlay
        autoPlaySpeed={2500}
        swipeable
        pauseOnHover
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        arrows={false}
        containerClass="px-10"
        itemClass="px-2"
      >
        {items.map((item, index) => (
          <Card key={index} imagePath={item.imagePath} title={item.title} />
        ))}
      </Carousel>
    </>
  );
};

export default NewArrivals;
