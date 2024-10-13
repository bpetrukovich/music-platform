import { API_URL } from "@/utils/constants";
import axios from "axios";

export async function postTrack(trackData: FormData) {
  const url = API_URL + "/tracks/";
  try {
    const response = await axios.post(url, trackData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}
