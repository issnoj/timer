import { useCallback, useState } from "react";

type Features = {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
};

type State = {
  features: Features;
  target?: string;
};

const defaultFeatures: Features = {
  width: 800,
  height: 600,
};

type Props = {
  target?: string;
  features?: Features;
};

export const useWindowOpen = ({ target, features }: Props) => {
  const [state, setState] = useState<State>({
    features: {
      ...defaultFeatures,
      top: defaultFeatures.height
        ? (window.screen.height - defaultFeatures.height) / 2
        : 0,
      left: defaultFeatures.width
        ? (window.screen.width - defaultFeatures.width) / 2
        : 0,
      ...features,
    },
    target,
  });

  const open = useCallback(
    (url: string, target?: string, customState?: State) => {
      const _state = { ...state, ...customState };
      const features = Object.entries(_state.features)
        .map((v) => v.join("="))
        .join(",");
      console.log(target || _state.target);
      window.open(url, target || _state.target, features);
    },
    [state]
  );

  return { open, setState };
};
