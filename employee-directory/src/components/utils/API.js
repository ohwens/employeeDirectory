import axios from "axios";

export default {
  randomUser: () => {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }

};
