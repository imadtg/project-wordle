import React from "react";

function Banner({ gameState, answer, attempts }) {
  let className = gameState === "won" ? "happy banner" : "sad banner";
  return (
    <div className={className}>
      <p>
        {gameState === "won" ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {attempts} guess{attempts > 1 ? "es" : ""}
            </strong>
            .
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;
