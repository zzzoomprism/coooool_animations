import React from 'react';
import "./style/_main.scss"

function App() {
  return (
    <div className="App">
      <section id={"object"}>
        <div className="face front"/>
        <div className="face back"/>
        <div className="face top"/>
        <div className="face bottom"/>
        <div className="face left"/>
        <div className="face right"/>

        <section className={"keys"}>
          <div className="key front-key"/>
          <div className="key back-key"/>
          <div className="key top-key"/>
          <div className="key bottom-key"/>
          <div className="key left-key"/>
          <div className="key right-key"/>
        </section>

        <section className={"keys"}>
          <div className="key3 front-key"/>
          <div className="key3 back-key"/>
          <div className="key3 top-key"/>
          <div className="key3 bottom-key"/>
          <div className="key3 left-key"/>
          <div className="key3 right-key"/>
        </section>

        <section className={"keys"}>
          <div className="key2 front-key"/>
          <div className="key2 back-key"/>
          <div className="key2 top-key"/>
          <div className="key2 bottom-key"/>
          <div className="key2 left-key"/>
          <div className="key2 right-key"/>
        </section>
      </section>
    </div>
  );
}

export default App;
