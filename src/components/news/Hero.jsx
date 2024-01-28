"use client";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Link from "next/link";

const Hero = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="row">
      <div className="col-lg-8  ">
        <Carousel
          data-bs-theme="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {props.slider.map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <Link href={`/details?id=${item["id"]}`}>
                  <img alt="" src={item["img2"]} />

                  <Carousel.Caption>
                    <h3>{item["title"]}</h3>
                    <p>{item["short_des"]}</p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="card bg-dark text-white col-lg-4">
        <img
          className="card-img"
          src={props.featured[0]["img3"]}
          alt="Card image"
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{props.featured[0]["title"]}</h5>
          <p className="card-text">{props.featured[0]["short_des"]}</p>
          <Link href={`/details?id=${props.featured[0]["id"]}`}>
            See Details
          </Link>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
