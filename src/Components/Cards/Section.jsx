import React from "react";

import Card from "./Card";

const Section = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card heading={item.id} para={item.title} tag={item.tag} />
      ))}
    </>
  );
};

export default Section;
