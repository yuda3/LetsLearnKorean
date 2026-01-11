import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User, UserLevel } from '../types';
import { storageService } from '../services/storageService';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (name: string, character?: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserLevel: (level: UserLevel) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const savedUser = await storageService.getUser();
      setUser(savedUser);
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (name: string, character?: string) => {
    try {
      // UUID를 사용하여 고유한 사용자 ID 생성
      const userId = uuidv4();

      const newUser: User = {
        id: userId,
        name,
        character: character || '👤',
        createdAt: new Date().toISOString(),
      };
      await storageService.saveUser(newUser);
      setUser(newUser);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await storageService.removeUser();
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };

  const updateUserLevel = async (level: UserLevel) => {
    try {
      if (user) {
        const updatedUser: User = {
          ...user,
          level,
        };
        await storageService.saveUser(updatedUser);
        setUser(updatedUser);
      }
    } catch (error) {
      console.error('Error updating user level:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, updateUserLevel }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
