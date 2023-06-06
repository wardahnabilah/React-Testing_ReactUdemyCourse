import { Routes, Route } from 'react-router-dom';
import { WordCounter } from './pages/WordCounter';
import { JokesAPI } from './pages/JokesAPI'
import { PageNotFound } from './pages/PageNotFound'

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WordCounter />}></Route>
      <Route path="/joke" element={<JokesAPI />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
  </Routes>
  );
}

export default App;
