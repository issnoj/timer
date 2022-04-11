import { useNowTime } from "./useNowTime";

export const NowTime = () => {
  const { nowTime, sekki } = useNowTime();

  return (
    <div
      css={{
        color: "#707070",
        letterSpacing: "0.1em",
        fontWeight: 300,
        fontSize: "1.5em",
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5em",
      }}
    >
      <div>
        <span css={{ marginLeft: "1em" }}>{nowTime}</span>
      </div>

      <div
        css={{
          fontWeight: 300,
          opacity: sekki ? 1 : 0,
          transition: "all 1s",
        }}
      >
        {sekki && (
          <span>
            <span title={sekki.sekki_yomi}>{sekki.sekki}</span>{" "}
            <span title={sekki.ko_yomi}>{sekki.ko}</span>
          </span>
        )}
      </div>
    </div>
  );
};
