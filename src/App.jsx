import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import AddContact from "./components/AddContact";
import { deleteContact } from "./redux/slices/contactSlice";
import { useDispatch } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
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
            <button
              className="btn btn-danger btn-sm mr-2 w-25"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
