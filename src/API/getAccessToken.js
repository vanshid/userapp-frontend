import axiosInstance from "../axiosInstance";

const getAccessToken = async (value) => {
  const resp = await axiosInstance.post(`/api/access-token`, {
    refresh_token: value,
  });
  const data = resp.data;
  return data;
};

export default getAccessToken;
