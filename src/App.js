import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAllContacts, getAllGroups } from "./services/contactService"

import {
  Navbar,
  Contacts,
  AddContact,
  EditContact,
  ViewContact,
} from "./components";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: contactData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts getContacts={contacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:id" element={<ViewContact />} />
        <Route path="/contacts/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
