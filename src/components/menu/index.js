import React, { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Menu, Box } from "./styles";

export default function MenuComponent() {
  const box = useRef(null);
  const [boxDisplay, setBoxDisplay] = useState(false);
  let time;

  const HandlerActive = () => {
    time = setTimeout(() => {
      setBoxDisplay(true);
      box.current.classList.add("active");
    }, 150);
  };
  const HandlerInactive = () => {
    box.current.classList.remove("active");
    clearInterval(time);
  };
  const HandlerDisplay = () => {
    if (!box.current.classList.contains("active")) {
      setBoxDisplay(false);
    }
  };
  return (
    <Menu onMouseEnter={HandlerActive} onMouseLeave={HandlerInactive} ref={box}>
      {boxDisplay ? (
        <Box onTransitionEnd={HandlerDisplay}>
          <li>
            <button type="button">
              <i>
                <FaMinus />
              </i>
            </button>
          </li>
          <li>
            <button type="button">
              <i>
                <FaPlus />
              </i>
            </button>
          </li>
        </Box>
      ) : null}
      <button type="button">
        <i>
          <FaPlus />
        </i>
      </button>
    </Menu>
  );
}
