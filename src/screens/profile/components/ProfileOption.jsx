import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons, FontAwesome, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { grayLightColor, redColor } from "../../../styles/styles";

export default ProfileOption = ({ iconType, iconName, optionName, showArrow, task }) => {
    
    const renderIcon = () => {
        switch (iconType) {
            case "FontAwesome5":
                return <FontAwesome5 name={iconName} style={styles.icon} />;
            case "FontAwesome":
                return <FontAwesome name={iconName} style={styles.icon} />;
            case "Ionicons":
                return <Ionicons name={iconName} style={styles.icon} />;
            case "Feather":
                return <Feather name={iconName} style={styles.iconLogout} />;
            default:
                return null;
        }
    };

    return (
        <TouchableOpacity style={styles.option} onPress={task}>
            <View style={styles.iconAndName}>
                {renderIcon()}
                <Text style={iconType === "Feather" ? styles.nameOptionLogout : styles.nameOption}>{optionName}</Text>
            </View>
            {showArrow && <SimpleLineIcons name="arrow-right" style={styles.arrow} />}
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    iconAndName: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        color: grayLightColor,
        fontSize: 25,
        marginRight: 10,
        width: 30,
    },
    nameOption: {
        color: grayLightColor,
        fontSize: 16,
    },
    arrow: {
        color: grayLightColor,
        fontSize: 20,
    },

    iconLogout: {
        fontSize: 25,
        marginRight: 10,
        color: redColor,
        width: 30,
    },
    nameOptionLogout: {
        color: redColor,
        fontSize: 16,
    },
});
