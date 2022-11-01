import Header from './components/Header';
import AlbumList from './components/AlbumList'; 
import './App.css';
import AddAlbum from './components/AddAlbum';

function App() {
  return (
    <div className="App">
      <Header />
      <AlbumList />
      <AddAlbum />
    </div>
  );
}

export default App;
