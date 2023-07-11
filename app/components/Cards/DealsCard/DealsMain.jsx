import { Grid } from "@mui/material";
import DealsSub from "./DealsSub";

const CardStyle = {
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
};

const subDivStyle = {
    display: "flex",
    flexDirection: "row"
}

const DealsMain = () => {
  return (
    <Grid container sx={CardStyle}>
      <div style={subDivStyle}>
        <div>Icon</div>
        <div style={{ marginLeft: "10px" }}>Flash Deals</div>
      </div>
      <div style={subDivStyle}>
        <Grid item sx={12} sm={6} md={4}>
          <DealsSub />
        </Grid>
        <Grid item sx={12} sm={6} md={4}>
          <DealsSub />
        </Grid>
        <Grid item sx={12} sm={6} md={4}>
          <DealsSub />
        </Grid>
      </div>
    </Grid>
  );
};

export default DealsMain;
