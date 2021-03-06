import styled from "styled-components";
import { darken } from "polished";

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5px;
  justify-content: center;
  overflow: hidden;
  max-width: 100%;

  @media (max-width: 418px) {
    justify-content: center;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 30px 10px 30px 10px;
    padding: 20px;
    min-width: 200px;
    width: 23%;

    @media (max-width: 830px) {
      min-width: 170px;
    }

    img {
      align-self: center;
      max-width: 100%;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
