import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown";
import Header from "./styles";

export default function HeaderComponent() {
  const [dropdown, setDropdown] = useState(null);
  const ToggleDropdown = (event) => {
    event.stopPropagation();
    if (dropdown === null) {
      return setDropdown(<Dropdown />);
    }
    return setDropdown(null);
  };

  const ToggleActive = ({ target }) => {
    if (target.tagName === "A") {
      target.closest("ul").childNodes.forEach((li) => {
        li.classList.remove("active");
      });
      return target.closest("li").classList.toggle("active");
    }
    return target.classList.toggle("active");
  };

  return (
    <Header>
      <aside>
        <button type="button" onClick={ToggleActive}>
          <span />
        </button>
      </aside>
      <nav>
        <ul>
          <li>
            <Link to="/tasks" onClick={ToggleActive}>
              Link1
            </Link>
          </li>
          <li>
            <Link to="/tasks" onClick={ToggleActive}>
              Link2
            </Link>
          </li>
        </ul>
      </nav>
      <div
        onClick={ToggleDropdown}
        onKeyPress={ToggleDropdown}
        tabIndex="0"
        role="button"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
          alt="User profile"
        />
        <h2>User </h2>
        <i>&#9662;</i>
        {dropdown}
      </div>
    </Header>
  );
}
