import { Provider, useSelector } from 'react-redux'
import './App.css'
import Login from './components/pages/Login'
import { RootState, store } from './stores'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import CreateProduct from './components/pages/products/CreateProduct'
import ProductList from './components/pages/products/ProductList'

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.staff.isLoggedIn)

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />

          <Route path="/products" element={isLoggedIn ? <ProductList /> : <Navigate to="/" />} />
          <Route path="/products/create" element={isLoggedIn ? <CreateProduct /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
