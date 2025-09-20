import { RegisterReq, RegisterRes } from "../../dtos/auth.dto.js";

export interface IAuthService {
  registerUser(data: RegisterReq): Promise<RegisterRes>;
}
