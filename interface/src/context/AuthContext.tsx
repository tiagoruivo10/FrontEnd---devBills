import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { AuthState } from "../types/auth";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { firebaseAuth, googleAuthProvider } from "../config/firebase";

interface AuthContextProps {
  authState: AuthState;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    error: null,
    loading: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (user) => {
        console.log(user?.email || "Deslogado");

        if (user) {
          setAuthState({
            user: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
            error: null,
            loading: false,
          });
        } else {
          setAuthState({
            user: null,
            error: null,
            loading: false,
          });
        }
      },
      (error) => {
        console.error("Erro na autentificação");
        setAuthState({
          user: null,
          error: error.message,
          loading: false,
        });
      },
    );

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async (): Promise<void> => {
    setAuthState((prev) => ({ ...prev, loading: true }));

    try {
      await signInWithPopup(firebaseAuth, googleAuthProvider);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro ao tentar logar";

      setAuthState((prev) => ({ ...prev, loading: false, error: message }));
    }
  };

  const signOut = async (): Promise<void> => {
    setAuthState((prev) => ({ ...prev, loading: true }));

    try {
      await firebaseSignOut(firebaseAuth);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro ao tentar sair";

      setAuthState((prev) => ({ ...prev, loading: false, error: message }));
    }
  };

  return (
    <AuthContext.Provider value={{ authState, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("UseAuth must be used within an AuthProvider");
  }

  return context;
};
