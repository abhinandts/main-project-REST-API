import User, { IUser } from "../models/user.js";
import { IUserRepository } from "./interfaces/user.js";

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }
  async create(userData: Partial<IUser>): Promise<IUser> {
    return User.create(userData);
  }
}
