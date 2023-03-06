import axiosInstance from "../../axiosInstance";

const loginAPI = async (postBody) => {
  const resp = await axiosInstance.post(`/api/login`, postBody);
  const data = resp.data;
  return data;
};

export default loginAPI;
