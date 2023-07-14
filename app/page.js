"use client";
import { Grid } from "@mui/material";
import Deals from "./components/Deals";
import ProductCard from "./components/ProductCard/ProductCard";
import ServiceInfo from "./components/ServiceInfo";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <ServiceInfo />
      <Deals />
      <Grid container>
        {[1, 2, 3, 4].map((el) => (
          <Grid item sx={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
