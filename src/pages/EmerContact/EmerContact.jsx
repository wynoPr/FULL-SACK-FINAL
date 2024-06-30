import React, { useState, useContext, useEffect } from "react";
import "./EmerContact.scss";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../App";
import { useLocation } from "react-router-dom";
import SOSbutton from "../../components/SOSbutton/SOSbutton";
import axios from "axios";
import EditEmerContact from "../../components/EditEmerContact/EditEmerContact";

export default function EmerContact() {
  const { lastP, setLastP } = useContext(GlobalContext);
  const [editable, setEditable] = useState(false);
  const [emerName, setEmerName] = useState("Mº Jacinta López");
  const [emerTelf, setEmerTelf] = useState("24-05-24");
  const [emerMail, setEmerMail] = useState("ja.lo@gmail.com");
  const path = useLocation().pathname;

  //stablish last page viewed
  useEffect(() => {
    console.log(lastP);

    return () => {
      setLastP(path);
      console.log(lastP);
    };
  }, []);

  const handleEditEmerContactClick = () => {
    setEditable(true);
  };

  const getEmerContact = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/${user._id}`);
      setEmerName(response.data.data.name);
      setEmerTelf(response.data.data.telf);
      setEmerMail(response.data.data.mail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmerContact();
  }, []);

  return (
    <>
      {editable && (
        <EditEmerContact
          emerName={emerName}
          emerTelf={emerTelf}
          emerMail={emerMail}
          setEditable={setEditable}
          onEdit={() => {
            setEmerName("");
            setEmerTelf("");
            setEmerMail("");
            getEmerName();
          }}
        />
      )}
      {!editable && (
        <section className="profile container" id="profile">
          <Header />
          <section className="e-contact container" id="e_contact">
            <div className="e-contact_info">
              <h2 className="h1 danger e-contact_head mg-b-20">
                Emergency Contact:
              </h2>
              <h2 className="h2 e-contact_head mg-b-20">Profile info:</h2>
              <h3 className="h2">Name: </h3>
              <p className="p-b">{emerName}</p>
              <h3 className="h2">Telf: </h3>
              <p className="p-b">{emerTelf}</p>
              <h3 className="h2">Mail: </h3>
              <p className="p-b">{emerMail}</p>
            </div>
            <button
              className="btt_txt h2 e-contact_btt"
              onClick={handleEditEmerContactClick}
            >
              Edit your emergency contact
            </button>
            <SOSbutton />
          </section>
        </section>
      )}
    </>
  );
}
