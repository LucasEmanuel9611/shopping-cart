import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";
import { api } from "../../services/api";
// import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  sumAmount: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  function itemsInCart(id: number) {
    let total = 0
    cart.map((product) => {
      if (id === product.id) {
        total = product.amount;
      }
    });

    if(total ===0){
      return ''
    }
    return total
  }

  useEffect(() => {
    async function loadProducts() {
      // TODO
      api
        .get("/products")
        .then((e) => setProducts(e.data))
        .catch((err) => console.log(err.response.data));
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    const cartAmount = itemsInCart(id)

    if(cartAmount > 0){
    toast.error("Produto já presente no carrinho");
      return
    }

    toast.success("Produto adicionado com sucesso");
    addProduct(id);
  }

  return (
    <ProductList>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <img src={product.image} />
            <strong>{product.title}</strong>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => handleAddProduct(product.id)}
            >
              <div data-testid="cart-product-quantity" className="button-add-cart-home">
                <MdAddShoppingCart size={16} color="#FFF" />
                {itemsInCart(product.id)}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        );
      })}
    </ProductList>
  );
};

export default Home;
