"use client";
import { Typography } from "@mui/material";
import Deals from "./components/Deals";
import ServiceInfo from "./components/ServiceInfo";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <ServiceInfo/>
      <Deals/>
      <Typography color="text.secondary">Body</Typography>
    </>
  );
}
