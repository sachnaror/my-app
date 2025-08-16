import { useState } from "react";

export default function ReviewForm() {
    const [formData, setFormData] = useState({
        company: "",
        date: "",
        department: "",
        city: "",
        rating: 1,
        review: "",
        image: null,
        youtube: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("company", formData.company);
        data.append("date", formData.date);
        data.append("department", formData.department);
        data.append("city", formData.city);
        data.append("rating", formData.rating);
        data.append("review", formData.review);
        if (formData.image) data.append("image", formData.image);
        if (formData.youtube) data.append("youtube", formData.youtube);

        try {
            const response = await fetch("https://api.taxtot.com/api/reviews/create/", {
                method: "POST",
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbXBlIjoicmVmcmVzaCIsImV4cCI6MTc1Nzk1Njg2MSwiaWF0IjoxNzU1MzY0ODYxLCJqdGkiOiI2ZTJkYWYwMGIxOWU0ODM5YjhmZWYwYWY0ZDAyMGU4ZiIsInVzZXJfaWQiOjV9.vX_j6VES2q2dfsF3CaBdLUXw7OU-IrbMTH1jLA7I9bQ", // 👈 add token here
                },
                body: data,
            });

            if (response.ok) {
                alert("Review submitted successfully!");
                setFormData({
                    company: "",
                    date: "",
                    department: "",
                    city: "",
                    rating: 1,
                    review: "",
                    image: null,
                    youtube: "",
                });
            } else {
                const err = await response.json();
                console.error("Error:", err);
                alert("Failed to submit review: " + (err?.detail || ""));
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "600px",
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                }}
            >
                <h2>Post Your Review</h2>

                <label>Name of the company *</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", marginBottom: "10px" }}
                />

                <label>My Experience & Sentiments *</label>
                <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "10px" }}
                >
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>

                <label>Date of the incident *</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", marginBottom: "10px" }}
                />

                <label>Department / Product *</label>
                <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", marginBottom: "10px" }}
                />

                <label>City of incident *</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", marginBottom: "10px" }}
                />

                <label>Write your review (Min 800 chars) *</label>
                <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    minLength="800"
                    required
                    style={{ width: "100%", height: "120px", marginBottom: "10px" }}
                />

                <label>Upload image (optional)</label>
                <input type="file" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png,.doc" />

                <label>YouTube Link (optional)</label>
                <input
                    type="url"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "10px" }}
                />

                <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "#fff" }}>
                    Post My Review
                </button>
            </form>
        </div>
    );
}
