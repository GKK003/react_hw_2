import "./author.css";
import Profile from "../../assets/Oval (5).png"

function Author() {
  return (
    <>
      <div className="author_div">
        <img
          className="img_author"
          src={Profile}
          alt="profile picture"
        />
        <p className="p_author">
          Creation of <span className="span_author">Jules Wyvern</span>
        </p>
      </div>
    </>
  );
}

export default Author;
