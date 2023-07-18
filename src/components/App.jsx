import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notearray, setnotearray] = useState([]);

  function addnote(newnote) {
    setnotearray((prev) => {
      return [...prev, newnote];
    });
  }

  function deletenote(props){
    var id=props;
    setnotearray((prev) => {
      return prev.filter((item,index)=> index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notearray.map((notearray, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notearray.title}
            content={notearray.content}
            ondelete={deletenote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
