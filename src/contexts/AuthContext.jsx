import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const paths = [
    { id: 1, path: "/verification" },
    { id: 2, path: "/bank-verification" },
    { id: 3, path: "/id-verification" },
    { id: 4, path: "/business-verification" },
  ];

  //this is done to calculate the current page index in auth pages
  const getPathDataById = (id) => {
    const pathToUse = paths.find((p) => p.id === id);
    if (!pathToUse) return { path: undefined, pageIndex: undefined };

    return { path: pathToUse.path, pageIndex: paths.findIndex((p) => p.id === id) + 1 };
  };

  return (
    <AuthContext.Provider value={{ paths, getPathDataById }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
