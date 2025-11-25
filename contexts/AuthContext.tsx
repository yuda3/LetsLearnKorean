import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
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

// 이름에서 일관된 사용자 ID 생성 (같은 이름이면 같은 ID)
const generateUserIdFromName = (name: string): string => {
  const normalized = name.toLowerCase().trim();
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return `user_${Math.abs(hash).toString()}`;
};

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
      // 이름 기반으로 일관된 ID 생성 (같은 이름 = 같은 사용자)
      const userId = generateUserIdFromName(name);

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
