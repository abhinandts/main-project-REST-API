export interface RegisterReq {
  username: string;
  email: string;
  password: string;
  role: "artist" | "listener";
}

export interface RegisterRes {
  success: boolean;
  message: string;
  data: {
    id: string;
    username: string;
    email: string;
    role: "artist" | "listener";
  };
}
