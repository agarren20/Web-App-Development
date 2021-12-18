import { useState } from "react";
import Title from "./Title";
import Main from "./Main";
import Nav from "./Nav";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Title title="Random Kanye Quotes" />
      <Nav />
    </div>
  );
}
