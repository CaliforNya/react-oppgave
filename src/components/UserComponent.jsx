import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

const UserComponent = () => {
  const [users, setUsers] = useState(mockData);
  const [newUser, setNewUser] = useState({ username: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (newUser.username && newUser.email) {
      setUsers((prev) => [...prev, newUser]);
      setNewUser({ username: "", email: "" });
    } else {
      alert("Please fill out both fields!");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {users.map((user, index) => (
        <div key={index}>
          <h1 style={{ color: "#EF626C" }}>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      ))}

      <div
        style={{
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="User's name"
          value={newUser.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="User's email"
          value={newUser.email}
          onChange={handleInputChange}
          required
        />
        <button
          style={{
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            backgroundColor: "#535050",
            color: "#EF626C",
            cursor: "pointer",
          }}
          onClick={handleAddUser}
        >
          Add new user
        </button>
      </div>
    </div>
  );
};

export default UserComponent;
