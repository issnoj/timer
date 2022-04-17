import { useTheme } from "@emotion/react";

type Props = {
  children: any;
  onClick: () => void;
  state?: "default" | "active";
};

export const ButtonTab = ({ children, state = "default", ...props }: Props) => {
  const theme = useTheme();
  return (
    <button
      css={(theme) => () => ({
        fontSize: theme.typography.body1.fontSize,
        color: theme.palette.buttonTab.default,
        backgroundColor: theme.palette.buttonTab.defaultBackground,
        border: `1px solid ${theme.palette.buttonTab.defaultBorder}`,
        fontWeight: 300,
        width: "100%",
        height: "100%",
        cursor: "pointer",
        transition: "all 50ms",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          color: theme.palette.buttonTab.hover,
          backgroundColor: theme.palette.buttonTab.hoverBackground,
          border: `1px solid ${theme.palette.buttonTab.hoverBorder}`,
        },
        "&:active": {
          color: theme.palette.buttonTab.active,
          backgroundColor: theme.palette.buttonTab.activeBackground,
          border: `1px solid ${theme.palette.buttonTab.activeBorder}`,
          fontWeight: 900,
        },
        ...(state === "active" && {
          color: theme.palette.buttonTab.active,
          backgroundColor: theme.palette.buttonTab.activeBackground,
          border: `1px solid ${theme.palette.buttonTab.activeBorder}`,
          fontWeight: 900,
          cursor: "default",
          pointerEvents: "none",
          "&:hover": {
            color: theme.palette.buttonTab.active,
            border: `1px solid ${theme.palette.buttonTab.activeBorder}`,
          },
        }),
      })}
      {...props}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8"
          cy="8"
          r="8"
          fill={state === "active" ? theme.palette.buttonTab.active : "#C4C4C4"}
        />
      </svg>
      <span css={{ marginLeft: "1em" }}>{children}</span>
    </button>
  );
};
