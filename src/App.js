import './App.css';
import Header from './Componentes/Header';
import Products from './Componentes/Products';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
        <Header />
        <Products />
        <Footer />
        {/* Everything is atualized, now I have to do the websites responsivity
        on all tags <Header /><Footer /><Products <Item /> /> */}
    </div>
  );
}

export default App; 
