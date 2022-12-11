import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <Button
      onClick={() => {
        toast.success("Hello world!");
      }}
    >
      Add to Cart
    </Button>
  );
};

export default Home;
