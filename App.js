import { StatusBar } from "expo-status-bar";
import {
    Button,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
/*
tiempo de cursado desde el video:
1:19:25

*/
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
    const [isWorking, setIsWorking] = useState(false);
    const [time, setTime] = useState(25 * 60);
    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
    console.log(currentTime);

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime] }]}>
            <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
                <Text style={styles.text}>Pomodoro</Text>
                <Text style={styles.text}>{time}</Text>
                <Header
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    setTime={setTime}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
    },
});
