import React from 'react';
import './App.css';
import Home from './pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoPlayer from './pages/full_video/FullVideo';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import YouTubeApi from './YouTubeApi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/videoplayer/:id" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
    // <YouTubeApi/>

  );
}

export default App;
