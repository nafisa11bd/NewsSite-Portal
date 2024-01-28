import React from "react";
import Link from "next/link";

const PopularList = (props) => {
  return (
    <div className="row">
      <span>Popular News</span>
      {props.popular.map((item, i) => {
        return (
          <div key={i} className="card col-lg-12">
            <img
              className="card-img-top"
              src={item["img1"]}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item["title"]}</h5>
              <p className="card-text">{item["short_des"]}</p>
            </div>

            <div className="card-body">
              <Link href={`/details?id=${item["id"]}`} className="card-link">
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularList;
