// App.jsx
// Main app entry component

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import Home from './pages/Home';
import About from './pages/About';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
