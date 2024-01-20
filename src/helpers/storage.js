import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({ id: "main" });
export const welcomeStorage = new MMKV({ id: "welcome" });
