import axios from "axios";
import { IProduct } from "../types";

export const getProductAll = async (): Promise<Array<IProduct> | undefined> => {
  try {
    const res = await axios.get("http://localhost:8000/api/product");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
