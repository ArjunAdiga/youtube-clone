import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import Login from "./components/Login";

const App = () => (
  <Router>
    <Box sx={{ backgroundColor: '#000' }}>
      
      <Routes>
        <Route exact path='/' element={<>   <Navbar/><Feed/>   </>} />
        <Route path='/video/:id' element={<><Navbar/><VideoDetail/></>} />
        <Route path='/channel/:id' element={<><Navbar/><ChannelDetail/></>} />
        <Route path='/search/:searchTerm' element={<><Navbar/><SearchFeed/></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  </Router>
);

export default App;