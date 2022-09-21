import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="border-box">
        <div className="container">
            <Header profile="profile" />
            <About />
            <Footer />
        </div>
    </div>   
  );
}

export default App;
