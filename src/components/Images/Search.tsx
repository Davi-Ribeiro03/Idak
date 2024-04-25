import React from "react";

interface ImageSearchProps {
  color?: string;
  className: string;
}

const Search = ({ color, className }: ImageSearchProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.4583 19.7917C16.0607 19.7917 19.7917 16.0607 19.7917 11.4583C19.7917 6.85596 16.0607 3.125 11.4583 3.125C6.85596 3.125 3.125 6.85596 3.125 11.4583C3.125 16.0607 6.85596 19.7917 11.4583 19.7917Z"
        stroke={`${color ? color : "#979797"}`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.875 21.875L17.3438 17.3438"
        stroke={`${color ? color : "#979797"}`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
