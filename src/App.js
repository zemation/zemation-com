import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sheet from './components/CharacterSheet/Sheet'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sheet />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
