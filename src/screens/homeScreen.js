import React, { useRef, useState } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Animated
} from "react-native"
import profile from "../../assets/profile.png"
import home from "../../assets/home.png"
import search from "../../assets/search.png"
import notifications from "../../assets/bell.png"
import settings from "../../assets/settings.png"
import logout from "../../assets/logout.png"
import menu from "../../assets/menu.png"
import photo from "../../assets/photo.jpg"

export default function Drawer() {

    const [currentTab, setCurrentTab] = useState("Home");
    const [showMenu, setShowMenu] = useState(false);

    //Animated Properties
    const offsetValue = useRef(new Animated.Value(0)).current;
    //Scale Intially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffSet = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                justifyContent: "flex-start",
                padding: 15
            }}>
                <Image source={profile} style={styles.image}></Image>
                <Text style={styles.name}>Jenna Doe</Text>
                <TouchableOpacity>
                    <Text style={{ marginTop: 10, color: "white" }}>
                        View Profile
                    </Text>
                </TouchableOpacity>
                <View style={{ flexGrow: 1 }}>
                    {TabButto(currentTab, setCurrentTab, "Home", home)}
                    {TabButto(currentTab, setCurrentTab, "Search", search)}
                    {TabButto(currentTab, setCurrentTab, "Notifications", notifications)}
                    {TabButto(currentTab, setCurrentTab, "settings", settings)}
                </View>
                <View>
                    {TabButto(currentTab, setCurrentTab, "Logout", logout)}
                </View>
            </View>
            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: "white",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 15,
                borderRadius: showMenu ? 15 : 0,
                transform: [
                    { scale: scaleValue },
                    { translateX: offsetValue }
                ]
            }}>
                <TouchableOpacity onPress={() => {
                    // Do Actions Here
                    // Scaling the View
                    Animated.timing(scaleValue, {
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true
                    }).start()

                    Animated.timing(offsetValue, {
                        // Your Random Value
                        toValue: showMenu ? 0 : 220,
                        duration: 300,
                        useNativeDriver: true
                    }).start()

                    setShowMenu(!showMenu)
                }}>
                    <Image source={menu} style={{
                        width: 20,
                        height: 20,
                        tintColor: "black",
                        marginTop: 20
                    }}></Image>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    paddingTop: 20
                }}>{currentTab}</Text>
                <Image source={photo} style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 15,
                    marginTop: 20
                }}></Image>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 15,
                    paddingBottom: 5
                }}>Jenna Doe</Text>

                <Text>Techie,Youtuber, Ps Lover, Apple Sheep´s Sister</Text>
            </Animated.View>
        </SafeAreaView>
    )
}

const TabButto = (currentTab, setCurrentTab, title, image) => {
    return (
        <TouchableOpacity onPress={() => {
            if (title == "Logout") {
                // Do your Stuff
            } else {
                setCurrentTab(title)
            }
        }}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
                backgroundColor: currentTab === title ? "white" : "transparent",
                paddingLeft: 13,
                paddingRight: 35,
                borderRadius: 8,
                marginTop: 15
            }}>
                <Image source={image} style={{
                    width: 25,
                    height: 25,
                    tintColor: currentTab == title ? "#5359D1" : "white"
                }}></Image>
                <Text style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    paddingLeft: 15,
                    color: currentTab == title ? "#5359D1" : "white"
                }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5359D1",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginTop: 8
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 20
    }
})