import React from "react";
import AddUserForm from "../../FormComponent/AirportForm/AddAirport";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import createAirportApi from "../../../API/airports/createAirport.js";

const CreateAirports = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  const submitProfile = async (values, setSubmitting) => {
    try {
      const resp = await createAirportApi(values);
      if (resp) {
        addToast("Logged In Successfully", {
          appearance: "success",
          autoDismiss: 500,
        });
        history.push("/get-airports");
      }

      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
      addToast("Error while creating Airport", {
        appearance: "error",
        autoDismiss: 500,
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          minWidth: "400px",
          maxWidth: "400px",
          marginTop: "40px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginTop: "2vh",
            marginBottom: "3vh",
          }}
        >
          CREATE AIRPORTS
        </h3>
        <AddUserForm onSubmit={submitProfile} />
      </div>
    </div>
  );
};
export default CreateAirports;
