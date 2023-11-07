import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Comtent";
import Subject from "./components/Subject";

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyerText Markup Language."></Content>
    </div>
  );
}

export default App;
