import { auth, provider } from "../../Config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../Auth/auth.scss";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../googleIcon";
import expenseLogo from "../../assets/expense-logo.png";
import expenseBg from "../../assets/expenseBg.jpg";

const Auth = () => {
  const navigate = useNavigate();
  async function handleSignIn() {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      userName: results.user.displayName,
      userImg: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-board");
  }

  return (
    <main className="auth-page">
      <div className="auth-content">
        <div className="hero-section">
          <div className="img">
            <img src={expenseLogo} alt="" />
          </div>

          <p className="welcomeMsg">Welcome to</p>
          <h4>Emerald Inifinity</h4>
          <p className="msg">
            A place where you track all your expenses and incomes...
          </p>
        </div>
        <p className="para-1">Let's get started...</p>
        <button className="btn sign-in-btn" onClick={handleSignIn}>
          <span className="logo">
            <GoogleIcon />
          </span>
          Sign In With Google
        </button>
      </div>
    </main>
  );
};

export default Auth;
