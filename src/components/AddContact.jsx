import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/slices/contactSlice";

const AddContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const AddContact = () => {
    if (!name || !email || !phone) {
      alert("Please fill all the fields");
      return;
    }

    dispatch(addContact({ name, email, phone }));
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <h3>Add Contact</h3>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
      </form>
      <button
        className="btn btn-primary btn-lg mt-3"
        onClick={() => AddContact()}
      >
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
