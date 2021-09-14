import React from "react";
import PropTypes from "prop-types";
import Button from "./styles";

/**
 * @description Button Theme Component
 *
 * @param   {String} [String] [required]    type
 * @param   {String} [String] [required]    children
 * @return {JSX} JSX
 *
 * @example
 *   <ButtonTheme type="submit"> <Content/> </ButtonTheme>
 */
export default function ButtonTheme({ type, children }) {
  return <Button type={type}>{children}</Button>;
}
ButtonTheme.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
};
