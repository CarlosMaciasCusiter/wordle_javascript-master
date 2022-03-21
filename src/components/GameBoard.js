import React from "react";
import WordTile from "./WordTile";

export default function GameBoard({ guesses, tileColorArray, attempts }) {
  return (
    <div>
      <WordTile
        guesses={guesses}
        tileColorArray={tileColorArray[0]}
        attempts={0}
      />
      <WordTile
        guesses={guesses}
        tileColorArray={tileColorArray[1]}
        attempts={1}
      />
      <WordTile
        guesses={guesses}
        tileColorArray={tileColorArray[2]}
        attempts={2}
      />
      <WordTile
        guesses={guesses}
        tileColorArray={tileColorArray[3]}
        attempts={3}
      />
      <WordTile
        guesses={guesses}
        tileColorArray={tileColorArray[4]}
        attempts={4}
      />
      <WordTile
        guesses={guesses}
        tileColorArray={tileColorArray[5]}
        attempts={5}
      />
    </div>
  );
}
