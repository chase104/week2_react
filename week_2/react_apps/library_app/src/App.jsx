
import './App.css'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom';
import LightSwitch from './pages/LightSwitch';
import NewBook from './pages/NewBook';
import SingleBook from './pages/SingleBook';
import Library from './pages/Library';

function App() {
  return (
    <div id="app-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<LightSwitch />} />
        <Route path="/new" element={<NewBook />} />
        <Route path="/library" element={<Library />} />
        <Route path="/single_book" element={<SingleBook />} />
      </Routes>
    </div>
  )
}
export default App
