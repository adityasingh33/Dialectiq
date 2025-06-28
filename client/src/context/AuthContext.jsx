// import { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   // Mock register function (replace with backend later)
//   const register = (userData) => {
//     setUser(userData); // Save user data to context
//   };

//   const login = (email, password) => {
//     setUser({
//       email,
//       name: "Demo User", // Replace with actual data later
//     });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }






import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on app start (optional persistence)
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('debateUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Register function
  const register = (userData) => {
    const newUser = {
      id: Date.now(), // Simple ID generation
      name: userData.name,
      email: userData.email,
      gender: userData.gender || '',
      avatar: userData.avatar || 'https://i.pravatar.cc/150?img=3',
      createdAt: new Date().toISOString()
    };
    
    setUser(newUser);
    
    // Optionally save to localStorage for persistence
    try {
      localStorage.setItem('debateUser', JSON.stringify(newUser));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
    
    console.log('User registered:', newUser);
  };

  // Login function
  const login = (email, password) => {
    // This is a mock login - in real app, you'd validate against backend
    const loginUser = {
      id: Date.now(),
      email,
      name: "Demo User", // In real app, this would come from backend
      gender: '',
      avatar: 'https://i.pravatar.cc/150?img=1',
      createdAt: new Date().toISOString()
    };
    
    setUser(loginUser);
    
    try {
      localStorage.setItem('debateUser', JSON.stringify(loginUser));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
    
    console.log('User logged in:', loginUser);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('debateUser');
    } catch (error) {
      console.error('Error removing user from localStorage:', error);
    }
    console.log('User logged out');
  };

  // Update user function
  const updateUser = (updatedData) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    
    setUser(updatedUser);
    
    try {
      localStorage.setItem('debateUser', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error updating user in localStorage:', error);
    }
    
    console.log('User updated:', updatedUser);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}