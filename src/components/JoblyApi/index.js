import axios from "axios";

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = // for now, hardcode token for "testing"
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U";

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (
        await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData,
        })
      ).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await axios.get(`http://localhost:3001/companies/${handle}`, {
      params: {
        _token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MDIzMjcyNzZ9.vKVkrmRvQ_ec2szEvWao2wI2ld2fHgJVBfWWbzBEpd8",
      },
    });
    return res.data.company;
  }
  static async getCompanies() {
    let res = await axios.get("http://localhost:3001/companies", {
      params: {
        _token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2MDIzMjcyNzZ9.vKVkrmRvQ_ec2szEvWao2wI2ld2fHgJVBfWWbzBEpd8",
      },
    });

    return res.data.companies;
  }
  static async getJobs(handle) {
    let res = await this.request(`jobs/${handle}`);
    return res.jobs;
  }
  static async getUsers(handle) {
    let res = await this.request(`users/${handle}`);
    return res.users;
  }
}

export default JoblyApi;
