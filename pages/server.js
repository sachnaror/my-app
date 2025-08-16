// pages/server.js
export default function Server({ time }) {
    return (
        <div style={{ padding: 20 }}>
            <h1>⏰ Server Side Dish</h1>
            <p>Served at: {time}</p>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: { time: new Date().toLocaleTimeString() },
    };
}
