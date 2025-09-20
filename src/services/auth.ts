import { RegisterReq, RegisterRes } from "../dtos/auth.dto.js";
import CustomError from "../errors/CustomError.js";
import { IUserRepository } from "../repositories/interfaces/user.js";

export class AuthService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(data: RegisterReq): Promise<RegisterRes> {
    const existingUser = await this.userRepository.findByEmail(data.email);

    if (existingUser) {
      throw new CustomError({
        message: "Email already in use",
        statusCode: 409,
        code: "ERR_VALID",
      });
    }
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
