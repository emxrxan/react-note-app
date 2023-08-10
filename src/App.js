import Header from "./Components/Header/Header";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import NoteContext from "./Context/NoteContext";
import Modal from "./Components/Modal/Modal";

import { Fragment, React, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function App() {

  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(null);

  const closeModal = () => setModal(null);

  return (
    <Fragment>
      <NoteContext.Provider value={{notes, setNotes, setModal, modal}}>
          <Header />
          <NoteContainer />
          {modal && <Modal onClose={()=>closeModal()}/>}{/*Wenn modall nicht null ist wird modal angezeigt*/}
      </NoteContext.Provider>
    </Fragment>
  );
}
