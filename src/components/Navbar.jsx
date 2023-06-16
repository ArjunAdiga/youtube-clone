import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import icon from '../utils/icon.png';
import { useState } from "react";
import {auth} from './firebase'

const Navbar = ({user}) => {
  const [email, setemail] = useState(user)
  
  const login = () => {
    if(user) {
       localStorage.clear()
      //  window.location.reload()
      // auth.signOut();
      setemail('')
      
      
      
    }
 }
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "fixed", background: 'white', top: 0, justifyContent: "space-between",height:'20px',marginLeft: '550px' }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Link to={!email && "/login"}>
        <div onClick={login} style={{ display: 'flex' }}>
          {/* <img src={icon} alt="icon" style={{ width: '24px', height: '24px' }}/> */}
          <span className='header__optionLineTwo'>{email ? 'sign out' : 'sign in'}</span> 
        </div>
      </Link>

  </Stack>
  )
};

export default Navbar;