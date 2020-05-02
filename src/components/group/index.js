import React, { useState } from "react";
import { MdEdit, MdCheck } from "react-icons/md";
import PropTypes from "prop-types";
import { ColorPicker } from "../inputs";
import { ButtonRound } from "../buttons";
import Group from "./styles";

export default function GroupComponent({ title, children, backgroundColor }) {
  const [newTitle, setNewTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const [groupBackground, setGroupBackground] = useState(backgroundColor);

  const HandlerChange = ({ target }) => {
    setNewTitle(target.value);
  };
  const HandlerClick = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };
  return (
    <Group background={groupBackground}>
      <div>
        {" # "}
        <input
          type="text"
          value={`${newTitle}`}
          onChange={HandlerChange}
          disabled={!editMode}
        />
        <ButtonRound type="button" onClick={HandlerClick}>
          {editMode === true ? (
            <>
              <i>
                <MdCheck />
              </i>
              <ColorPicker
                colorDefault={groupBackground}
                onChange={({ target }) => setGroupBackground(target.value)}
              />
            </>
          ) : (
            <>
              <i>
                <MdEdit />
              </i>
            </>
          )}
        </ButtonRound>
      </div>
      <hr />
      <div>{children}</div>
    </Group>
  );
}

GroupComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
GroupComponent.defaultProps = {
  children: "",
  backgroundColor: "#AFAFAF",
};
