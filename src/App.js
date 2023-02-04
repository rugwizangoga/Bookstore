import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import store from './redux/configureStore';
import Books from './Components/pages/Books';
import Categories from './Components/pages/Categories';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
