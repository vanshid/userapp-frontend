import axiosInstance from "../../axiosInstance";

const registrationAPI = async (postBody) => {
  const resp = await axiosInstance.post(`/api/register`, postBody);
  const data = resp.data;
  return data;
};

export default registrationAPI;
