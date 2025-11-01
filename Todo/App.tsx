import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import TodoScreen from './screens/TodoScreen';
import HomeScreen from './screens/HomeScreen';

type ViewName = 'home' | 'auth' | 'todo';

export default function App() {
  const [view, setView] = useState<ViewName>('home');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [token, setToken] = useState<string | null>(null);

  function handleLogout() {
    setToken(null);
    setView('home');
  };

  // when auth succeeds, show todo screen
  function handleAuthSuccess(newToken: string) {
    setToken(newToken);
    setView('todo');
  }

  return (
    <SafeAreaView style={styles.container}>
      {view === 'home' && (
        <HomeScreen
          onLogin={() => {
            setAuthMode('login');
            setView('auth');
          }}
          onRegister={() => {
            setAuthMode('register');
            setView('auth');
          }}
          onOpenTodo={() => setView('todo')}
          token={token}
        />
      )}

      {view === 'auth' && (
        <AuthScreen mode={authMode} onSuccess={handleAuthSuccess} onBack={() => setView('home')} />
      )}

      {view === 'todo' && <TodoScreen token={token ?? ''} onLogout={handleLogout} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// Home screen component is in ./screens/HomeScreen.tsx