import './App.css';
import Footer from './component/footer';
import NavBar from './component/navBar';
import Product from './component/product';
import Catalog from './component/catalog';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>

    


    <Footer></Footer>
  </div>
  );
}

export default App;
