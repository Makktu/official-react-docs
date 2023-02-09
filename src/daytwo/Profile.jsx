// import "./Profile.css";

const Profile = () => {
  // * _______TOP______
  const imgStyle = {
    borderRadius: "50px",
    width: "400px",
    margin: "10px",
  };

  return (
    <>
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg"
        alt="Franz Kafka"
      />
    </>
  );
};

export default Profile;
