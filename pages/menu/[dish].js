// pages/menu/[dish].js
import { useRouter } from "next/router";

export default function DishPage({ dish, recipe }) {
    const router = useRouter();

    if (router.isFallback) return <p>⏳ Cooking {router.query.dish}...</p>;

    return (
        <div style={{ padding: 20 }}>
            <h1>🍲 Dish: {dish}</h1>
            <p>Recipe: {recipe}</p>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { dish: "pizza" } },
            { params: { dish: "paneer" } },
            { params: { dish: "biryani" } },
        ],
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const recipes = {
        pizza: "Flour + Cheese + Sauce",
        paneer: "Paneer + Gravy + Masala",
        biryani: "Rice + Spices + Chicken/Veg",
    };

    return {
        props: {
            dish: params.dish,
            recipe: recipes[params.dish] || "Chef’s secret recipe 🧑‍🍳",
        },
        revalidate: 60,
    };
}
