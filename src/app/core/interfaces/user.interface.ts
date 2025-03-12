import { UserRoleEnum } from "../enums/user-role.enum";

export interface UserEntity {
  name: string,
  email: string,
  role: UserRoleEnum,
}
