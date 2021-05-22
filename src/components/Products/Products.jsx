import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Zapatillas",
    description: "Running shoes",
    price: 10,
    image:
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook PRO",
    price: 1500,
    image:
      "https://i.blogs.es/67b0e2/analisis-macbook-pro-13-2020-applesfera-06/450_1000.jpg",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
