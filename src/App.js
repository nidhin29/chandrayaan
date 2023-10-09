import './App.css';
import CustomNavbar from './NavBar/Navbar';
import Banner from './Banner/banner';
import Wonders from './Wonders/wonders'
import 'bootstrap/dist/css/bootstrap.min.css';
import Animate from './Animate/animate';
import Footer from './Footer/footer';


function App() {
  return (
  <div>
    <CustomNavbar/>
    <Banner/>
    <Wonders/>
    <Animate/>
    <Footer/>
  </div>
  );
}

export default App;
