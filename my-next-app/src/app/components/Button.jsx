const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-8 py-3 bg-[#3EBE5A] border-[1px] border-b-4 border-solid border-[#1C1C1C] "
    >
      <span className="text-[#FFFFFF] text-lg text-semibold">{children}</span>{" "}
    </button>
  );
};

export default Button;
