import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList() {
  // State Hooks
  const [tasks, setTasks] = useState([
    { _id: '1', title: 'Doctor Appointment', completed: true },
    { _id: '2', title: 'Meeting at School', completed: false },
  ]);
  const [text, setText] = useState('');

  // Function to Add Task
  function addTask() {
    if (text.trim()) {
      const newTask = { _id: Date.now().toString(), title: text.trim(), completed: false };
      setTasks(prev => [...prev, newTask]);
      setText('');
    }
  }

  // Function to Delete Task
  function deleteTask(id: string) {
    setTasks(tasks.filter(task => task._id !== id));
  }

  // Function to Toggle Task Completion
  function toggleCompleted(id: string) {
    setTasks(tasks.map(task => (task._id === id ? { ...task, completed: !task.completed } : task)));
  }

  // Render TodoList Component
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="New Task"
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <View style={styles.listContainer}>
        {tasks.map(task => (
          <TodoItem
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 10,
  },
  listContainer: {
    flex: 1,
    paddingTop: 6,
  },
});
