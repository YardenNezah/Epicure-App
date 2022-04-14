import mongoose from "mongoose";
import chef from "./models/chef.js";
import dish from "./models/dish.js";
import restaurant from "./models/restaurant.js";

const dbInit = async () => {
  const chefCount = await chef.countDocuments();
  const dishCount = await dish.countDocuments();
  const restaurantCount = await restaurant.countDocuments();

  const restaurantImages:any = {
    claro: "https://i.ibb.co/k6n0kBN/claro.png",
    desktopClaro: "https://i.ibb.co/k6n0kBN/claro.png",
    bigClaro: "https://i.ibb.co/JBjqPBF/bigClaro.png",
    lumina: "https://i.ibb.co/NxM6h6G/mizlala-gret-mullet-fillet.png",
    desktopLumina:
      "https://i.ibb.co/grpCC4G/mizlala-gret-mullet-fillet-desktop.png",
    bigLumina: "https://i.ibb.co/fv1cd9j/big-Lumina.png",
    tiger: "https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
    desktopTiger: "https://i.ibb.co/pzsnMrz/tiger-lili.png",
    bigTiger: "https://i.ibb.co/7YjHw5F/big-Tigerlili.png",
    onza: "https://i.ibb.co/nMFVjvX/screen-shot-2019-01-06-at-10-55-45.png",
    bigOnza: "https://i.ibb.co/LJJtrps/bigOnza.png",
    kitchen: "https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
    mashya: "https://i.ibb.co/prWLzj9/mashya.png",
    bigMashya: "https://i.ibb.co/PDgHQzX/big-Mashya.png",
  };
  const dishImages:any = {
    garbanzo: "https://i.ibb.co/JFZ6xC2/rectangle-3.png",
    desktopGarbanzo: "https://i.ibb.co/NNvmk03/garbanzo-Desktop.png",
    padKimao: "https://i.ibb.co/NxM6h6G/mizlala-gret-mullet-fillet.png",
    desktopPadKimao: "https://i.ibb.co/71PTfqj/padkimao-Desktop.png",
    pizza: "https://i.ibb.co/VNB2476/screen-shot-2019-01-06-at-10-57-26.png",
    desktopPizza: "https://i.ibb.co/S7fz224/pizza-Desktop.png",
    fish: "https://i.ibb.co/YWpxh3Q/screen-shot-2019-01-06-at-10-55-45-2x.png",
  };
  const icons:any = {
    spicy: "https://i.ibb.co/5FPS0NV/group-2.png",
    spicyDekstop: "https://i.ibb.co/ns4DL2R/spicy-Desktop.png",
    vegan: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
    veganDesktop: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
    vegiterian: "https://i.ibb.co/vwGsDJ8/vegiterian-icon.png",
    vegiterianDesktop: "https://i.ibb.co/7JJQMKQ/vegetarian-Desktop.png",
  };
  const chefsImages:any= {
    yossi: "https://i.ibb.co/KXj8k3Z/rectangle.png",
    ran: "https://i.ibb.co/QnkcsMp/ran.jpg", 
    yanir: "https://i.ibb.co/J7bGzS2/maxresdefault.jpg", 
    meir: "https://i.ibb.co/D5nyxLX/mair.jpg",
    yariv: "https://images1.ynet.co.il/PicServer4/2016/02/18/6827088/68270771493457490489no.jpg",
    aviv: "https://www.israel21c.org/wp-content/uploads/2012/09/aviv-moshe.jpg",
    shahaf: "data:image/jpeg;base64,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",
    yuval: "https://www.israelhayom.co.il/wp-content/uploads/2021/11/01/-%D7%91%D7%9F-%D7%A0%D7%A8%D7%99%D7%94-%D7%90%D7%A1%D7%A3-%D7%A7%D7%A8%D7%9C%D7%94-e1635782045839-960x640.jpg",
    assaf: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprodmigration%2Fweb%2Fbin%2F9e74a386-e1a6-4ad5-abb9-4d4aab31eb3d.jpg?crop=1500%2C1000%2C0%2C0&resize=1200"
  }
  const chefNames:any= {
    yossi: "Yossi Shitrit",
    ran: "Ran Shmueli", 
    yanir: "Yanir Green", 
    meir: "Meir Adoni",
    yariv: "Yariv Malili",
    aviv: "Aviv Moshe",
    shahaf: "Shahaf Shabtay",
    yuval:"Yuval Ben Neriah",
    assaf: "Assaf Granit"
  }
  const dishTypes:any = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner"
  }

  if (chefCount === 0) {
    chef.insertMany(
      [
        {
          chefName: chefNames.ran,
          chefDescription:
            "Chef Ran Shmueli, one of Israel’s most respected veteran chefs, is an entrepreneur, innovator and creative visionary in Israeli cuisine. Additional culinary ventures by Shmueli include Ma’arava, a venue for large events at Kibbutz Ga’ash, and Shmueli Catering which, for the past 28 years, has specialized in high-end productions and the development of gastronomic concepts.",
          chefImage: chefsImages.ran,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.meir,
          chefDescription:
            "World renowned Chef Meir Adoni, known for his upscale restaurants around the world, has closed his two kosher restaurants in Tel Aviv: Blue Sky & Lumina.",
          chefImage: chefsImages.meir,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.yanir,
          chefDescription:
            "The chef, Yanir Green – who is also one of the founders of the two sister restaurants in Sarona and Ramat Hahayal – is Israeli.",
          chefImage: chefsImages.yanir,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.yossi,
          chefDescription:
            "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including  running the kitchen in his first restaurant, the fondly-remembered  Violet, located in Moshav Udim.  Shitrit's creativity and culinary acumen  born of long experience are expressed in the every detail of each and every dish.",
          chefImage: chefsImages.yossi,
          chefOfTheWeek: true,
        },
        {
          chefName: chefNames.yariv,
          chefDescription:
            "Thai House founder, Yariv Malili, was in fact a pioneer when he opened his Asian-inspired hot spot, which most people don’t realize is over two decades old.",
          chefImage: chefsImages.yariv,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.aviv,
          chefDescription:
            "Chef Aviv Moshe, 45, has been cooking since the age of 16 and has been able to cook for many of the world’s most important people (Bill Clinton, Tony Blair, Nicolas Sarkozy, Guardiola, Bon Jovi, Madonna, Rod Stewart, Roman Abramovich and the list goes on …) Aviv grew up in Jerusalem to a family of Turkish Kurds and brought lots of home cooking to his cooking line.  Aviv owns many television programs, radio programs, cookbook and owner of several restaurants, catering companies and lines of products sold in food chains.",
          chefImage: chefsImages.aviv,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.shahaf,
          chefDescription:
            "After years of culinary journeys, exploring cultures and searching for the secrets of the Asian cuisine, Shahaf Shabtay takes you on “a journey to Asia” with 5 different cooking techniques.",
          chefImage: chefsImages.shahaf,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.yuval,
          chefDescription:
            "After years of work, and one epidemic in the middle that delayed the plans a bit, this evening Chef Yuval Ben Neria officially opens his a, with an investment of NIS 12 million",
          chefImage: chefsImages.yuval,
          chefOfTheWeek: false,
        },
        {
          chefName: chefNames.assaf,
          chefDescription:
            "Assaf Granit is an Israeli-born chef and owner of the Parisian restaurant Shabour. In January, 2021, Granit was awarded a Michelin star for his Shabour restaurant. It is the first Michelin star awarded to an Israeli restaurant in France.",
          chefImage: chefsImages.assaf,
          chefOfTheWeek: false,
        },
      ]
    );
  }
  if (dishCount === 0) {
    dish.insertMany(
      [
        {
          restaurant: "Claro",
          name: "Pad Ki Mao",
          mobileImage: dishImages.padKimao,
          desktopImage: dishImages.desktopPadKimao,
          description:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
          icon: icons.spicy,
          price: 88,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.breakfast
        },
        {
          restaurant: "Lumina",
          name: "Garbanzo Frito",
          mobileImage: dishImages.garbanzo,
          desktopImage: dishImages.desktopGarbanzo,
          description:
            "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa",
          icon: icons.vegiterian,
          price: 25,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],          
          dishType: dishTypes.breakfast
        },
        {
          restaurant: "Tiger Lilly",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Lumina",
          name: "Ta Ma-La-Ko",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Tiger Lilly",
          name: "Red Farm",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Claro",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.breakfast
        },
        {
          restaurant: "Claro",
          name: "Pad Ki Mao",
          mobileImage: dishImages.padKimao,
          desktopImage: dishImages.desktopPadKimao,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.breakfast
        },
        {
          restaurant: "Claro",
          name: "Pad Ki Mao",
          mobileImage: dishImages.padKimao,
          desktopImage: dishImages.desktopPadKimao,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.breakfast
        },
        {
          restaurant: "Onza",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Kitchen Market",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Messa",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Messa",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Messa",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Ya Pan",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Ya Pan",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Nithan Thai",
          name: "Smoked Pizza",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Claro",
          name: "Ta Ma-La-Ko",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Claro",
          name: "Ta Ma-La-Ko",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.lunch
        },
        {
          restaurant: "Claro",
          name: "Ta Ma-La-Ko",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.dinner
        },
        {
          restaurant: "Claro",
          name: "Ta Ma-La-Ko",
          mobileImage: dishImages.pizza,
          desktopImage: dishImages.desktopPizza,
          description: "Basil dough, cashew butter, demi-glace, bison & radish",
          icon: icons.vegan,
          price: 45,
          side: ["White Bread", "Sticky Rice"],
          changes: ["Without Onion", "Without Peanuts", "Less Spicy"],
          dishType: dishTypes.dinner
        },
      ]
    );
  }
  if (restaurantCount === 0) {
    restaurant.insertMany(
      [
        {
          name: "Claro",
          chef: chefNames.ran,
          mobileImage: restaurantImages.claro,
          desktopImage: restaurantImages.desktopClaro,
          bigImage: restaurantImages.bigClaro,
          isPopular: true,
          openingHour: "09:00:40",
          closingHour: "22:00:40",
          isNewRestaurant: true,
        },
        {
          name: "Lumina",
          chef: chefNames.meir,
          mobileImage: restaurantImages.lumina,
          desktopImage: restaurantImages.desktopLumina,
          bigImage: restaurantImages.bigLumina,
          isPopular: true,
          openingHour: "09:00:01",
          closingHour: "22:00:30",
          isNewRestaurant: false,
        },
        {
          name: "Tiger Lilly",
          chef: chefNames.yanir,
          mobileImage: restaurantImages.tiger,
          desktopImage: restaurantImages.desktopTiger,
          bigImage: restaurantImages.bigTiger,
          isPopular: true,
          openingHour: "09:00:01",
          closingHour: "11:00:01",
          isNewRestaurant: false,
        },
        {
          name: "Onza",
          chef: chefNames.yossi,
          mobileImage: restaurantImages.onza,
          desktopImage: restaurantImages.onza,
          bigImage: restaurantImages.bigOnza,
          isPopular: false,
          openingHour: "14:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: false,
        },
        {
          name: "Kitchen Market",
          chef: chefNames.yossi,
          mobileImage: restaurantImages.kitchen,
          desktopImage: restaurantImages.kitchen,
          bigImage: restaurantImages.bigMashya,
          isPopular: false,
          openingHour: "13:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: false,
        },
        {
          name: "Mashya",
          chef: chefNames.yossi,
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          bigImage: restaurantImages.bigMashya,
          isPopular: false,
          openingHour: "09:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: false,
        },
        {
          name: "Kab Kem",
          chef: chefNames.yariv,
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          bigImage: restaurantImages.bigMashya,
          isPopular: false,
          openingHour: "09:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: true,
        },
        {
          name: "Messa",
          chef: chefNames.aviv,
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          bigImage: restaurantImages.bigMashya,
          isPopular: false,
          openingHour: "09:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: true,
        },
        {
          name: "Nithan Thai",
          chef: chefNames.shahaf,
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          bigImage: restaurantImages.bigMashya,
          isPopular: false,
          openingHour: "09:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: false,
        },
        {
          name: "Ya Pan",
          chef: chefNames.yuval,
          mobileImage: restaurantImages.mashya,
          desktopImage: restaurantImages.mashya,
          bigImage: restaurantImages.bigMashya,
          isPopular: false,
          openingHour: "09:00:01",
          closingHour: "22:00:01",
          isNewRestaurant: false,
        },
      ]
    );
  }
};

const connection = mongoose.connect("mongodb+srv://yardents:245123yarden@yarden.hvyfy.mongodb.net/<epicure>?retryWrites=true&w=majority", () => {
  console.log("db connected successfuly.");
  dbInit();
});

export default connection
