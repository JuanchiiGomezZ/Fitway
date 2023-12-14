import React from "react";
import { StyleSheet } from "react-native";

/* Screens */
import Home from "../screens/home/Home";
import Profile from "../screens/profile/Profile";
import TrainingsLog from "../screens/trainingsLog/TrainingsLog";

/* Navigation */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* Icons */
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BACKGROUND_COLOR, ORANGE_COLOR } from "../styles/styles";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: styles.navBar,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="home"
              size={25}
              color={focused ? "white" : "#151515"}
              style={styles.centerButton}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TrainingsLog"
        component={TrainingsLog}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  centerButton: {
    backgroundColor: ORANGE_COLOR,
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 90,
  },
  navBar: {
    backgroundColor: BACKGROUND_COLOR,
    height: 60,
    borderTopWidth: 0.55,
    borderTopColor: "#474747",
  },
});
