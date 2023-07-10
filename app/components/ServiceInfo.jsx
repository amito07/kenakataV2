"use client";
import { ServiceInformation } from "@/utils/Basic/ServiceInfo";
import { Grid } from "@mui/material";
import ServicesCard from "./Cards/ServicesCard";

const ServiceInfo = () => {
  const serviceStyle = {
    background: '#e3e3e3',
    padding:"30px 10px 30px 10px"
  }
  return (
    <Grid container spacing={2} sx={serviceStyle}>
      {ServiceInformation.map((e, index) => (
        <Grid xs={12} sm={6} md={3} item key={index}>
          <ServicesCard key={index} item={e} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceInfo;
