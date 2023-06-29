import React, {useState, useEffect } from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  
  const addcontactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contacts}])
  }

  //for getting the datsa from the local storage aftrer refreshing the page
  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  },[]);

  //for saving the contacts to the local storage
  //for storing the data becauuse after refreshing the page the conatactlist gets vanished
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className='ui container'>
      <Header />
      <AddContact addcontactHandler={addcontactHandler}/>
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
