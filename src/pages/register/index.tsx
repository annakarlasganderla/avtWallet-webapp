import "../login/login.css";
import { BsCurrencyEuro } from "react-icons/bs";
import accountIcon from "../../assets/account.svg";

export const Register = () => {
  console.log(window.screen.width);

  return (
    <div>
      <header>
        <div className="logo">
          <BsCurrencyEuro color="white" size={50} />
        </div>
      </header>

      <div className="container">
        <div className="input_area">
          <div className="title_area">
            <img src={accountIcon} style={{ height: "30px", width: "30px" }} />
            <p>
              <strong>Register</strong>
            </p>
          </div>

          <div className="inputs">
            <div className="input">
              <label>Name</label>
              <input type="text" name="email" />
            </div>

            <div className="input">
              <label>Email</label>
              <input type="text" name="email" />
            </div>

            <div className="input">
              <label>Password</label>
              <input type="text" name="password" />
            </div>

            <div className="input">
              <label>Confirm Password</label>
              <input type="text" name="password" />
            </div>
          </div>

          <div className="button_area">
            <button>Register</button>
          </div>
          <div className="links">
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};
