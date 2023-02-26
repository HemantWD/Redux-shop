import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
      <Cart />
    </div>
  );
}

export default App;
