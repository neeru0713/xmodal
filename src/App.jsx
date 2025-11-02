import React, { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  // open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // close modal on outside click
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle form submit and validation
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username) {
      alert("Please fill out the Username field.");
      return;
    }
    if (!email) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!phone) {
      alert("Please fill out the Phone Number field.");
      return;
    }
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > today) {
      alert("Invalid date of birth. Date cannot be in the future.");
      return;
    }

    // reset and close modal
    setIsModalOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  return (
    <div className="App">
      {!isModalOpen && (
        <button onClick={openModal} className="open-button">
          Open Form
        </button>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Inline CSS using style tag */}
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }

        .App {
          text-align: center;
          padding-top: 100px;
        }

        .open-button {
          padding: 12px 25px;
          font-size: 18px;
          cursor: pointer;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
        }

        .open-button:hover {
          background-color: #0056b3;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: white;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          text-align: left;
          width: 300px;
        }

        form div {
          margin-bottom: 15px;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .submit-button {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
        }

        .submit-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}

export default App;
