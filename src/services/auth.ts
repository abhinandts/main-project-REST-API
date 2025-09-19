import { RegisterReq, RegisterRes } from "../dtos/auth.dto.js";
import { UserRepository } from "../repositories/user.js";

const userRepository = new UserRepository();

export class AuthService {
  async registerUser(data: RegisterReq): Promise<RegisterRes> {
    const newUser = await userRepository.create({
      username: data.username,
      email: data.email,
      role: data.role,
      password: data.password,
      isVerified: false,
    });

    return {
      success: true,
      message: "User registered successfully",
      data: {
        id: newUser.id.toString(),
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    };
  }
}
