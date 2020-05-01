import React from "react";
import { MdEdit } from "react-icons/md";
import { ButtonRound } from "../buttons";
import Group from "./styles";

export default function GroupComponent() {
  return (
    <Group>
      <div>
        <h2>#Group 1</h2>
        <ButtonRound type="button">
          <i>
            <MdEdit />
          </i>
        </ButtonRound>
      </div>
      <hr />
      <div>body</div>
    </Group>
  );
}
