import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
        <div class="container">
          <Header/>
            <Outlet/>
          <Footer/>
        </div>
    </>
  )
}

export default App
