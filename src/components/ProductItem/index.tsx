import toast from "react-hot-toast";
import Item1 from "../../assets/images/products/item1.png";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductItem = () => {
  return (
    <Card className="w-72">
      <CardHeader color="gray" className="relative h-52">
        <img src={Item1} alt="product" className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <div className="flex sm:flex-row flex-col justify-between gap-2 items-center w-full sm:mt-4 mt-2">
          <Typography variant="h5">$899</Typography>
          <Button
            color="red"
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
