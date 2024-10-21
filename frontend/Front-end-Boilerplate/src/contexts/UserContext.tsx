import React, { createContext, useState, ReactNode } from 'react';

// Definir el tipo de usuario
interface User {
  name: string;
  email: string;
}

// Definir el tipo de contexto
interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Crear el contexto
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Proveedor del contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (newUser: User) => {
    setUser(newUser);
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
