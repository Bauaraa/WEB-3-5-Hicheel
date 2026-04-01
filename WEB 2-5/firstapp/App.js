import { StatusBas } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Dimensions,
  StatusBar,
} from "react-native";
 
export default function App() {
  const [inputText, setInputText] = useState("");
  const [tasklist, setTaskList] = useState([]);
  const handleInputText = (text) => {
    setInputText(text);
  };
  const setTask = () => {
    setTaskList((currentTaskList) => [...currentTaskList, inputText]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>To Do</Text>
      <View style={styles.con}>
        <TextInput
          style={{ borderWidth: 1, borderStyle: "solid", width: 200 }}
          placeholder="Insert Tasks"
          onChangeText={handleInputText}
        />
        <Button onPress={setTask} title="Click" />
      </View>
      <View style={styles.tasklistStyle}>
        <Text>Task List</Text>
        <View>
          {tasklist.map((task) => (
            <Text key={task}>{task}</Text>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  tasklistStyle: {
    width: Dimensions.get("window").width,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    gap: 20,
  },
  con: {
    flexDirection: "row",
    gap: 10,
  },
  TitleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
 