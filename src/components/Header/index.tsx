import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/images/logo.svg";
import logoMobile from "../../assets/images/shoe.png";
import { Container, Cart } from "./styles";
import { MediaMatcher, ProvideMediaMatchers } from "react-media-match";

import { useCart } from "../../hooks/useCart";

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.reduce((sumTotal, product) => {
    return sumTotal + product.amount;
  }, 0);

  return (
    <ProvideMediaMatchers>
      <Container>
        <MediaMatcher
          mobile={
            <Link to="/">
              <img src={logoMobile} alt="Rocketshoes" className="logo-mobile" />
            </Link>
          }
          desktop={
            <Link to="/">
              <img src={logo} alt="Rocketshoes" />
            </Link>
          }
          tablet={
            <Link to="/">
              <img src={logo} alt="Rocketshoes" />
            </Link>
          }
        />

        <Cart to="/cart">
          <div>
            <strong>Carrinho</strong>
            <span data-testid="cart-size">
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>
    </ProvideMediaMatchers>
  );
};

export default Header;
