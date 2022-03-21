import React from "react";
import { Button } from "@chakra-ui/react";

export default function Key({
  character,
  setGuesses,
  guesses,
  check_answer,
  answer,
  attempts,
  updateGuess_Array,
}) {
  return (
    <Button
      bg="gray.300"
      onClick={() => {
        if (guesses[attempts].length >= 5) {
          if (character === "ENTER") {
            check_answer(guesses[attempts], answer);
          }
        } else {
          if (character !== "ENTER") {
            // setGuesses(guesses[attempts].concat(character));
            updateGuess_Array(guesses[attempts].concat(character));
          }
        }
      }}
    >
      {character}
    </Button>
  );
}
