import React from "react";
import PlainLayout from "@/components/master/Plain-Layout";

async function getData(id) {
  let News = (
    await (await fetch(`${process.env.HOST}/api/category?catID=${id}`)).json()
  )["data"];
  let Popular = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  return { News: News, Popular: Popular };
}

const page = (props) => {
  let id = props.searchParams["id"];
  const data = getData(id);
  return <PlainLayout></PlainLayout>;
};

export default page;
