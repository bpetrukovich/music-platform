import { API_URL } from "@/utils/constants";
import axios from "axios";

export interface TrackData {
  file: null;
  name: string;
  author: string;
  album: string;
}

export async function postTrack(trackData: TrackData) {
  const url = API_URL + "/tracks/";
  try {
    const response = await axios.post(url, trackData);
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
}
