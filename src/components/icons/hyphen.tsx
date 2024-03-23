import { FC } from "react";
import { SVGProps } from "../../types";

const Hyphen: FC<SVGProps> = ({
  fill = "#FFFFFF",
  height = 30,
  width = 30,
}) => {
  return (
    <svg
      fill={fill}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      height={height}
      width={width}
      enable-background="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M26,50.5c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2s-0.896-2-2-2H28C26.896,48.5,26,49.396,26,50.5z" />
        </g>
      </g>
    </svg>
  );
};

export default Hyphen;
