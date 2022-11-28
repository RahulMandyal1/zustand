import { useState, useEffect } from "react";
import "./App.css";
import useProductsStore from "./store/store";

const App = () => {
  const [count, setCount] = useState(0);
  const { products, fetchProducts } = useProductsStore((state) => state);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products.error.message) return <h3> {products.error.message}</h3>;
  if (products.isLoading) return <h1> data is loading .....</h1>;

  return (
    <div className="App">
      {products.data &&
        products.data.map((product: any) => {
          return <div key={product.id}>{<h4>{product.title}</h4>}</div>;
        })}
    </div>
  );
};

export default App;
