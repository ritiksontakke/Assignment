import "./userProfile.css";

import { Link } from "react-router-dom";

//fake Apis
import CurrentUserData from "../../FackApis/CurrentUserData";

//font awesomne icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeed, faLink, faMessage } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile() {
  return (
    <div className="userProfile">
      <div className="cover-photo">
        <img src={CurrentUserData.map((user) => user.CoverPhoto)} alt="" />
      </div>
      <div className="profile-info">
        <img src={CurrentUserData.map((user) => user.ProfieImage)} alt="" />
        <div className="user-name">
          <h3>
            <img src={CurrentUserData.map((user) => user.name)} alt="" />
          </h3>
          <h5>src={CurrentUserData.map((user) => user.username)}</h5>
        </div>
        <div className="profile-button">
          <Link to="/chatbox/id">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </Link>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faFeed} /> Follow Me
          </button>

          <button className="btn">
            <FontAwesomeIcon icon={faLink} />
          </button>
        </div>
        <p className="bio">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          aliquid qui illum soluta perferendis, consequatur assumenda quod
        </p>
      </div>
    </div>
  );
}
