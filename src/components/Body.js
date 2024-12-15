import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  //  State variable - Super powerful variable
const [listOfRestaurants, setListOfRestaurants] = useState(resList)
console.log('List of restaurants value: ', listOfRestaurants)

// Normal JS variable
// let listOfRestaurants =[];

// let listOfRestaurants = [  
//   
//   {
//     data: {
//       id: "334476",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "4.5",
//     },
//   },
//   {
//     data: {
//       id: "334477",
//       name: "MCD",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "4.1",
//     },
//   },
// ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList)
            // console.log('List of restaurants: ', listOfRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {/* <RestaurantCard resName="Meghana foods" cuisine="Biriyani,North Indian,Asian" />
                <RestaurantCard resName="KFC" cuisine="Burger, Fast food" /> */}

        {/* <RestaurantCard resData = {resList[0]} /> */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
