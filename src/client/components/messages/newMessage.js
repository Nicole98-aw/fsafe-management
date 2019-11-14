import React, { useState } from "react";
import { Button } from "reactstrap";
import Combobox from "react-widgets/lib/Combobox";

const NewMessage = () => {
  return (
    <div className="main">
      <h4 className="msg-h4">New Message</h4>
      <div className="message-container">
        <div className="msg-row">
          <div className="msg-col-75">
            {/* <div className="col-md-2"> */}
            <Combobox
              placeholder="To"
              data={[
                "Saccos",
                "Riders",
                "Deactivated riders",
                "Deactivated saccos"
              ]}
            />
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "400px" }}
            ></textarea>
            <Button color="primary send-btn">
              send <i className="fas fa-paper-plane"></i>
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
