import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onLogin: () => void;
  onRegister: () => void;
  onOpenTodo: () => void;
  token?: string | null;
};

export default function HomeScreen({ onLogin, onRegister, onOpenTodo, token }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>📝</Text>
        <Text style={styles.title}>My Todo App</Text>
        <Text style={styles.subtitle}>Stay organized and productive</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={onRegister}>
          <Text style={styles.buttonOutlineText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={onOpenTodo}>
          <Text style={styles.linkText}>{token ? '✓ Continue to Todo' : 'Browse as Guest'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f7fa',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 12,
    color: '#1a1a1a',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    maxWidth: 400,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  buttonOutline: {
    borderColor: '#007AFF',
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 14,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonOutlineText: {
    color: '#007AFF',
    fontWeight: '700',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  link: {
    marginTop: 8,
    paddingVertical: 12,
  },
  linkText: {
    color: '#666',
    fontSize: 15,
    fontWeight: '500',
  },
});
