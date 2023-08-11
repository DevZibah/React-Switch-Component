import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import '../src/style/Global.css'

const App = () => {
  return (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
