const { default: BottomStats } = require("./BottomStats");
const { default: Footer } = require("./Footer");

const CombinedFooter = () => {
  return (
    <div>
      <BottomStats />
      <Footer />
    </div>
  );
};

export default CombinedFooter;
