import { constants } from '../commons/constants';

class APIRequest {
   #baseURL: string;
   #token: string;

   constructor(baseURL: string) {
      this.#baseURL = baseURL;
      this.#token = '';
   }

   setToken(token: string) {
      this.#token = token;
   }

   checkToken() {
      if (this.#token !== '') {
         return {
            Authorization:
               'Bearer ' + this.#token,
         };
      }
   }

   getRequest = (url: string): Promise<any> =>
      fetch(this.#baseURL + url, {
         method: 'GET',
         headers: {
            ...this.checkToken(),
         },
      })
         .then((response) =>
            response.ok
               ? response.json()
               : Promise.reject(response),
         )
         .then((data) => data)
         .catch((error) => {
            throw error;
         });

   postRequest = (
      url: string,
      data?: any,
   ): Promise<any> =>
      fetch(this.#baseURL + url, {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json',
            ...this.checkToken(),
         },
      })
         .then((response) =>
            response.ok
               ? response.json()
               : Promise.reject(response),
         )
         .then((data) => data)
         .catch((error) => {
            throw error;
         });

   patchRequest = (
      url: string,
      data: any,
   ): Promise<any> =>
      fetch(this.#baseURL + url, {
         method: 'PATCH',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json',
            ...this.checkToken(),
         },
      })
         .then((response) =>
            response.ok
               ? response.json()
               : Promise.reject(response),
         )
         .then((data) => data)
         .catch((error) => {
            throw error;
         });

   deleteRequest = (url: string): Promise<any> =>
      fetch(this.#baseURL + url, {
         method: 'DELETE',
         headers: {
            ...this.checkToken(),
         },
      })
         .then((response) =>
            response.ok
               ? response.json()
               : Promise.reject(response),
         )
         .then((data) => data)
         .catch((error) => {
            throw error;
         });
}

export const apiRequest = new APIRequest(
   constants.REQUEST_API.BASE_URL,
);
