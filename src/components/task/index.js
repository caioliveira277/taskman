import React from "react";
import { MdStar, MdCheck, MdDelete } from "react-icons/md";
import { ButtonRound } from "../buttons";
import Task from "./styles";

export default function TaskElement() {
  return (
    <Task>
      <div>
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/task-image-default.svg`}
            alt="Task Default"
          />
          <figcaption>
            <h2>Title</h2>
          </figcaption>
        </figure>
        <span>
          <ButtonRound>
            <i>
              <MdStar />
            </i>
          </ButtonRound>
          <ButtonRound>
            <i>
              <MdCheck />
            </i>
          </ButtonRound>
        </span>
      </div>
      <hr />
      <div>
        <p>description...</p>
      </div>
      <div>
        <ButtonRound>
          <i>
            <MdDelete />
          </i>
        </ButtonRound>
        <small>11/01/2020 11:34hrs</small>
      </div>
    </Task>
  );
}
