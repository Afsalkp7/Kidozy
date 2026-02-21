import React from "react";
import StyleCatalog from "../components/collections/CollectionCatelogue";
import HeroSectionCatelogue from "../components/collections/HeroSection";

const page = () => {
  return (
    <div className="main-padding">
      <HeroSectionCatelogue />
      <StyleCatalog />
    </div>
  );
};

export default page;
