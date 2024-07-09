import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const PrimaryButton = ({
  label = "",
  loading = false,
  disable,
  size = "medium",
  color = "",
  icon,
  onClick,
  className,
  width = "w-full",
  type = "primary",
  htmlType = "button",
  imageIconSrc,
}) => {
  const combinedClassName = `${className} ${width} ${color} font-medium text-black flex justify-center items-center gap-2 ${
    loading && "text-white"
  }`;

  const disabled = loading || disable;

  return (
    <Button
      variant={type}
      size={size}
      disabled={disabled}
      className={combinedClassName}
      onClick={onClick}
      type={htmlType}
    >
      {loading ? (
        <CircularProgress size={24} />
      ) : imageIconSrc ? (
        <img className="w-5" src={imageIconSrc} alt="" />
      ) : (
        icon && <i>{icon}</i>
      )}
      {label !== "" && <p>{label}</p>}
    </Button>
  );
};

export default PrimaryButton;
