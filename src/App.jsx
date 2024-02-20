// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <header className="text-white py-1 fixed-top">
        <div className="container">
        {/* <img src="" alt="logo" style={{ maxWidth: '20%' }} />  */}
        </div>
        <Nav />
      </header>   
      <main>
        <Outlet />
      </main>
      <div id="footer" className="py-4 fixed-bottom margin-right"><strong>© 2024</strong>
      </div>
    </div>
  );
}

export default App;