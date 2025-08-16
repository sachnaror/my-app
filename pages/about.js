// pages/about.js
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function About({ chef }) {
    const { user } = useContext(UserContext);

    return (
        <div style={{ padding: 20 }}>
            <h1>👨‍🍳 About Page</h1>
            <p>Chef in charge: {user.name}</p>
            <p>Role: {user.role}</p>
            <p>Founder: {chef}</p>
        </div>
    );
}

// SSG
export async function getStaticProps() {
    return {
        props: { chef: "Sachin Arora" },
    };
}
