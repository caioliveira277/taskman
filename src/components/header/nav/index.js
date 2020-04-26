import React from "react";
import { Link } from "react-router-dom";
import Nav from "./styles";

export default function NavComponent() {
  const ToggleNavActive = ({ target }) => {
    target.closest("ul").childNodes.forEach((li) => {
      li.classList.remove("active");
    });
    return target.closest("li").classList.toggle("active");
  };
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/tasks" onClick={ToggleNavActive}>
            Link1
          </Link>
        </li>
        <li>
          <Link to="/tasks" onClick={ToggleNavActive}>
            Link2
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
