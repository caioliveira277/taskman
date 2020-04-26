import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Aside from "./aside";
import Nav from "./nav";
import Dropdown from "../dropdown";
import Header from "./styles";

export default function HeaderComponent() {
  const [dropdown, setDropdown] = useState(false);
  const toggleAside = useSelector((state) => state.Toggle.aside);
  const dispatchAside = useDispatch();

  const ToggleDropdown = () => {
    if (dropdown === false) {
      return setDropdown(true);
    }
    return setDropdown(false);
  };

  const ToggleAside = () => {
    if (toggleAside === "Open") {
      return dispatchAside({ type: "CLOSE_ASIDE" });
    }
    return dispatchAside({ type: "OPEN_ASIDE" });
  };

  return (
    <Header mode={toggleAside === "Open" ? "focus" : null}>
      <div>
        <button
          type="button"
          className={toggleAside === "Open" ? "active" : ""}
          onClick={ToggleAside}
        >
          <span />
        </button>
        {toggleAside === "Open" ? <Aside /> : null}
      </div>
      <Nav />
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
        {dropdown === true ? (
          <Dropdown
            image={`${process.env.PUBLIC_URL}/assets/images/background-dropdown.jpg`}
          >
            <ul>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="/profile">Ajustes</Link>
              </li>
              <hr />
              <li>
                <Link to="/profile">Sair</Link>
              </li>
            </ul>
          </Dropdown>
        ) : null}
      </div>
    </Header>
  );
}
