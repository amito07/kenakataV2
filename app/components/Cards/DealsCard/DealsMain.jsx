import { Grid } from "@mui/material";
import DealsSub from "./DealsSub";

const CardStyle = {
  backgroundColor: "#F9F9F9",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
};

const subDivStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const subDivStyle2 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

const iconColor = {
  fontSize: "2rem",
  color: "#FF8206",
};

const titleStyle = {
  marginLeft: "10px",
  fontWeight: "bold",
  fontSize:"1.5rem"

};

const DealsMain = ({icon, title}) => {
  return (
    <Grid container sx={CardStyle}>
      <div style={subDivStyle}>
        <div style={iconColor}>
          {icon}
        </div>
        <div style={titleStyle}>
          {title}
        </div>
      </div>
      <div style={subDivStyle2}>
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
