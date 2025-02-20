import { Routes, Route } from "react-router-dom"
import IdVerification from "../auth-components/IdVerification"
import BusinessRegNum from "../auth-components/BusinessRegNum"
import BankVerification from "../auth-components/BankVerification"
import EmailVerification from "../auth-components/EmailVerification"

const AuthPage = () => {

  const paths = [
    { id: 1, path: "/" },
    { id: 2, path: "/auth-bank" },
    { id: 3, path: "/auth-id" },
    { id: 4, path: "/auth-buss" },
  ]
  
//helper
const getPathDataById = (id) => {
  const pathToUse = paths.find((p) => p.id === id);
  
  if (!pathToUse) {
    return { path: undefined, pageIndex: undefined };  
  }

  const path = pathToUse.path;
  const pageIndex = paths.findIndex((p) => p.id === id) + 1; 

  return { path, pageIndex };
};

  return (
   
    <>
        <Routes>
            <Route path="/" element={ <EmailVerification paths={paths} getPathDataById={getPathDataById}/> } />
            <Route path="/auth-bank" element={ <BankVerification paths={paths} getPathDataById={getPathDataById}/> } />
            <Route path="/auth-id" element={ <IdVerification paths={paths} getPathDataById={getPathDataById}/> } />
            <Route path="/auth-buss" element={ <BusinessRegNum paths={paths} getPathDataById={getPathDataById}/> } />
        </Routes>
    </>
    
  )
}

export default AuthPage

