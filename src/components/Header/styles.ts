import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  .logo-mobile{
    width: 40%;
  }

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  padding-right: 10px;
  padding-left: 10px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      margin-top: 5px;
      font-size: 18px;
      color: #fff;

      @media (max-width: 412px) {
        display: none;
      }
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
