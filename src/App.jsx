import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <main className="bg-slate-300/20">  {/*Navbar background colour*/}
<Router>
    <Navbar /> 
    <Routes> {/*Different options to navigate between*/}
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
    </Routes>
</Router>

        </main>
    )
}

export default App
