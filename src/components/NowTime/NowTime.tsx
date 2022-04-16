import { useTheme } from "../../contexts/themeContext";
import { Logo } from "../Logo/Logo";
import { useNowTime } from "./useNowTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NowTime = () => {
  const { nowTime, sekki } = useNowTime();
  const { name, setTheme, theme } = useTheme();

  return (
    <div
      css={(theme) => () => ({
        fontSize: theme.typography.h6.fontSize,
        color: theme.palette.text.secondary,
        letterSpacing: "0.1em",
        fontWeight: 300,
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5em",
      })}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Logo color={name === "dark" ? "dark" : "light"} size={32} />
        <span css={{ marginLeft: "1em" }}>{nowTime}</span>
      </div>

      <div
        css={{
          fontWeight: 300,
          opacity: sekki ? 1 : 0,
          transition: "all 1s",
          fontFamily: "'UD デジタル 教科書体 N-R', 'Nunito', sans-serif",
        }}
      >
        {sekki && (
          <span>
            <span title={sekki.sekki_yomi}>{sekki.sekki}</span>{" "}
            <span title={sekki.ko_yomi}>{sekki.ko}</span>
          </span>
        )}
      </div>

      <div
        css={{
          cursor: "pointer",
          display: "flex",
          color: theme.palette.text.icon,
          transform: name === "light" ? "rotate(270deg)" : "rotate(90deg)",
          transition: "all 300ms",
          "&:hover": { color: theme.palette.text.primary },
        }}
      >
        <FontAwesomeIcon
          icon="circle-half-stroke"
          style={{
            color: "currentColor",
          }}
          onClick={() => setTheme(name === "light" ? "dark" : "light")}
        />
      </div>
    </div>
  );
};
