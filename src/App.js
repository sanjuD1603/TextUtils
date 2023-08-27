import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
<>

<Navbar title = "TextUtils" aboutText= "About Textutils"  homeText = "Home"/>
<div className='container my-3' >
<TextForm  heading = " Enter the below information "/>
</div>

</>
  );
}

export default App;
