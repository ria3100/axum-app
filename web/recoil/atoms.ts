import {atom} from 'recoil';
import {User} from '../apis/@types';

type Initial = {
  isLoading: boolean;
  userData?: User;
  uid?: string;
  authToken?: string;
};
const inital = {isLoading: false};

export const currentUserState = atom<Initial>({
  key: 'currentUser',
  default: inital,
});
