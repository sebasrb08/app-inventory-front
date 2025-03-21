import { useContext, createContext } from 'react';
import { useStorageState } from '../hooks/useStorageState';
import { signIn } from '../service/loginService';
import { router } from 'expo-router';
const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async({ username, password })=>{
        try {
            const data = await signIn({ username, password });
            const { token } = data;
            setSession([false, token ]);
          } catch (error) {
            console.error("Login failed:", error.message);
          }
        },
        signOut: () => {
          console.log("signOut")
          setSession(null);
          router.replace('/login');
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}