import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './body.css';
import './loading.css';
import Home from './views/home'
function App() {
  return (
    <Router>
<Routes>
  <Route path={'/'}  element={<Home/>}/>
</Routes>

    </Router>
  );
}

export default App;
