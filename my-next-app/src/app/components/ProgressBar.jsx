const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-[#4376BE]  h-6 ">
      <div className=" bg-[#3EBE5A] h-6 " style={{ width: percentage }}></div>
    </div>
  );
};

export default ProgressBar;
