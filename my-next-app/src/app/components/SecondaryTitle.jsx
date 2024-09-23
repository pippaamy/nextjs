const SecondaryTitle = ({ children }) => {
  return (
    <h2
      className={`
        text-2xl font-semibold pb-4
      `}
    >
      {children}
    </h2>
  );
};

export default SecondaryTitle;
