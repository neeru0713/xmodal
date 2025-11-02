import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return;
    }

    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate > today) {
      alert("Invalid date of birth");
      return;
    }

    console.log("Form submitted successfully:", formData);

    setIsModalOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  return (
    <div className="App">
      {!isModalOpen && (
        <button className="open-button" onClick={openModal}>
          Open Form
        </button>
      )}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

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
          inset: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          text-align: left;
          width: 300px;
          position: relative;
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
