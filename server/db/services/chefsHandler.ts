import chef from "../models/chef.js";

class chefsHandler {
  static async getChefsHandler() {
    const result = await chef.find();
    return result;
  }

  static async getChefByIdHandler(id: any) {
    const result = await chef.findById(id);
    return result;
  }

  static async createChefHandler(data: any) {
    try {
      const newChef = new chef({ ...data });
      await newChef.save();
      return true;
    } catch (err) {
      return false;
    }
  }

  static async deleteChefHandler(id: any) {
    try {
      await chef.findByIdAndDelete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async updateChefHandler(id: any, document: any) {
    try {
      await chef.findByIdAndUpdate(id, { ...document });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default chefsHandler;