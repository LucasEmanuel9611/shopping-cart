import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 5px;

  padding: 20px 15px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 30px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media (max-width: 830px) {
      flex-direction: column;
    } */

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
  }
`;

export const ProductTable = styled.table`
  .column-table-area {
    display: flex;
    flex-direction: column;
  }

  .qnt-area-mobile {
    margin-top: 10px;
  }

  .price-total-unique-product {
      font-size: 18px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 8px;
    }

  .price-area-mobile {
    display: flex;
    flex: 1;
    flex-direction: column;

    span {
      margin-top: 18px;
    }

    div {
      display: flex;
      align-self: center;
      margin-top: 30px;
    }

   
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tr {
    /* background-color: red; */
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #7159c1;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, "#7159c1")};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, "#7159c1")};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
