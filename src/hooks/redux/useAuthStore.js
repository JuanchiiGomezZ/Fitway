import { onLogin, onChecking, onLogout } from "../../store/slices/authSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { saveActiveRoutineId } from "../../store/slices/routinesSlice";
import API_URL from "../../helpers/API_URL";

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
      const { data } = await axios.post(`${API_URL}/user/google/signIn`, {
        ...userInfo.user,
        language: "en",
      });
      storage.set("token", data);
      checkAuthToken();
    } catch (error) {
      dispatch(onLogout(error));
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      storage.clearAll();
      dispatch(onLogout());
      dispatch(saveActiveRoutineId(null));
    } catch (error) {
      dispatch(onLogout(error));
    }
  };

  const checkAuthToken = async () => {
    dispatch(onChecking());
    const token = storage.getString("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await axios.get(`${API_URL}/user/token/data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(onLogin(data));
    } catch (error) {
      dispatch(onLogout(error.response.data?.message));
    }
  };

  return { signIn, signOut, checkAuthToken };
};
