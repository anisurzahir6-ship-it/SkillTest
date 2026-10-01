import { useState } from "react";
import axios from "axios";

function BookForm() {
    const [formData, setFormData] = useState({
        bookTitle: "",
        authorName: "",
        isbn: "",
        category: "",
        publicationYear: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/books",
                formData
            );

            setMessage("Book added successfully");

            setFormData({
                bookTitle: "",
                authorName: "",
                isbn: "",
                category: "",
                publicationYear: ""
            });
        } catch (err) {
            setMessage("Failed to add book");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>

            <input
                name="bookTitle"
                placeholder="Book Title"
                value={formData.bookTitle}
                onChange={handleChange}
                required
            />

            <input
                name="authorName"
                placeholder="Author Name"
                value={formData.authorName}
                onChange={handleChange}
                required
            />

            <input
                name="isbn"
                placeholder="ISBN"
                value={formData.isbn}
                onChange={handleChange}
                required
            />

            <input
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
            />

            <input
                name="publicationYear"
                type="number"
                placeholder="Publication Year"
                value={formData.publicationYear}
                onChange={handleChange}
                required
            />

            <button type="submit">Add Book</button>

            <p>{message}</p>
        </form>
    );
}

export default BookForm;