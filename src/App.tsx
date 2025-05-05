import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page from '../src/components/trending-repos/page';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/page/trending-repos">Trending Repos</Link>
        </nav>
        <Routes>
          <Route path="/page/trending-repos" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
