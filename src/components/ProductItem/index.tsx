import toast from "react-hot-toast";
import Item1 from "../../assets/products/item1.png";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductItem = () => {
  return (
    <Card className="w-96">
      <CardHeader color="gray" className="relative h-70">
        <img src={Item1} alt="img-blur-shadow" className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <div className="flex flex-row justify-between items-center w-full mt-5">
          <Typography variant="medium">$899</Typography>
          <Button
            onClick={() => {
              toast.success("Added to cart");
            }}
          >
            Add to Cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
