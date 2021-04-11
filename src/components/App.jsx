import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const createEntry = (emoji) => {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <Header title="emojipedia" />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
