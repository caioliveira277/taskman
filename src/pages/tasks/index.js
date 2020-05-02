import React from "react";
import { Main } from "./styles";
import { NewGroup } from "../../components/forms";
import Group from "../../components/group";
import Task from "../../components/task";
import Transition from "../../components/transition";
import Header from "../../components/header";
import Menu from "../../components/menu";

export default function Tasks() {
  return (
    <>
      <Main>
        <Header />
        <section>
          <Group title="Group 1">
            <>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </>
          </Group>
          <Group title="Group 2" backgroundColor="#f44336">
            <>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </>
          </Group>
          <Group title="Group 3" backgroundColor="#8bc34a">
            <>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </>
          </Group>
          <NewGroup />
        </section>
        <Menu />
      </Main>
      <Transition mode="reverse" />
    </>
  );
}
