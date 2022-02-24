import logo from './logo.svg';
import './App.css';
import PhotoAlbum from './components/photo-album/PhotoAlbum';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <PhotoAlbum/>
    </div>
  );
}

export default App;
