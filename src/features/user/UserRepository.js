import db from '../../config/DBConfig.js'
import userSchema from './UserSchema.js';

const User = db.model("User", userSchema);

class UserRepository {
  async createUser(user) {
    return await User.create(user);
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default UserRepository;