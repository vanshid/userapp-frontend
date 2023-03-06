import axiosInstance from "../../axiosInstance";

const getUserDetails = async (postBody) => {
  const resp = await axiosInstance.get(`/api/user`, postBody);
  const data = resp.data;
  return data;
};

export default getUserDetails;
