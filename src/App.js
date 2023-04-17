import { useState } from "react";

import {Navbar, Contacts, AddContact, EditContact, ViewContact} from "./components";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Contacts getContacts={contacts} loading={loading}/>
    </div>
  );
}

export default App;
