import React from "react";
import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Delete({ character, setGuesses, guesses, attempts }) {
  const delete_last_guess_character = (newGuess) => {
    setGuesses((existingItems) => {
      console.log(guesses[attempts].length);
      return [
        ...existingItems.slice(0, attempts),
        newGuess,
        ...existingItems.slice(attempts + 1),
      ];
    });
  };

  return (
    <Button
      bg="gray.300"
      onClick={() => {
        const newGuess = guesses[attempts].substring(
          0,
          guesses[attempts].length - 1
        );
        delete_last_guess_character(newGuess);
      }}
    >
      <DeleteIcon />
    </Button>
  );
}
