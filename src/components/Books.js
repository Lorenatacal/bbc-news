import React from 'react';
import axios from 'axios';


function Books() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2VwRbeVmwKCp6P2xCiOqG1wGWkTdYeq2`)
    .then(response => {
      setData(response.data)
    });
  }, [])

  return (
    <div className="App">
      <h1>Best Books Of The Week</h1>
      <div className='cards'>
        {data && data.results.books.map(({ title, author, description, book_image }) => {
          return (
              <div className='card'>
                <p>{title}</p>
                <img className="image" src={book_image} alt="Book"/>
                <p>{author}</p>
                <p>{description}</p>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default Books;