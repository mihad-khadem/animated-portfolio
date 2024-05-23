import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ id: 1, title: "title", description: "description" }].map(
          (item, id) => (
            <BentoGridItem key={item.id} {...item} />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
