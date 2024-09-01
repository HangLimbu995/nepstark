import './App.css'
import WritingText from './components/WritingText'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import TopContact from './components/TopContact'
import ScrollProvider from './components/ScrollProvider'

function App() {

  return (
    <ScrollProvider>
      <TopContact />
      <Navbar />
      <Home />
    </ScrollProvider>
  )
}

export default App
