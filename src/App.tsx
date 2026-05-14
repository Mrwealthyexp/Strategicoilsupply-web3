import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Domains from './pages/Domains'
import Register from './pages/Register'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  )
}
