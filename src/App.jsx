import {Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';
import ContactList from './Components/ContactList';
import LandingPage from './Components/LandingPage';
import AddContact from './Components/AddContact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/contactlist' element={<ContactList/>}/>
        <Route path='/addContact' element={<AddContact/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
