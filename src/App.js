import './App.css';
import Footer from './component/footer';
import NavBar from './component/navBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Product from './component/product';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Hello World!</h1>



    <Product></Product>
    <Product></Product>
    <Product></Product>
    <Product></Product>
    <Product></Product>
    <Product></Product>


    <Footer></Footer>
  </div>
  );
}

export default App;
