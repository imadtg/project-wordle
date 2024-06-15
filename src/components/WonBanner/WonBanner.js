import React from "react";
import Banner from "../Banner";

function WonBanner({ attempts }) {
  return (
    <Banner status="happy">
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{attempts === 1 ? "1 guess" : `${attempts} guesses`}</strong>.
    </Banner>
  );
}

export default WonBanner;
