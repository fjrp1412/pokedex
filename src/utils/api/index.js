import axios from "axios";

const BASE_INSTANCE = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const GET = async ({ url, query }) => {
  try {
    const response = await BASE_INSTANCE.get(url, {
      params: query,
    });
    if (response.status !== 200) {
      throw new Error("Request error");
    }
    return { data: response.data, errors: null, status: response.status };
  } catch (e) {
    console.log(e);
    return {
      data: e.response.data,
      errors: e.message,
      status: e.response.status,
    };
  }
};

export { GET };
