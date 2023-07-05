import { Button } from "antd";
import React, { memo } from "react";
import PropTypes from "prop-types";
import './Buttonn.scss'

interface ButtonProps {
  backgroundColor?: string;
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  shape?: "circle" | "round" | "default";
  size?: "small" | "middle" | "large";
}

const Buttonn: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
  type,
  shape,
  size,
  className,
}) => {
  return (
    <Button
      style={{ backgroundColor }}
      className={`${className} btn` }
      type={type}
      shape={shape}
      size={size}
    >
      {children}
    </Button>
  );
};

export default memo(Buttonn);

Buttonn.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    "primary",
    "ghost",
    "dashed",
    "link",
    "text",
    "default",
  ]),
  shape: PropTypes.oneOf(["circle", "round", "default"]),
  size: PropTypes.oneOf(["small", "middle", "large"]),
};
