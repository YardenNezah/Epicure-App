import dish from "../models/dish.js";

class dishesHandler {
  static async getDishesHandler() {
    const result = await dish.find();
    return result;
  }

  static async getDishByIdHandler(id: any) {
    const result = await dish.findById(id);
    return result;
  }

  static async createDishHandler(data: any) {
    try {
      const newDish = new dish({ ...data });
      await newDish.save();
      return true;
    } catch (err) {
      return false;
    }
  }

  static async deleteDishHandler(id: any) {
    try {
      await dish.findByIdAndDelete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async updateDishHandler(id: any, document: any) {
    try {
      await dish.findByIdAndUpdate(id, { ...document });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default dishesHandler;
