// import axios from "axios";
import { config } from "../config/config";
// axios.defaults.baseURL = config.BACKEND_URL;

const restApi = {
  // setAuthToken: (token: string) => {
  //   axios.defaults.headers.common.Authorization = token;
  // },
  sendRequest: async (url: string, data: any) => {
    try {

      const resp = await fetch(`${config.BACKEND_URL}/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return resp;
    } catch (error: any) {
      console.log(error)
    }
  }
}

export { restApi };