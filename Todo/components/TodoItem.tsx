import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type Task = {
  _id: string;
  id?: string;
  title: string;
  description?: string;
  dateTime?: string;
  deadline?: string;
  priority?: 'low' | 'medium' | 'high';
  completed: boolean;
};

type Props = {
  task: Task;
  deleteTask: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

export default function TodoItem({ task, deleteTask, toggleCompleted }: Props) {
  const taskId = task._id || task.id || '';
  const priorityColors = {
    low: '#4CAF50',
    medium: '#FF9800',
    high: '#F44336',
  };
  const priorityColor = task.priority ? priorityColors[task.priority] : '#666';

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  return (
    <View style={[styles.container, task.completed && styles.containerCompleted]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={task.completed}
              onValueChange={() => toggleCompleted(taskId)}
              tintColor={task.completed ? '#4CAF50' : '#d0d0d0'}
              onCheckColor="#fff"
              onTintColor="#4CAF50"
              boxType="square"
              tintColors={{ true: '#4CAF50', false: '#d0d0d0' }}
            />
          </View>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => toggleCompleted(taskId)}
            activeOpacity={0.7}
          >
            <Text style={[styles.title, task.completed && styles.completed]} numberOfLines={2}>
              {task.title}
            </Text>
            {task.priority && (
              <View style={[styles.priorityBadge, { backgroundColor: priorityColor + '20' }]}>
                <Text style={[styles.priorityText, { color: priorityColor }]}>
                  {task.priority.toUpperCase()}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {task.description && task.description.trim() && (
          <Text style={[styles.description, task.completed && styles.completed]} numberOfLines={2}>
            {task.description}
          </Text>
        )}

        <View style={styles.dateContainer}>
          {task.dateTime && (
            <View style={styles.dateItem}>
              <Text style={styles.dateLabel}>Start:</Text>
              <Text style={styles.dateText}>{formatDate(task.dateTime)}</Text>
            </View>
          )}
          {task.deadline && (
            <View style={styles.dateItem}>
              <Text style={styles.dateLabel}>Deadline:</Text>
              <Text style={[styles.dateText, styles.deadlineText]}>{formatDate(task.deadline)}</Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={[styles.deleteButton, { borderColor: priorityColor }]}
          onPress={() => deleteTask(taskId)}
        >
          <Text style={[styles.deleteText, { color: priorityColor }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  containerCompleted: {
    opacity: 0.7,
    borderLeftColor: '#888',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  checkboxContainer: {
    marginTop: 2,
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    flex: 1,
    lineHeight: 24,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontWeight: '500',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    marginBottom: 12,
    lineHeight: 20,
  },
  dateContainer: {
    marginTop: 8,
    gap: 6,
  },
  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    minWidth: 65,
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  deadlineText: {
    fontWeight: '600',
    color: '#F44336',
  },
  deleteButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  deleteText: {
    fontSize: 14,
    fontWeight: '600',
  },
});