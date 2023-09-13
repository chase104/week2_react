import { useState } from 'react';
import './index.css'


const NewBook = ({ books, setBooks }) => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(1);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  const handlePagesChange = (e) => {
    if (e.target.value > 0) {
      setPages(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    console.log("trying to submit")
    e.preventDefault();
     setBooks([
      ...books,
      {
        title: title,
        author: author,
        pages: pages
      }
     ])

  }

  return (
    <div  className="page-container">
      <h2>Enter a new book!</h2>
      <form className="flex-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
        </label>
        <input onChange={handleTitleChange} name="title" type="text" value={title} />

        <label htmlFor="author">
          Author
        </label>
        <input onChange={handleAuthorChange} name="author" type="text" value={author} />

        <label htmlFor="pages">
          Pages
        </label>
        <input onChange={handlePagesChange} min="1" name="pages" type="number" value={pages} />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default NewBook