import React from "react";
import Styles from "./Result.module.css";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const Result = ({ results, deleteHandler, editHandler }) => {
  return (
    <div className={Styles.results}>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span className={Styles.icons}>
              <MdOutlineEdit onClick={() => editHandler(item.id)} />
              <MdDeleteOutline onClick={() => deleteHandler(item.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
