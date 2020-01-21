export interface UserState {
  isLogined: boolean;
}

export const GET_USER = 'GET_USER';

export interface GetUserAction {
  type: typeof GET_USER;
  payload: UserState;
}

export type UserActionTypes = GetUserAction;
