"use client";
import React from "react";
import Link from "next/link";
//import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
//import { NextUIProvider } from "@nextui-org/react";
import { Button } from "react-bootstrap";
//import Button from "react-bootstrap/Button";
const NewsList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {props.latest.map((item, i) => {
              return (
                <div key={i} className="card col-lg-4">
                  <img
                    className="card-img-top"
                    src={item["img4"]}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item["title"]}</h5>
                    <p className="card-text">{item["short_des"]}</p>
                  </div>

                  <div className="card-body">
                    <Link
                      href={`/details?id=${item["id"]}`}
                      className="card-link"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
