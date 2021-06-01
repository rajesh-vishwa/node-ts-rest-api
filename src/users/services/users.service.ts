import UsersDao from "../daos/users.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { CreateUserDto } from "../dto/create.user.dto";
import { PutUserDto } from "../dto/put.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";

class UsersService implements CRUD {
  async list(limit: number, page: number) {
    return UsersDao.getUsers(limit, page);
  }
  async create(resource: CreateUserDto) {
    return UsersDao.addUser(resource);
  }
  async putById(id: string, resource: PutUserDto) {
    // return UsersDao.putUserById(id, resource);
    return UsersDao.updateUserById(id, resource);
  }
  async readById(id: string) {
    return UsersDao.getUserById(id);
  }
  async deleteById(id: string) {
    return UsersDao.removeUserById(id);
  }
  async patchById(id: string, resource: PatchUserDto) {
    //return UsersDao.patchUserById(id, resource);
    return UsersDao.updateUserById(id, resource);
  }

  async getUserByEmail(email: string) {
    return UsersDao.getUserByEmail(email);
  }
}

export default new UsersService();