import React from "react";

import { RWebShare, RWebShareUnStyled } from "../src";

export default {
  title: "Welcome Unstyled",
};

export const Default = () => (
  <div>
    <style children="*{font-family: sans-serif}" />
    <RWebShareUnStyled
      data={{
        text: "Like humans, flamingos make friends for life",
        url: "https://on.natgeo.com/2zHaNup",
        title: "Flamingos",
      }}
      onClick={(name) => console.log(`${name} share successful!`)}
    >
      <button>Share 🔗</button>
    </RWebShareUnStyled>


  </div>
);
