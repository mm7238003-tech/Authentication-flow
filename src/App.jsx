import AddCode from "./pages/AddCode.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import Login from "./pages/Login.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Sign from "./pages/SignUp.jsx";
import {BrowserRouter,Route , Routes} from "react-router-dom" ;



export default function App() {
  return (
    <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Login/>}/>   
  <Route path="SignUp" element={<Sign/>}/>
    <Route path="ForgetPassword" element={<ForgetPassword/>}/>           
  <Route path="AddCode" element={<AddCode/>}/>             
    <Route path="ResetPassword" element={<ResetPassword/>}/>  
</Routes>
</BrowserRouter>

    </>
  )
}
