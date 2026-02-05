import "./eth.css";
import EthImg from "../../assets/Combined Shape (4).png";
import ClockImg from "../../assets/Shape (6).png";

function Eth() {
  return (
    <>
      <div className="m_div">
        <div className="eth">
          <img className="img_eth" src={EthImg} alt="eth symbol" />
          <p className="p_eth">0.041 ETH</p>
        </div>
        <div className="time_div">
          <img src={ClockImg} alt="clock" />
          <p className="p_time">3 days left</p>
        </div>
      </div>
    </>
  );
}

export default Eth;
