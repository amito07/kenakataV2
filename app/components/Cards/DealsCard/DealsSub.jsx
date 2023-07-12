import Image from "next/image";
const cardStyle = {
  background: "rgb(255,255,255)",
  background:
    "linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 4%, rgba(213,213,213,1) 100%)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  width:"95%",
  height: "30vh",
  borderRadius:'5px'
};
const DealsSub = () => {
  return (
    <div style={cardStyle}>
      <div>
        Play Station 4 Game Pro <br /> $586{" "}
      </div>
      <div>
        <Image src='/assets/images/product1.png' width={150} height={150}/>
      </div>
    </div>
  );
};

export default DealsSub;
