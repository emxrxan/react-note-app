import React from 'react'
import NoteItem from '../NoteItem/NoteItem'
import './NoteContainer.css'

import { useContext } from 'react'
import NoteContext from '../../Context/NoteContext'

export default function NoteContainer() {

  const {notes, setModal, setNotes} = useContext(NoteContext);
  const openModal = (note) => setModal(note); 
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

  const remove = (id) => {

  const neueList = notes.filter((note) => note.id !== id);
      setNotes(neueList);
  }

  if(notes.length > 1){
    notes.sort((a, b) => {
      if (a.date > b.date){
         return 1;      
      }
      else if (a.date < b.date){
        return -1;
      }
      else{
        return 0;
      } 
    })
  }

  return (
    <div className='NoteContainer'>
        {notes.map((note)=>{
            return <NoteItem date={note.date.toLocaleDateString("de-DE", options)} title={note.title} key={"key-" + note.title + "-" + note.id}  onModalOpen={() => openModal(note)} onRemove={()=>remove(note.id)}/>
        })}
    </div>
  )
}
