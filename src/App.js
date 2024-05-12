import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Product from './pages/Products/Products';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
  )
);
const App = () => {
  return(
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
