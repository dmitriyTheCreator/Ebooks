const db = require("../model");
const Book = db.books;

// Add a new book
exports.addNewBook = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ alert: "Title is required!" });
    return;
  }

  const book = new Book({
    title: req.body.title,
    description: req.body.description,
  });

  book
    .save(book)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        alert:
          error.alert || "Some error occurred while adding the book."
      });
    });
};


// Find a book by ID
exports.findBookById = (req, res) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then(data => {
      if (!data)
        res.status(404).send({ alert: "Book does not found, book ID " + bookId });
      else res.send(data);
    })
    .catch(error => {
      res
        .status(500)
        .send({ alert: "Some error occurred while retrieving book ID " + bookId });
    });
};

// Update a book by ID
exports.updateBookById = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      alert: "Please add new information to update."
    });
  }

  const bookId = req.params.id;

  Book.findByIdAndUpdate(bookId, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          alert: `Cannot update book ID ${bookId}. Book was not found!`
        });
      } else res.send({ alert: "Book successfully updated!" });
    })
    .catch(error => {
      res.status(500).send({
        alert: "Some error occurred while updating book ID " + bookId
      });
    });
};

// Delete the book by ID
exports.deleteBookById = (req, res) => {
  const bookId = req.params.id;

  Book.findByIdAndRemove(bookId, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          alert: `Cannot delete book ID ${bookId}. Book was not found!`
        });
      } else {
        res.send({
          alert: "Book successfully deleted!"
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        alert: "Cannot delete book ID" + bookId
      });
    });
};

// Delete all books
exports.deleteAll = (req, res) => {
  Book.deleteMany({})
    .then(data => {
      res.send({
        alert: `${data.deletedCount} Book successfully deleted !`
      });
    })
    .catch(error => {
      res.status(500).send({
        alert:
          error.alert || "Some error occurred while deleting all books."
      });
    });
};

// Release books list
exports.findAll = (req, res) => {
  Book.find()
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving all books."
      });
    });
};

