import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
