type Props = {
  color: "light" | "dark";
  size: number;
};

export const Logo = ({ color, size }: Props) => {
  const colorLine = color === "light" ? "black" : "white";
  const colorBack = color === "light" ? "white" : "black";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90Z"
        fill={colorBack}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90 172.969C135.822 172.969 172.969 135.822 172.969 90C172.969 44.1776 135.822 7.03125 90 7.03125C44.1776 7.03125 7.03125 44.1776 7.03125 90C7.03125 135.822 44.1776 172.969 90 172.969ZM90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
        fill={colorLine}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.9799 11.9531L136.87 164.184L130.781 167.7L42.8906 15.4687L48.9799 11.9531Z"
        fill={colorLine}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M136.87 16.5234L48.9799 168.754L42.8906 165.239L130.781 13.0077L136.87 16.5234Z"
        fill={colorLine}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M167.7 48.9799L15.4688 136.87L11.9531 130.781L164.184 42.8906L167.7 48.9799Z"
        fill={colorLine}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M164.184 137.925L11.9531 50.0346L15.4688 43.9453L167.7 131.836L164.184 137.925Z"
        fill={colorLine}
      />
      <path
        d="M165.937 90.4688C165.937 132.667 131.939 166.875 90 166.875C48.0609 166.875 14.0625 132.667 14.0625 90.4688C14.0625 48.2707 48.0609 14.0625 90 14.0625C131.939 14.0625 165.937 48.2707 165.937 90.4688Z"
        fill={colorBack}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M93.75 3.75L93.75 179.062L86.25 179.062L86.25 3.75L93.75 3.75Z"
        fill={colorLine}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M178.125 93.75L1.87494 93.75L1.87494 86.25L178.125 86.25V93.75Z"
        fill={colorLine}
      />
      <path
        d="M156.563 90C156.563 126.761 126.762 156.563 90.0001 156.563C53.2386 156.563 23.4376 126.761 23.4376 90C23.4376 53.2386 53.2386 23.4375 90.0001 23.4375C126.762 23.4375 156.563 53.2386 156.563 90Z"
        fill={colorBack}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89.0107 94.2945L42.1875 67.2611L45.7031 61.1719L92.5264 88.2053L89.0107 94.2945Z"
        fill={colorLine}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85.5709 88.418L147.377 52.7344L150.892 58.8236L89.0865 94.5072L85.5709 88.418Z"
        fill={colorLine}
      />
    </svg>
  );
};
