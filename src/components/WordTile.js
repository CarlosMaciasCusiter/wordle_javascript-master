import React from "react";
import { Center, Container, Grid } from "@chakra-ui/react";

export default function WordTile({ guesses, tileColorArray, attempts }) {
  return (
    <Container my={3}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Center
          w="100%"
          h="10"
          bg={`${tileColorArray[0]}`}
          border="2px"
          borderColor="gray.400"
        >
          {guesses[attempts][0]}
        </Center>
        <Center
          w="100%"
          h="10"
          bg={`${tileColorArray[1]}`}
          border="2px"
          borderColor="gray.400"
        >
          {guesses[attempts][1]}
        </Center>
        <Center
          w="100%"
          h="10"
          bg={`${tileColorArray[2]}`}
          border="2px"
          borderColor="gray.400"
        >
          {guesses[attempts][2]}
        </Center>
        <Center
          w="100%"
          h="10"
          bg={`${tileColorArray[3]}`}
          border="2px"
          borderColor="gray.400"
        >
          {guesses[attempts][3]}
        </Center>
        <Center
          w="100%"
          h="10"
          bg={`${tileColorArray[4]}`}
          border="2px"
          borderColor="gray.400"
        >
          {guesses[attempts][4]}
        </Center>
      </Grid>
    </Container>
  );
}
