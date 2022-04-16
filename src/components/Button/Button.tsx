type Props = {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  state?: "default" | "disabled";
};

export const Button = ({
  children,
  type,
  state = "default",
  ...props
}: Props) => {
  return (
    <button
      type={type}
      css={(theme) => () => ({
        fontSize: theme.typography.body1.fontSize,
        width: "100%",
        height: 60,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 10,
        cursor: "pointer",
        transition: "all 50ms",
        boxShadow: `10px 10px 0 ${theme.palette.button.boxShadow}`,
        color: theme.palette.button.default,
        backgroundColor: theme.palette.button.defaultBackground,
        userSelect: "none",
        "&:hover": {
          color: theme.palette.button.hover,
          backgroundColor: theme.palette.button.hoverBackground,
        },
        "&:active": {
          color: theme.palette.button.active,
          backgroundColor: theme.palette.button.activeBackground,
          boxShadow: `3px 3px 0 ${theme.palette.button.boxShadow}`,
          marginTop: 14,
          marginLeft: 14,
        },
        ...(state === "disabled" && {
          pointerEvents: "none",
          color: theme.palette.button.disabled,
          backgroundColor: theme.palette.button.disabledBackground,
          boxShadow: `3px 3px 0 ${theme.palette.button.boxShadow}`,
          textShadow: `0 0 20px ${theme.palette.button.textShadow}`,
          marginTop: 14,
          marginLeft: 14,
        }),
      })}
      {...props}
    >
      {children}
    </button>
  );
};
