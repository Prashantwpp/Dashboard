import './App.css';
import { SignIn } from './pages/Login/SignIn';
import Navbar from './pages/Navbar/Navbar';
import { AllRoutes } from './pages/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
