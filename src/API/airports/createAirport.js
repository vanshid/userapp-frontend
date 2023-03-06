import axiosInstance from "../../axiosInstance";

const createAirportApi = async (postBody) => {
  const resp = await axiosInstance.post(`/api/add/airport`, postBody);
  const data = resp.data;
  return data;
};

export default createAirportApi;
