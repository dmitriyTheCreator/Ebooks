module.exports = app => {
  const books = require("../controller/controller.js");

  let router = require("express").Router();

  // Add a new book
  router.post("/", books.addNewBook);

  // Find a book by ID
  router.get("/:id", books.findBookById);

  // Update a book by ID
  router.put("/:id", books.updateBookById);

  // Delete the book by ID
  router.delete("/:id", books.deleteBookById);

  // Delete all books
  router.delete("/", books.deleteAll);
  
  // Release books list
  router.get("/", books.findAll);

  app.use("/api/books", router);
};
