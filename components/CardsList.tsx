import React from "react";
import Card from "./Card";

const CardsList = () => {
  return (
    <section className="flex h-screen gap-40 overflow-hidden bg-stone-950 px-10 py-20">
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default CardsList;
