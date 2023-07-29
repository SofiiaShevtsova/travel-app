import { User } from "../../commons/types";

export const getUser = (state: any):User|null => state.auth.user;
export const getIsUserFetching = (state:any):boolean => state.auth.isUserFetching;