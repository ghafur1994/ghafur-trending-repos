import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page from '../src/components/trending-repos/page';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
  <div>
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Abdul Ghafur Interview Project</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/page/trending-repos" className="nav-link">Trending Repos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/page/trending-repos" element={<Page />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>
   
  );
}

export default App;
