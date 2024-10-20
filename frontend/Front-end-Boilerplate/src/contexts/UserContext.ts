import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  user: { id: string; name: string; role: string } | null;
  login: (userData: { id: string; name: string; role: string }) => void;
  logout: () => void;
}

// Definimos el contexto con un tipo indefinido inicialmente
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente de proveedor
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ id: string; name: string; role: string } | null>(null);

  const login = (userData: { id: string; name: string; role: string }) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para utilizar el contexto de usuario
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext debe ser usado dentro de UserProvider');
  }
  return context;
};
