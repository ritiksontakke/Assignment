import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="Card">
        <div className="left">
          <h2>
          -<br /> NapaExtra Signup <br />-
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            veritatis sunt ipsam ullam facere repellat amet temporibus, natus
            rerum debitis?
          </p>
          <span> Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
