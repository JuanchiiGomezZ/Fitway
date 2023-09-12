import React from "react";
import { StyleSheet } from "react-native";

/* Screens */
import Home from "../screens/home/index";
import Profile from "../screens/profile/index";
import Discover from "../screens/discover/index";
import WorkoutLog from "../screens/workoutLog/index";

/* Navigation */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/* Icons */
import { FontAwesome5, MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { backgroundColor, orangeColor } from "../styles/styles";

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
            <FontAwesome5 name="dumbbell" size={25} color={focused ? "white" : "#151515"} style={styles.centerButton} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutLog}
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
    backgroundColor: orangeColor,
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 90,
  },
  navBar: {
    position: "absolute",
    backgroundColor: backgroundColor,
    height: 60,
    borderTopWidth: 0.55,
    borderTopColor: "#474747",
  },
});
