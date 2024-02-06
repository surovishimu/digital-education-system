import About from "./Component/About"
import Alumni from "./Component/Alumni"
import Banner from "./Component/Banner"
import Contact from "./Component/Contact"
import Courses from "./Component/Courses"
import Feature from "./Component/Features"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Teachers from "./Component/Teachers"
import './App.css'
function App() {
  return (
    <div className="font-greatVive">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Courses></Courses>
      <Feature></Feature>
      <Alumni></Alumni>
      <Teachers></Teachers>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
