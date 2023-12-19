import React, { Component } from "react";
import BookDataService from "../services/service";
import { Link } from "react-router-dom";

import { styles } from "../css"
import { Button, Grid, ListItem, withStyles } from "@material-ui/core";

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveBooks = this.retrieveBooks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBook = this.setActiveBook.bind(this);
    this.removeAllBooks = this.removeAllBooks.bind(this);

    this.state = {
      books: [],
      currentBook: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveBooks();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveBooks() {
    BookDataService.getAll()
      .then(response => {
        this.setState({
          books: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBooks();
    this.setState({
      currentBook: null,
      currentIndex: -1
    });
  }

  setActiveBook(book, index) {
    this.setState({
      currentBook: book,
      currentIndex: index
    });
  }

  removeAllBooks() {
    BookDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { classes } = this.props
    const { books, currentBook, currentIndex } = this.state;

    return (
      <div className={classes.form}>
        <Grid container>
          
          <Grid item md={8}>
            {currentBook ? (
              <div className={classes.book}>
                <h4>Інформація про книгу</h4>
                <div className={classes.detail}>
                  <label>
                    <strong>Назва книги:</strong>
                  </label>{" "}
                  {currentBook.title}
                </div>
                <div className={classes.detail}>
                  <label>
                    <strong>Короткий опис книги:</strong>
                  </label>{" "}
                  {currentBook.description}
                </div>
                <Link
                  to={"/books/" + currentBook.id}
                  className={classes.edit}
                >
                  Редагувати
              </Link>
              </div>
            ) : (
                <div>
                  <br />
                  <p className={classes.book}></p>
                </div>
              )}
          </Grid>
		  <Grid item md={4}>
            <h2>Cписок книг</h2>

            <div className="list-group">
              {books &&
                books.map((book, index) => (
                  <ListItem
                    selected={index === currentIndex}
                    onClick={() => this.setActiveBook(book, index)}
                    divider
                    button	
                    key={index}>
                    {book.title}
                  </ListItem>
                ))}
            </div>

            <Button
              className={`${classes.button} ${classes.removeAll}`}
              size="small"
              color="secondary"
              variant="contained"
              onClick={this.removeAllBooks}
            >
              Видалити всі книги із бібліотеки
          </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(BooksList)