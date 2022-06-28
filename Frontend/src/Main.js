//In the name of Allah
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './Main.css'
import Menu from './Menu';
import Form from './Pages/Form';
import AddProductForm from './Pages/AddNewProduct';
import EditProductForm from './Pages/EditNewProduct';
import Transactions from './Pages/Transactions';

export default function Main(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/' element={<Form/>}/>
                <Route path='/product/add' element={<AddProductForm/>}/>
                <Route path='/product/edit' element={<EditProductForm/>}/>
                <Route path='/transaction/get' element={<Transactions/>}/>
            </Routes>
        </BrowserRouter>
    );
}//func