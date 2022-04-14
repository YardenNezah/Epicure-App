import restaurant from "../models/restaurant.js";

class restaurantsHandler {
  static async getRestaurantsHandler() {
    const result = await restaurant.find();
    return result;
  }

  static async getRestaurantByIdHandler(id: any) {
    const result = await restaurant.findById(id);
    return result;
  }

  static async createRestaurantHandler(data: any) {
    try {
      const newRestaurant = new restaurant({ ...data });
      await newRestaurant.save();
      return true;
    } catch (err) {
      return false;
    }
  }

  static async deleteRestaurantHandler(id: any) {
    try {
      await restaurant.findByIdAndDelete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async updateRestaurantHandler(id: any, document: any) {
    try {
      await restaurant.findByIdAndUpdate(id, { ...document });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default restaurantsHandler;