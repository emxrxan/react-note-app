import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'
import './UserForm.css'

import NoteContext from '../../Context/NoteContext'
import { useRef, useContext } from 'react'

export default function UserForm() {

  const {notes, setNotes} = useContext(NoteContext);

  let titleRef = useRef("");
  let dateRef = useRef("");
  let textRef = useRef("");

  const submitHandler = (event) => {
  const neueList = [...notes];

    neueList.push({
      id: Date.now(),
      title: titleRef.current.value,
      date: new Date(dateRef.current.value),
      text: textRef.current.value
    });

    setNotes(neueList);
    console.log(notes);

    titleRef.current.value = "";
    dateRef.current.value = "";
    textRef.current.value = "";
  }

  // useEffect(()=>{
  //   
  // },[notes]);

  return (
    <form className='form-container' method='get'>
        
        <div className='inputs form-flex-container'>
            <Input ref={titleRef}  label="Titel" type="text" placeholder="Titel der Notiz" name="titel" form="form-container" />
            <Input ref={dateRef} label="Datum" type="date" placeholder="tt.mm.jjjj" name="datum" form="form-container"/>
            <Button form="form-container" inhalt="Notiz hinzufügen" onClick={() => submitHandler(Event)}/>
        </div>

        <div className='text-areas form-flex-container'>
            <TextArea ref={textRef} label="Inhalt der Notiz" placeholder="Deine Notiz ..." name="notiz-text" form="form-container"/>
        </div>

    </form>
  )
}
