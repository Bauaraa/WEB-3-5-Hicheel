import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskItem = (props) => {
  return (
    <Pressable onPress={props.delete.bind(this, props.id)}>
      <View style={styles.taskStyle}>
        <Text style={{ color: "white", fontSize: 30 }}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskStyle: {
    width: 200,
    height: 50,
    backgroundColor: "rgba(46, 46, 217, 1)",
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    justifyContent: "center",
  },
});