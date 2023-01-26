import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Books from './Components/pages/Books';
import Categories from './Components/pages/Categories';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
