const Book = require("../models/Books");

const addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();

        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

module.exports = { addBook };