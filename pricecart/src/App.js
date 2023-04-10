
import './App.css';
import Cart from './cartfiles/Cart.jsx';


var data = [
     {name : 'FREE',price:'$0',benefits:['single user','5gb storage','Unlimited Public Projects','Community Access'],missed : ['Unlimited Private Projects','Dedicated Phone Support','Free Subdomain','Monthly Status Reports']},
     {name : 'PLUS',price:'$9',benefits:['5 users','50gb storage','Unlimited Public Projects','Community Access','Unlimited Private Projects','Dedicated Phone Support','Free Subdomain'],missed : ['Monthly Status Reports']},
     {name : 'PRO',price:'$49',benefits:['unlimited users','150gb storage','Unlimited Public Projects','Community Access','Unlimited Private Projects','Dedicated Phone Support','Free Subdomain','Monthly Status Reports'],missed : []},

  
]

function App() {
  return (
    <div className="App">
     {data.map((lists) => {
      return(
        <Cart
        name = {lists.name}
        price = {lists.price}
        benefits = {lists.benefits}
        missed = {lists.missed}
        key = {lists.name}
        />
      )
     })}
      
    </div>
  );
}

export default App;
