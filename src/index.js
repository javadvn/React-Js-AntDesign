import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import AppOrders from './AppOrders';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
            <AppOrders/>
        </BrowserRouter>



);