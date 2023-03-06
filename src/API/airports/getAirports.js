import axiosInstance from "../../axiosInstance";

const getAirports = async () => {
  const resp = await axiosInstance.get(`/api/get/airport`);
  const data = resp.data;
  return data;
};

export default getAirports;
