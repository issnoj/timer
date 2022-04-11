type Props = {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
};

export const Button = ({ children, type, ...props }: Props) => {
  return (
    <button
      type={type}
      {...props}
      css={{
        width: 250,
        height: 125,
        border: "1px solid #707070",
        borderRadius: 10,
        boxShadow: "10px 10px 0 rgba(0,0,0,0.16)",
        cursor: "pointer",
        transition: "all 50ms",
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
      }}
    >
      {children}
    </button>
  );
};
