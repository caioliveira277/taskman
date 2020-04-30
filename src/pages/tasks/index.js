import React from "react";
import { Main } from "./styles";
import Transition from "../../components/transition";
import Header from "../../components/header";
import Menu from "../../components/menu";

export default function Tasks() {
  return (
    <>
      <Main>
        <Header />
        <section>
          <Menu />
        </section>
      </Main>
      <Transition mode="reverse" />
    </>
  );
}
