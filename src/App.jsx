import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  return (
    <>
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
      ))}
    </>
  );
}

export default App;
