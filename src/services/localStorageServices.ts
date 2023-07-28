class LocalStorageService {
  #token: string = '';

  USER_TOKEN: string = "user-token";

  getUserFromLocal():void {
    const chekedLocal = localStorage.getItem(this.USER_TOKEN);
    if (chekedLocal) {
      const user = JSON.parse(chekedLocal);
      this.#token = user;
      return user;
    }
  }

  setUserToLocal(token:string):void {
    this.#token = token;
    localStorage.setItem(this.USER_TOKEN, this.#token);
  }

  clearLocal() {
    this.#token = '';
    localStorage.setItem(this.USER_TOKEN, this.#token);
  }
}

export const lokalStorageServices = new LocalStorageService()