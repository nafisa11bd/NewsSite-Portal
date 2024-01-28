import React from "react";
import PlainLayout from "@/components/master/Plain-Layout";
import Hero from "@/components/news/Hero";
import NewsList from "@/components/news/NewsList";
import PopularList from "@/components/news/PopularList";
import Subscribe from "@/components/news/Subscribe";

async function getData() {
  let Slider = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json()
  )["data"];
  let Latest = (
    await (await fetch(`${process.env.HOST}/api/news/latest`)).json()
  )["data"];
  let Featured = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=Featured`)
    ).json()
  )["data"];
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];

  return {
    Slider: Slider,
    Latest: Latest,
    Featured: Featured,
    Popular: Popular,
  };
}
const page = async () => {
  const data = await getData();
  return (
    <PlainLayout>
      <Hero slider={data["Slider"]} featured={data["Featured"]}></Hero>
      <h2> Latest News</h2>
      <div className="row">
        <div className="col-md-9">
          <NewsList latest={data["Latest"]} />
        </div>
        <div className="col-md-3">
          <PopularList popular={data["Popular"]} />
          <Subscribe />
        </div>
      </div>
    </PlainLayout>
  );
};

export default page;
