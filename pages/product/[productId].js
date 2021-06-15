import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  // const router = useRouter();
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <p>Esta es la página del producto: {productId}</p>
    </div>
  );
};

export default ProductItem;
