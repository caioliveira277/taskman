import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RiMenuAddLine } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";
import { ButtonRound } from "../buttons";
import Group from "../group";
import { Menu, Box, Content } from "./styles";
import Modal from "../modal";

export default function MenuComponent() {
  const box = useRef(null);
  const ModalDispatch = useDispatch();
  const toggleModal = useSelector((state) => state.Toggle.modal);

  const HandlerActive = () => {
    box.current.classList.toggle("active");
  };
  const HandlerModal = () => {
    ModalDispatch({ type: "OPEN_MODAL" });
  };
  const HandlerOpenModal = () => {
    box.current.classList.remove("active");
  };
  return (
    <>
      <Menu onMouseEnter={HandlerActive} onMouseLeave={HandlerActive} ref={box}>
        <Box>
          <li>
            <ButtonRound type="button" name="group" onClick={HandlerModal}>
              <i>
                <RiMenuAddLine />
              </i>
            </ButtonRound>
          </li>
          <li>
            <ButtonRound type="button" name="tasks" onClick={HandlerModal}>
              <i>
                <BsBookmarkPlus />
              </i>
            </ButtonRound>
          </li>
        </Box>
        <button type="button">
          <i>
            <FaPlus />
          </i>
        </button>
      </Menu>
      {toggleModal === "Open" ? (
        <Modal title="Novo grupo:" onAnimationEnd={HandlerOpenModal}>
          <Content>
            <div>
              <Group />
            </div>
          </Content>
        </Modal>
      ) : null}
    </>
  );
}
