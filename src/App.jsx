import Read from './components/Read'
import Create from './components/Create'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from './components/UserDetails';




function App() {

  return (
    <div className='m-3 p-3'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Read />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/user" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
