import React from 'react';
import axios from 'axios';
import './Books.css'


function Books() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2VwRbeVmwKCp6P2xCiOqG1wGWkTdYeq2`)
    .then(response => {
      console.log(response, 'reesponse')
      setData(response.data)
    });
  }, [])

  return (
    <div className="App">
      <h1>Best Sellers</h1>
      <div className='cards'>
        {data && data.results.books.map(({ title, author, description, book_image, amazon_product_url }) => {
          return (
              <div className='card'>
                <p className="booksTitle">{title}</p>
                <img className="image" src={book_image} alt="Book"/>
                <p>{author}</p>
                <p>{description}</p>
                <a href={amazon_product_url}>Buy The Book</a>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default Books;