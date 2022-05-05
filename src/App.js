import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/Home/AddItem/AddItem';
import GroceryDetails from './pages/Home/GroceryDetails/GroceryDetails';
import Home from './pages/Home/Home';
import ManageInventory from './pages/Home/ManageInventory/ManageInventory';
import Navbar from './pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/grocery-details/:id' element={<GroceryDetails></GroceryDetails>}></Route>
        <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/add-item' element={<AddItem></AddItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
