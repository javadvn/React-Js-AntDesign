import { Link, Route, Routes } from "react-router-dom"
import HomePage from "./Lessons/lesson-4 router/HomePage"
import AboutPage from "./Lessons/lesson-4 router/AboutPage"
import ContactPage from "./Lessons/lesson-4 router/ContactPage"
import NotFoundPage from "./Lessons/lesson-4 router/NotFoundPage"
import ProductPage from "./Lessons/lesson-4 router/ProductPage"
import ProductDetail from "./Lessons/lesson-4 router/ProductDetail"
import Login from "./Lessons/lesson-4 router/Login"
import Auth from "./Lessons/lesson-4 router/Auth"




function App() {

  let loginControl = localStorage.getItem('login');



  return <>
    <h1>Site Header</h1>
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/antd'>Antd</Link></li>
        <li><Link to='/anttable'>Antd</Link></li>


      </ul>
    </div>
    <Routes>

      <Route path="/" element={<HomePage />}></Route>


      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/contact" element={loginControl ? <ContactPage/> : <Login/>}></Route>

      <Route path="/products" element={
        <Auth>
          <ProductPage />
        </Auth>
      
      }></Route>
      <Route path="/products/:id" element={
        <Auth>
          <ProductDetail />
        </Auth>
      }></Route>

      
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
    <h1>Site Footer</h1>
  </>
}

export default App