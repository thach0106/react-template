export interface AppState {
  currentUser: User | null;
  loading: {
    count: number;
    isLoading: boolean;
  };
}

export interface User {
  isLogin: boolean;
  data: null;
}
