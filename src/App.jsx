import React from 'react'
import SidebarComponent from './component/SidebarComponent'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import DashboardPage from './pages/DashboardPage';


const App = () => {
  return (
    <div className='app'>
      <Router>
        <div className='app-container'>
          <SidebarComponent />
          <div className='content'></div>
          <Routes>
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='' element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
      </div>
  )
}

export default App