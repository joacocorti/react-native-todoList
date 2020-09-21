import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(todoInput) => props.TextChange(todoInput)}
        value={props.todoInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>AGREGAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1,
  },
  input: {
    backgroundColor: "#F3F3F3",
    flex: 1,
    fontSize: 18,
    height: 35,
    top: 15,
  },
  addButton: {
    width: 100,
    backgroundColor: "#FFCE00",
    alignItems: "center",
    justifyContent: "center",
    top: 15,
  },
  addButtonText: {
    color: "#171717",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default InputBar;
