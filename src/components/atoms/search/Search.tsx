import React, { memo, ChangeEventHandler } from "react";
import PropTypes from "prop-types";

import { Input } from "antd";

interface SearchProps {
  size?: "large" | "middle" | "small";
  width?: number | string;
  className?: string;
  prefix?: React.ReactNode;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FC<SearchProps> = ({
  className,
  width,
  prefix,
  placeholder,
  onChange,
  size,
}) => {
  return (
    <Input
      size={size}
      style={{ width }}
      className={className}
      prefix={prefix}
      placeholder={placeholder}
      allowClear
      onChange={onChange}
    />
  );
};

export default memo(Search);
