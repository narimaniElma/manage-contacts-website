import Contact from "./Contact";
import Spinner from "../Spinner";
import { PINK, ORANGE, CURRENTLINE } from "../../helpers/Colors";

const Contacts = ({ getContacts, loading }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn my-2" style={{ backgroundColor: PINK }}>
                  Create new contact
                  <i className="fa fa-plus-circle mx-2" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {getContacts.length > 0 ? (
              getContacts.map((person) => (
                <Contact people={person} key={person.id} />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  There's no contact ...
                </p>
                <img
                  alt="Not found any contact"
                  src={require("../../assets/no-found.gif")}
                  className="w-25"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
