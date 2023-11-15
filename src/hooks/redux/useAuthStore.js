import { onLogin, onChecking, onLogout } from "../../store/slices/authSlice";
import axios from "../../api/axios";

import { useDispatch, useSelector } from "react-redux";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { saveActiveRoutineId } from "../../store/slices/routinesSlice";

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
      const { data } = await axios.post(`/user/google/signIn`, {
        googleId: userInfo.user.id,
        ...userInfo.user,
        language: "en",
      });
      const token = {
        access_token: data.access_token,
        expiry: data.expiresIn,
      };

      storage.set("token", JSON.stringify(token));
      storage.set("refresh_token", data.refresh_token);
      getDataUser(data.access_token);
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


  const refreshAuthToken = async () => {
    try {
      dispatch(onChecking());
      const storedToken = JSON.parse(storage.getString("token"));
      const refreshToken = storage.getString("refresh_token");

      if (!storedToken) {
        return dispatch(onLogout());
      }

      if (new Date() < new Date(storedToken.expiry)) {
        const { data } = await axios.post(
          `/user/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        const updatedToken = {
          access_token: data.access_token,
          expiry: data.expiresIn,
        };

        storage.set("token", JSON.stringify(updatedToken));
        getDataUser(data.access_token);
      } else {
        getDataUser(storedToken.access_token);
      }
    } catch (error) {
      dispatch(onLogout(error.response.data));
    }
  };

  const getDataUser = async (token) => {
    dispatch(onChecking());
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await axios.get(`/user/token/data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(onLogin(data));
    } catch (error) {
      dispatch(onLogout(error.response.data?.message));
    }
  };

  return { signIn, signOut, refreshAuthToken };
};
