import React from "react";
import { Main } from "./styles";
import Transition from "../../components/transition";
import Header from "../../components/header";

export default function Tasks() {
  return (
    <>
      <Main>
        <Header />
      </Main>
      <Transition mode="reverse" />
    </>
  );
}
