import { Link } from 'react-router-dom';
import './login.css'

export default function Login() {
  return (
   <div className="Login">
     <div className="Card">
      <div className="left">
        <h2> -<br />NapaExtra <br/>-</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          veritatis sunt ipsam ullam facere repellat amet temporibus, natus
          rerum debitis?
        </p>
        <span>Don't Have An Account?</span>
        <Link to='/signup'>
        <button className="btn btn-primary">Register</button>           
        </Link>
      </div>
      <form className="right">
      <input type="text" required placeholder="username" />
      <input type="password" required placeholder="password" />
      <button type="submit" className='btn'>Login</button>
      </form>
    </div>
   </div>
  );
}
