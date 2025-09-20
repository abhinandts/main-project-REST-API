import { RegisterReq, RegisterRes } from "../dtos/auth.dto.js";
import { IUserRepository } from "../repositories/interfaces/user.js";

export class AuthService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(data: RegisterReq): Promise<RegisterRes> {
    const newUser = await this.userRepository.create({
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
