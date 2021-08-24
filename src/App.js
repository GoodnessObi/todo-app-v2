import './App.scss';
import Buttons from './components/layout/Buttons';
import AddItemForm from './components/list/AddItemForm';
import List from './components/list/List';

const  App = () => {
  return (
    <div className='container'>
      <h1>My To-Do List</h1>
      <AddItemForm />
      <div className='display-container'>
        <List />
        <Buttons />
      </div>
      <p>get doing ...</p>
    </div>
  );
}

export default App;
