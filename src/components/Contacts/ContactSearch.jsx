import { PURPLE } from "../../helpers/Colors";

const ContactSearch = () => {
    return (
      <div className="input-group mx-2 w-75">
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ backgroundColor: PURPLE }}
        >
          <i className="fa fa-search" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Contact search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    );
  };
  
  export default ContactSearch;
  
