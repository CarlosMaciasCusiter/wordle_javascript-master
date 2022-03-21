import { useState } from "react";
import {
  Button,
  Center,
  Container,
  Divider,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Keyboard from "./components/Keyboard";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import answers from "./word_list.json";

const length_answers = answers.answers.length;

function random_word() {
  return answers.answers[Math.floor(Math.random() * length_answers)];
}

function App() {
  const defaultGuessArray = ["", "", "", "", "", ""];
  const defaultColorArray = [
    ["White", "White", "White", "White", "White"],
    ["White", "White", "White", "White", "White"],
    ["White", "White", "White", "White", "White"],
    ["White", "White", "White", "White", "White"],
    ["White", "White", "White", "White", "White"],
    ["White", "White", "White", "White", "White"],
  ];

  const [guesses, setGuesses] = useState(defaultGuessArray);
  const [tileColorArray, setTileColorArray] = useState(defaultColorArray);
  const [answer, setAnswer] = useState(random_word());
  const [attempts, setAttempts] = useState(0);

  const [hasWon, setWin] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeColor = (singleColorArray) => {
    setTileColorArray((existingItems) => {
      return [
        ...existingItems.slice(0, attempts),
        (existingItems[attempts] = singleColorArray),
        ...existingItems.slice(attempts + 1),
      ];
    });
  };

  const updateGuess_Array = (currentGuess) => {
    setGuesses((existingItems) => {
      return [
        ...existingItems.slice(0, attempts),
        (existingItems[attempts] = currentGuess),
        ...existingItems.slice(attempts + 1),
      ];
    });
  };

  function checkTileColors(guess, answer) {
    let tileArray = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        tileArray.push("green.400");
      } else if (answer.includes(guess[i])) {
        tileArray.push("orange.400");
      } else {
        tileArray.push("gray.400");
      }
    }
    return tileArray;
  }

  async function check_answer(guess, answer) {
    const tileArray = await checkTileColors(guess, answer.toUpperCase());
    changeColor(tileArray);
    if (guess === answer.toUpperCase()) {
      onOpen();
      setWin(true);
    } else {
      console.log(attempts);
      setAttempts(attempts + 1);
      if (attempts === 5) {
        console.log("you should open the modal");
        onOpen();
      }
    }
  }

  function resetGame() {
    setAnswer(random_word());
    setTileColorArray(defaultColorArray);
    setGuesses(defaultGuessArray);
    setAttempts(0);
    onClose();
  }

  console.log(answer);

  return (
    <>
      <Container>
        <Center>
          <Heading as="h1" size="4xl">
            Wordle
          </Heading>
        </Center>
        <Divider />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Game Over</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                {hasWon && (
                  <h4>You have won the game in {attempts + 1} tries.</h4>
                )}
                {!hasWon && (
                  <h4>Sorry you didn't win, better luck next time.</h4>
                )}
              </Center>
            </ModalBody>
            <ModalFooter>
              <Center>
                <Button colorScheme="blue" onClick={resetGame}>
                  Play Again
                </Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <GameBoard
          attempts={attempts}
          guesses={guesses}
          tileColorArray={tileColorArray}
        />
        <Keyboard
          setGuesses={setGuesses}
          guesses={guesses}
          check_answer={check_answer}
          answer={answer}
          attempts={attempts}
          updateGuess_Array={updateGuess_Array}
        />
        <Divider m={4} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
