import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";
import { MediaMatcher, ProvideMediaMatchers } from "react-media-match";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }));

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount -1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <ProvideMediaMatchers>
      <Container>
        <ProductTable>
          <tbody>
            <MediaMatcher

              mobile={cartFormatted.map((product) => (
                <tr data-testid="product">
                  <td>
                    <div className="column-table-area">
                      <strong>{product.title}</strong>

                      <img src={product.image} alt="image produto" />
                      <span className="price-total-unique-product">
                        {product.priceFormatted}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="column-table-area price-area-mobile">
                      <div>
                        <strong className="price-total-unique-product">
                          {product.subTotal}
                        </strong>

                        <button
                          type="button"
                          data-testid="remove-product"
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          <MdDelete size={20} />
                        </button>
                      </div>
                      <div className="qnt-area-mobile">
                        <button
                          type="button"
                          data-testid="decrement-product"
                          disabled={product.amount <= 1}
                          onClick={() => handleProductDecrement(product)}
                        >
                          <MdRemoveCircleOutline size={20} />
                        </button>
                        <input
                          type="text"
                          data-testid="product-amount"
                          readOnly
                          value={2}
                        />
                        <button
                          type="button"
                          data-testid="increment-product"
                          onClick={() => handleProductIncrement(product)}
                        >
                          <MdAddCircleOutline size={20} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

              desktop={cartFormatted.map((product) => (
                <tr data-testid="product">
                  <td>
                    <img src={product.image} alt="image produto" />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>

                  <td>
                    <div>
                      <button
                        type="button"
                        data-testid="decrement-product"
                        disabled={product.amount <= 1}
                        onClick={() => handleProductDecrement(product)}
                      >
                        <MdRemoveCircleOutline size={20} />
                      </button>
                      <input
                        type="text"
                        data-testid="product-amount"
                        readOnly
                        value={product.amount}
                      />
                      <button
                        type="button"
                        data-testid="increment-product"
                        onClick={() => handleProductIncrement(product)}
                      >
                        <MdAddCircleOutline size={20} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <div>
                      <strong className="price-total-unique-product">
                       {product.subTotal}
                      </strong>

                      <button
                        type="button"
                        data-testid="remove-product"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <MdDelete size={30} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            />
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Container>
    </ProvideMediaMatchers>
  );
};

export default Cart;
