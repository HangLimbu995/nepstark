import './App.css'
import WritingText from './components/WritingText'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import TopContact from './components/TopContact'
import ScrollProvider from './components/ScrollProvider'
import Test from './pages/Test'

function App() {

  return (
    <div className='w-full h-full overflow-hidden'>
    <TopContact />
    <Navbar />
        <Home />
    </div>
  )
}

export default App
