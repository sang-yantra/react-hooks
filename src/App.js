import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HooksList from './components/HooksList';
import UserSate from './components/UserState/UserState';
import UseEffect from './components/UseEffect/UseEffect';
import UseContext from './components/UseContext/UseContext';
import UseReducer from './components/UseReducer/UseReducer';
import UseMemo from './components/UseMemo/UseMemo';
import UseCallback from './components/UseCallback/UseCallback';
import UseRef from './components/UseRef/UseRef';
import { Switch, Routes, Route, Link } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <h1>Hooks Api Reference</h1>
        <HooksList />
        <hr />
        <h1>Basic Hooks</h1>
        <Routes>
          <Route path="/" element={<UserSate />}></Route>
          <Route path="/useEffect" element={<UseEffect />}></Route>
          <Route path="/useContext" element={<UseContext />}></Route>
          <Route path="/useReducer" element={<UseReducer />}></Route>
          <Route path="/useMemo" element={<UseMemo />}></Route>
          <Route path="/useCallback" element={<UseCallback />}></Route>
          <Route path="/useRef" element={<UseRef />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
