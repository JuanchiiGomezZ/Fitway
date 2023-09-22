import { onLogin, onChecking, onLogout } from "../../store/slices/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { storage } from "../../helpers/storage";

GoogleSignin.configure({
  androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
});

export default useAuthStore = () => {
  const dispatch = useDispatch();

  const signIn = async () => {
    dispatch(onChecking());
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      storage.set("token", userInfo.user.id);
      storage.set("user", JSON.stringify(userInfo.user)); //PROVISIONAL
      checkAuthToken();
    } catch (error) {
      dispatch(onLogout(error));
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(onLogout());
    } catch (error) {
      console.error(error);
    }
  };

  const checkAuthToken = async () => {
    dispatch(onChecking());
    const token = storage.getString("token");
    if (!token) return dispatch(onLogout());
    try {
      const userData = JSON.parse(storage.getString("user")); //PROVISIONAL
      dispatch(onLogin(userData));
    } catch (error) {
      console.log(error);
      dispatch(onLogout(error));
    }
  };

  return { signIn, signOut, checkAuthToken };
};
