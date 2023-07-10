"use client";
import { Typography } from "@mui/material";
import ServiceInfo from "./components/ServiceInfo";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <ServiceInfo/>
      <Typography color="text.secondary">Body</Typography>
    </>
  );
}
