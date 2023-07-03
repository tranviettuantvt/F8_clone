import { Button } from "antd";
import React, { memo } from "react";
import PropTypes from "prop-types";

interface ButtonProps{
  className:string;
    content:string;
    type?:'primary'| 'ghost'| 'dashed'| 'link'| 'text' | 'default';
    shape?: 'circle'|'round' | 'default';
    size?:'small'|'middle'|'large'
}

const Buttonn: React.FC<ButtonProps> = ({
    content,
    type,
    shape,size,className
  }) => {
  
    return (
      <Button className={className} type={type} shape={shape} size={size}>{content}</Button>
    );
  };
  
  export default memo(Buttonn);

  Buttonn.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "ghost", "dashed", "link", "text", "default"]),
    shape: PropTypes.oneOf(["circle", "round", "default"]),
    size: PropTypes.oneOf(["small", "middle", "large"]),
  };