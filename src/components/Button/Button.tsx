type Props = {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
};

export const Button = ({ children, type, ...props }: Props) => {
  return (
    <button
      type={type}
      css={(theme) => () => ({
        fontSize: theme.typography.h6.fontSize,
        width: "100%",
        height: 160,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "50%",
        cursor: "pointer",
        transition: "all 50ms",
        boxShadow: `0 6px 0 ${theme.palette.button.boxShadow}`,
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
          boxShadow: `0 2px 0 ${theme.palette.button.boxShadow}`,
          marginTop: 8,
        },
      })}
      {...props}
    >
      {children}
    </button>
  );
};
