import "./img.css";
import Photo from "../../assets/Rectangle Copy (1).png";
import Eye from "../../assets/Shape (7).png";

function Image() {
  return (
    <div className="img_div">
      <img className="img_1" src={Photo} alt="" />

      <div className="sec_div">
        <img className="eye_icon" src={Eye} alt="hidephoto" />
      </div>
    </div>
  );
}

export default Image;
