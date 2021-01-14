import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import QrGen from './components/qrgen/qrgen'
function App() {
  return (
    <div className="App">
      <Header/>
      <QrGen/>
    </div>
  );
}

export default App;
