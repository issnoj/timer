type Props = {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  state?: "default" | "active";
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
      css={{
        width: "100%",
        height: 80,
        border: "1px solid #707070",
        borderRadius: 10,
        cursor: "pointer",
        transition: "all 50ms",
        boxShadow: "10px 10px 0 rgba(0,0,0,0.16)",
        backgroundColor: "#f0f0f0",
        "&:hover": {
          backgroundColor: "#ffffff",
        },
        "&:active": {
          backgroundColor: "#ffffff",
          boxShadow: "5px 5px 0 rgba(0,0,0,0.16)",
          marginTop: 10,
          marginLeft: 10,
        },
        ...(state === "active" && {
          backgroundColor: "#ffffff",
          boxShadow: "5px 5px 0 rgba(0,0,0,0.16)",
          marginTop: 10,
          marginLeft: 10,
        }),
      }}
      {...props}
    >
      {children}
    </button>
  );
};
