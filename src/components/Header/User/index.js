import { Link } from "react-router-dom";
import "./User.scss";

export default function User() {
  return (
    <span className="user">
      <img
        src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        alt="user-logo"
        className="user-logo"
      />
      <i className="fas fa-caret-down" />
      <div className="user-popup">
        <ul>
          <li>Manage Profiles</li>
          <li>
            <Link to="/favorite">My Favorites</Link>
          </li>
          <li>Help Center</li>
          <li>Sign out from Netflix</li>
        </ul>
      </div>
    </span>
  );
}
