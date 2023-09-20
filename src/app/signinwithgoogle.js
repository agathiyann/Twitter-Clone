import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <button onClick={signInWithGoogle}> Sign In </button>
    </div>
  );
};
