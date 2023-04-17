import ContactSearch from "./Contacts/ContactSearch";

import { BACKGROUND, PURPLE } from "../helpers/Colors";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fa fa-id-badge" style={{ color: PURPLE }} /> Contact
              search website {"  "}
              <span style={{ color: PURPLE }}>Contacts</span>
            </div>
          </div>
          <div className="col">
            <ContactSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
