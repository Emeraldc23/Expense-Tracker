import { auth, provider } from "../../Config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../Auth/auth.scss";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../googleIcon";

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
        <p className="para-1">Sign In With Google to Continue</p>
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
