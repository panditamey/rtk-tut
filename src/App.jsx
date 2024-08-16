import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import AddContact from "./components/AddContact";

function App() {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  return (
    <>
      <div className="container">
        <AddContact />
        <h1>Contacts</h1>
        {contacts.map((contact) => (
          <div key={contact.id} className="card mb-3 p-3">
            <h4 className="card-title">{contact.name}</h4>
            <p className="card-text">{contact.email}</p>
            <p className="card-text">{contact.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
