import React from "react";
import Card from "./Card";

const CardsList = () => {
  return (
    <section className="flex flex-col items-center gap-40 overflow-hidden bg-stone-950 px-10 py-16 md:h-screen md:flex-row">
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default CardsList;
