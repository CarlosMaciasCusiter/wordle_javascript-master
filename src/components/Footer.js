import React from "react";
import { Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

export default function Footer() {
  return (
    <Center>
      <a href="https://github.com/CarlosMaciasCusiter/wordle_javascript">
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
    </Center>
  );
}
