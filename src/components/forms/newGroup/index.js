import React from "react";
import { RiMenuAddLine } from "react-icons/ri";
import PropTypes from "prop-types";
import Group from "./styles";

export default function GroupForm({ onClick }) {
  return (
    <Group onClick={onClick}>
      <span>
        <i>
          <RiMenuAddLine />
        </i>
      </span>
    </Group>
  );
}
GroupForm.propTypes = {
  onClick: PropTypes.func,
};
GroupForm.defaultProps = {
  onClick: () => null,
};
