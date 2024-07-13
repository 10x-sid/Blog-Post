import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Dashboard from "./pages/BlogDash";

export default function App(){
    return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    
    
    </>)  
    
}