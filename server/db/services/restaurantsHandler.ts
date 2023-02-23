import restaurant from "../models/restaurant.js";

class restaurantsHandler {
  static async getRestaurantsHandler() {
    const result = await restaurant.find().limit(6);
    return result;
  }

  static async filterRestaurantsHandler(filter: any) {
    const date = new Date();
    const now: any = date.getHours()+'00';
    if (filter === "new")
      return await restaurant.find({ isNewRestaurant: true }).limit(6);
    if (filter === "popular") {     
      return await restaurant.find({ isPopular: true }).limit(6);
    }
    if (filter === "open") {
      const open: any = await restaurant.find({closingHour: {$gte: now}});
      return await open;
    }
    if(!filter) {
      filter = "all";
    }
  }

  static async getRestaurantByIdHandler(_id: any) {
    const result = await restaurant.findById(_id);
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
