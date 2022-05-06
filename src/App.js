import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/Home/AddItem/AddItem';
import GroceryDetails from './pages/Home/GroceryDetails/GroceryDetails';
import Home from './pages/Home/Home';
import ManageInventory from './pages/Home/ManageInventory/ManageInventory';
import Login from './pages/Shared/Login/Login';
import Navbar from './pages/Shared/Navbar/Navbar';
import Register from './pages/Shared/Register/Register';
import RequireAuth from './pages/Shared/RequreAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/grocery-details/:id' element={<RequireAuth>
          <GroceryDetails></GroceryDetails>
        </RequireAuth>}></Route>
        <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/add-item' element={<AddItem></AddItem>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
