import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TodoItem from "./components/TodoItem";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [
        { id: 0, title: "Sacar la basura", done: false },
        { id: 1, title: "Dar comida a la Karen", done: false },
        { id: 2, title: "Tender la cama", done: false },
      ],
    };
  }

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
    });

    this.setState({
      todos,
      todoInput: "",
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map((todo) => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    this.setState({ todos });
  }

  removeTodo(item) {
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({ todos });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header title="todo list" />
        <InputBar
          addNewTodo={() => this.addNewTodo()}
          TextChange={(todoInput) => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
        />
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)}
              ></TodoItem>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
