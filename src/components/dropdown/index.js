import React from "react";
import { Link } from "react-router-dom";
import Span from "./styles";

export default function Dropdown() {
  return (
    <Span>
      <div />
      <div>
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
      </div>
    </Span>
  );
}
