import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState();

  const handleChangeFirstName = e => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = e => {
    setLastName(e.target.value);
  };

  const handleSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      console.info(firstName, lastName);

      // clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChangeFirstName}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChangeLastName}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close blue waves-effect waves-light btn-large"
          style={{ marginRight: '24px' }}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '50%',
  height: '60%'
};

export default AddTechModal;
