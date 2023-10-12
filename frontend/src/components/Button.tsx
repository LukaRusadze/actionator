import React from "react";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

const Button = (props: Props) => {
  return (
    <button
      className="px-8 py-4 rounded-xl border-2 hover:opacity-30 transition-all"
      {...props}
    />
  );
};

export default Button;
