import { FC } from "react";
import { SVGProps } from "../../types";

const Upwork: FC<SVGProps> = ({
  fill = "#FFFFFF",
  stroke = "#FFFFFF",
  height = 30,
  width = 30,
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.0429,22.0392v6.91M12,18.3551v6.6513a4.0444,4.0444,0,0,0,4.0327,4.0328h0a4.0417,4.0417,0,0,0,4.03-4.0328V18.3551"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.6324,18.339s2.2214,10.655,8.54,10.4741c2.5088-.071,4.8658-1.7112,4.827-5.4049-.0323-3.4355-2.3182-5.0337-5.0207-4.7657-7.268.7232-6.7482,19.4954-6.7482,19.4954"
        />
        <rect
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x="5.5"
          y="5.5"
          width="37"
          height="37"
          rx="2"
        ></rect>
      </g>
    </svg>
  );
};

export default Upwork;
