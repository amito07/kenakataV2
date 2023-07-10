"use client";
const ServicesCard = ({ item }) => {
  const iconStyle = {
    width: "85px",
    height: "60px",
    padding: "5px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "1px solid",
    borderColor: "#fcba03",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fcba03",
  };

  const infoStyle = {
    marginLeft: "5px",
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={iconStyle}>{item.icon}</div>
        <div style={infoStyle}>
          <div style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</div>
          <div>{item.description}</div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
