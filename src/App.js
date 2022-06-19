import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="container">
        <Header></Header>
        {contacts.map((item) => {
          return (
            <div key={item.phone} className="center">
              <Contact data={item}/>
            </div>
          );
        })}
       
    </div>

  );
}

export default App;
