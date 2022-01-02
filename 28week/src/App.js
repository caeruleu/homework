import './App.scss';
import Rate from './Rate'

const rates = [
  {
    title: 'Безлимитный 300',
    price: 300,
    speed: 10,
    id: 'limitless300'
  }, {
    title: 'Безлимитный 450',
    price: 450,
    speed: 50,
    id: 'limitless450'
  }, {
    title: 'Безлимитный 550',
    price: 550,
    speed: 100,
    id: 'limitless550'
  }, {
    title: 'Безлимитный 1000',
    price: 1000,
    speed: 200,
    id: 'limitless1000',
  }
]

function App() {
  return (
    <div className="App">
      {rates.map((rate) => <Rate 
      title = {rate.title}
      price = {rate.price}
      speed = {rate.speed}
      id = {rate.id}
      />)}
    </div>
  );
}

export default App;
