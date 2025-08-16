// pages/static.js
export default function StaticPage({ special }) {
    return (
        <div style={{ padding: 20 }}>
            <h1>🥗 Static Buffet</h1>
            <p>Today’s special: {special}</p>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: { special: "Paneer Butter Masala" },
    };
}
