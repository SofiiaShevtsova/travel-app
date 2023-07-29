import { constants } from "../commons/constants";

class APIRequest {
  #baseURL: string;
  #token: string;

  constructor(baseURL: string) {
    this.#baseURL = baseURL;
    this.#token = "";
  }

  setToken(token: string) {
    this.#token = token;
  }

  checkToken() {
    if (this.#token) {
      return { headers: { Authorization: "Bearer" + this.#token } };
    }
  }

  getRequest(url: string): Promise<any> {
    return fetch(this.#baseURL + url, { method: "GET", ...this.checkToken() })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  }

  postRequest(url: string, data: any): Promise<any> {
    return fetch(this.#baseURL + url, {
      method: "POST",
      ...this.checkToken(),
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  }

  patchRequest(url: string, data: any): Promise<any> {
    return fetch(this.#baseURL + url, {
      method: "PATCH",
      ...this.checkToken(),
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  }

  deleteRequest(url: string): Promise<any> {
    const deleteUser = fetch(this.#baseURL + url, {
      method: "DELETE",
      ...this.checkToken(),
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
    this.setToken("");
    return deleteUser;
  }
}

export const apiRequest = new APIRequest(constants.REQUEST_API.BASE_URL);
