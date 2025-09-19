import { RegisterReq } from "../dtos/auth.dto.js";
import CustomError from "../errors/CustomError.js";

export function validateRegisterDTO(body: unknown): RegisterReq {
  if (!body || typeof body !== "object") {
    throw new CustomError({
      message: "Invalid request body",
      statusCode: 400,
      code: "ERR_VALID",
    });
  }

  // const { username, email, password, role } = body as Record<string, unknown>;

  const data = body as { [key: string]: unknown };

  const username = data.username;
  const email = data.email;
  const password = data.password;
  const role = data.role;

  if (!username || typeof username !== "string" || username.trim().length < 3) {
    throw new CustomError({
      message: "Invalid username (min 3 chars required)",
      statusCode: 400,
      code: "ERR_VALID",
    });
  }

  if (
    !email ||
    typeof email !== "string" ||
    !email.includes("@") ||
    email.length < 6
  ) {
    throw new CustomError({
      message: "Invalid email address",
      statusCode: 400,
      code: "ERR_VALID",
    });
  }

  if (!password || typeof password !== "string" || password.length < 6) {
    throw new CustomError({
      message: "Password must be at least 6 characters long",
      statusCode: 400,
      code: "ERR_VALID",
    });
  }

  const validRoles: RegisterReq["role"][] = ["artist", "listener"];

  if (
    !role ||
    typeof role !== "string" ||
    !validRoles.includes(role as RegisterReq["role"])
  ) {
    throw new CustomError({
      message: "Invalid role (must be 'artist' or 'listener')",
      statusCode: 400,
      code: "ERR_VALID",
    });
  }

  return {
    username: username.trim(),
    email: email.trim(),
    password,
    role: role as RegisterReq["role"],
  };
}
