import { onLogin, onChecking, onLogout } from "../../store/slices/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  androidClientId: "504051196188-fnni84loib9qtvstdgb9u1h36pljf1tm.apps.googleusercontent.com",
  offlineAccess: true,
});

export default useAuthStore = () => {
  const dispatch = useDispatch();

  const signIn = async () => {
    dispatch(onChecking());
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      //const tokens = await GoogleSignin.getTokens();
      const idToken = userInfo.idToken;
      dispatch(onLogin(idToken));
    } catch (error) {
      /*       dispatch(onLogout(error)); */
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return { signIn, signOut };
};
