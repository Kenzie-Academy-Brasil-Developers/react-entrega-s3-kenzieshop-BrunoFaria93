import React, { useEffect, useState } from "react";
import formatValue from "../../utils/formatValue";
import { CircularProgress } from "@mui/material";
import { Container, ProductList } from "./styles";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import api from "../../services/api";

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    
  async function loadProducts() {
    const response = await api.get("/products/");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));

    setLoading(false);
    setProducts(data);
  }
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      {loading ? (
          <div className='loading'>
                <CircularProgress size={50} />
          </div>
      ) : (
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.title}</strong>
              <div>
                <span>{product.priceFormatted}</span>
                <button
                  type="button"
                  onClick={() => dispatch(addToCartThunk(product))}
                >
                  <span>Adicionar ao carrinho</span>
                </button>
              </div>
            </li>
          ))}
        </ProductList>
      )}
    </Container>
  );
}
export default Home;
