import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { Button } from "react-native-web";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [stateModal, setStateModal] = useState(false);
  const addTaskList = (inputText) => {
    setTaskList((currenttaskList) => [
      ...currenttaskList,
      { taskName: inputText, id: Math.random() },
    ]);
    setStateModal(false);
  };
  const DeleteTask = (id) => {
    console.log;
    setTaskList((currenttaskList) => {
      return currenttaskList.filter((task) => task.id != id);
    });
  };
  const openModal = () => {
    setStateModal(true);
  };
  const closeModal = () => {
    setStateModal(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>ToDo</Text>
      <Button onPress={openModal} title="ADD TASK" />
      <TaskInput on={stateModal} close={closeModal} add={addTaskList} />
      <View style={styles.taskListStyle}>
        <Text style={{ fontSize: 30 }}>Task List</Text>
        <FlatList
          data={taskList}
          renderItem={(task) => {
            return (
              <TaskItem
                delete={DeleteTask}
                text={task.item.taskName}
                id={task.item.id}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  taskListStyle: {
    padding: 10,
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    marginTop: 100,
    gap: 10,
  },
  TitleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});