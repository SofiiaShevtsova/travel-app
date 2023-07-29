class APIRequest {
  #baseURL: string;

  constructor(baseURL: string) {
    this.#baseURL = baseURL;
  }

  getRequest = (url: string): Promise<any> =>
    fetch(this.#baseURL+url, { method: "GET" })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });

  postRequest = (url: string, data: any): Promise<any> =>
    fetch(this.#baseURL+url, { method: "POST", body: JSON.stringify(data) })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });

  patchRequest = (url: string, data: any): Promise<any> =>
    fetch(this.#baseURL+url, { method: "PATCH", body: JSON.stringify(data) })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });

  deleteRequest = (url: string): Promise<any> =>
    fetch(this.#baseURL+url, { method: "DELETE" })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(Error("Failed to load"))
      )
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
}


export const apiRequest = new APIRequest('https://binary-travel-app.xyz/api/v1')