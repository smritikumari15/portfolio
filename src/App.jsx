
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Last from  './Component/Last'
import First from  './Component/First'
import LaptopBtn from './Component/LaptopBtn'
import About from './Component/About'
import Top from './Component/Top'
import Resume from './Component/Resume'

function App() {


  return (
    <>
    <div className=''>
<Navbar />

<div className='sm:flex sm:gap-3 s'>
  <First />
  <div className='sm:flex sm:flex-col  sm:items-end sm:p-5'>
  <LaptopBtn />
  <About />
  {/* <Resume /> */}
  </div>

</div>

</div>
    </>
  )
}

export default App
