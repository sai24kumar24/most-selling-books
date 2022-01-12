import './App.css';
import { Book } from './components/book-component';

function App() {

  const books = [
    {
      id: 1,
      name: 'Think and Grow Rich',
      Author: 'Napoleon Hill',
      price: 299,
      image: 'https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 2,
      name: 'The Monk Who Sold His Ferrari',
      Author: 'Robin Sharma',
      price: 170,
      image: 'https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 3,
      name: 'The Intelligent Investor',
      Author: 'Benjamin Graham',
      price: 484,
      image: 'https://m.media-amazon.com/images/I/91+t0Di07FL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 4,
      name: 'The Alchemist',
      Author: 'Paulo Coelho',
      price: 267,
      image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 5,
      name: 'Rich Dad Poor Dad',
      Author: 'Robert T.Kiyosaki',
      price: 292,
      image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg'
    }
  ]

  return (
    <div className="App">
      {
            books.map
            (book => 
            <Book key={book.id} book={book}></Book>
            )
        }
    </div>
  );
}

export default App;
