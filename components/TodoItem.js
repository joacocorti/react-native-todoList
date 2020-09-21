import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity } from "react-native";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}
      >
        <Text
          style={todoItem.done ? { color: "#AAAAAA" } : { color: "#313131" }}
        >
          {todoItem.title}
        </Text>

        <Button
          style={styles.deleteButton}
          title="ELIMINAR"
          color={todoItem.done ? "rgba(200,0,0,0.5)" : "rgba(255,0,0,1)"}
          onPress={() => this.props.removeTodo()}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    top: 15,
    width: "100%",
    height: 70,
    borderBottomColor: "#DDD",
    borderBottomWidth: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  deleteButton: {
    width: 5,
  },
});
