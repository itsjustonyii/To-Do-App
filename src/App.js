
import './App.css';
import Header from './components/Header';
import Form from "./components/Form";

const App = () => {
  
return(<div className='main'>
  <div className='sub-main'>
    <div>
      <Header/>
    </div>
    <div>
      <Form/>
    </div>
  </div>
</div>);
}

export default App;
