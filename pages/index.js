// pages/index.js
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const [count, setCount] = useState(0);
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>🍴 Welcome {user.name}</h1>
      <p>Current role: {user.role}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add one more plate</button>
      <button onClick={() => setUser({ name: "Sachin", role: "Chef" })}>
        Become Chef
      </button>
    </div>
  );
}
