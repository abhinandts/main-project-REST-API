import { IUser } from "../../models/user.js";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  create(userData: Partial<IUser>): Promise<IUser>;
}
