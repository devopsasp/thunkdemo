import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { incrementAsync,getdataasync } from './actions/messageaction';
function App() {
  const message=useSelector((state)=>{
    return state
  })
  const dispatch=useDispatch()
  return (
    <div className="App">
        <button onClick={()=>{
  dispatch(incrementAsync())
        }}>
           Send Request
        </button>
        <br/>
         {message.map((e)=><li>{e.title} {e.body}</li>)}

         <button
          
            onClick={()=>{
              dispatch(getdataasync())
            }}
         
         >Data</button>
    </div>
  );
}

export default App;
