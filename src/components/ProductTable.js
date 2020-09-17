import React from "react";
import PropTypes from 'prop-types';


const ProductTable = (props) => {
  return (
    <div>{console.log(props.style)}
      <table>
        <tr style={props.style}>
          <th >name</th>
          <th>category</th>
          <th>price</th>
        </tr>
        {props.arr.map((el) => {
          return (
            <tr>
              <td>{el.name}</td>
              <td>{el.category}</td>
              <td>{el.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

ProductTable.propTypes = {
    arr: PropTypes.array
}

export default ProductTable;
