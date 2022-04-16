export const useMedia = () => {
  const mode = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return { mode };
};
