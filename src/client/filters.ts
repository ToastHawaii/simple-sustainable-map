// Copyright (C) 2020 Markus Peloso
//
// This file is part of Sustainable map.
//
// Sustainable map is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// Sustainable map is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Sustainable map.  If not, see <http://www.gnu.org/licenses/>.

export type Filter = {
  id: number;
  group: string;
  subgroup?: string;
  order?: number;
  value: string;
  icon: string;
  button?: string;
  query: string;
  color: string;
  edit: string[];
  tags: string[];
};

export const filters: Filter[] = [
  {
    id: 5,
    group: "education",
    value: "books",
    icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
    query: `
// Get
nw["shop"="books"]["second_hand"~"^(yes|only)$"];
nw["shop"="books"]["books"="antiquarian"];
nw["amenity"="public_bookcase"]; // Get, Borrow, Give

// Borrow
nw["amenity"="library"];
nw["amenity"="mobile_library"];

// Recycle
nw["recycling:books"="yes"];`,
    color: "#A0522D",
    tags: [
      "shop=books",
      "amenity=public_bookcase",
      "amenity=library",
      "amenity=mobile_library",
      "recycling:books=yes",
    ],
    edit: [
      "shop=books",
      "amenity=public_bookcase",
      "amenity=library",
      "amenity=recycling",
    ],
  },
  
  {
    id: 34,
    group: "food",
    value: "grocery",
    icon: "https://wiki.openstreetmap.org/w/images/9/96/Convenience-14.svg",
    query: `
nw["shop"~"^(supermarket|convenience|health_food|pasta|deli|wholesale|grocery|food|frozen_food|spices)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["shop"~"^(farm|greengrocer|organic|dairy)$"];
nw["amenity"="vending_machine"]["vending"~"food|meat"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["amenity"="vending_machine"]["vending"~"eggs"];
nw["amenity"="marketplace"];
nw["craft"="pasta"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["shop"="yes"]["organic"~"^(yes|only)$"];
nwr[~"^(crop|produce)$"~".*"]["crop"!~"^(sun)?flowers?$"]["produce"!~"^(sun)?flowers?$"][~"^(self\_harvesting|self\_service)$"~"^(yes|only)$"];`,
    color: "#ac39ac",
    tags: [
      "shop=supermarket",
      "shop=convenience",
      "shop=farm",
      "amenity=marketplace",
      "self_harvesting=*",
    ],
    edit: [
      "shop=supermarket",
      "shop=convenience",
      "shop=farm",
      "amenity=marketplace",
      "landuse=farmland",
      "landuse=orchard",
      "landuse",
    ],
  },

  {
    id: 37,
    group: "food",
    value: "baked-goods",
    icon: "/lib/maki-icons/bakery-15.svg",
    query: `
nw["shop"="bakery"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["amenity"="vending_machine"]["vending"~"bread|pizza"];`,
    color: "#D2B48C",
    tags: ["shop=bakery"],
    edit: ["shop=bakery"],
  },

  {
    id: 40,
    group: "food",
    value: "vegetable",
    icon: "https://wiki.openstreetmap.org/w/images/d/d8/Greengrocer-14.svg",
    query: `
nw["shop"="greengrocer"][!"origin"];
nw["shop"="greengrocer"]["origin"="regional"];`,
    color: "#32CD32",
    tags: ["shop=greengrocer"],
    edit: ["shop=greengrocer"],
  },

  {
    id: 47,
    group: "food",
    value: "dinner",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Restaurant-14.svg",
    query: `
nw["amenity"~"^(restaurant|biergarten|fast_food|ice_cream|pub|bar|canteen|cafe|juice_bar)$"][~"^(regional|fair_trade|organic|(diet:){0,1}(vegetarian|lacto_vegetarian|ovo_vegetarian|vegan|fruitarian)|second_hand)$"~"^(yes|only)$"];
nw["amenity"~"^(restaurant|biergarten|fast_food|ice_cream|pub|bar|canteen|cafe|juice_bar)$"][~"^(diet|cuisine)$"~"vegetarian|vegan|fruitarian"];

nw["social_facility"="soup_kitchen"];`,
    color: "#C77400",
    tags: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=ice_cream",
      "amenity=pub",
      "amenity=bar",
      "amenity=cafe",
      "amenity=canteen",
      "amenity=juice_bar",
      "social_facility=soup_kitchen",
    ],
    edit: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=ice_cream",
      "amenity=pub",
      "amenity=bar",
      "amenity=cafe",
      "amenity=social_facility",
      "amenity",
    ],
  },
  
  {
    id: 49,
    group: "goods",
    value: "goods-get",
    icon: "https://wiki.openstreetmap.org/w/images/8/85/Charity-14.svg",
    query: `
      //Rent
      nw["shop"="tool_hire"];

      // Shop
      nw["shop"~"^(second_hand|charity|antiques|fair_trade)$"];
      nw["shop"~"^(variety_store|convenience|yes|general|department_store|gift|kiosk|mall|trade|houseware)$"][~"^(charity|regional|fair_trade|second_hand)$"~"^(yes|only)$"];
      nw["amenity"="marketplace"][~"^(second_hand|charity)$"~"^(yes|only)$"];`,
    color: "#F08080",
    tags: [
      "shop=second_hand",
      "shop=antiques",
      "second_hand=*",
      "shop=charity",
      "charity=*",
      "amenity=give_box",
      "amenity=freeshop",
      "shop=tool_hire",
      "fair_trade=*",
    ],
    edit: ["shop=second_hand", "shop=charity", "amenity=give_box", "amenity"],
  },
  {
    id: 50,
    group: "goods",
    value: "hackerspace",
    icon: "/lib/temaki-icons/toolbox.svg",
    query: `
      nw["leisure"="hackerspace"]["repair"!="only"];

      nw["club"="doityourself"];`,
    color: "#333333",
    tags: ["leisure=hackerspace", "club=doityourself"],
    edit: ["leisure=hackerspace", "club"],
  },
  {
    id: 104,
    group: "goods",
    value: "clothes-take",
    icon: "/lib/maki-icons/clothing-store-15.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      // Shop
      nw["shop"~"^(clothes|boutique|fashion|shoes|bag|sewing|tailor|fabric)$"][~"^(regional|fair_trade|organic|second_hand)$"~"^(yes|only)$"];
      nw["shop"="second_hand"]["clothes"]["clothes"!="no"];
`,
    color: "#FF7F50",
    tags: [
      "shop=clothes",
      "shop=boutique",
      "shop=fashion",
      "shop=shoes",
      "shop=bag",
      "shop=sewing",
      "shop=tailor",
      "shop=fabric",
      "social_facility=clothing_bank",
      "amenity=give_box",
      "amenity=freeshop",
    ],
    edit: [
      "shop=clothes",
      "shop=boutique",
      "shop=fashion",
      "shop=shoes",
      "shop=bag",
      "shop=sewing",
      "shop=tailor",
      "shop=fabric",
      "amenity=social_facility",
      "amenity=give_box",
      "amenity",
    ],
  },
  {
    id: 105,
    group: "goods",
    value: "clothes-repair",
    icon: "/lib/maki-icons/clothing-store-15.svg",
    button: "fas fa-tools",
    query: `
      nw[~"^(service:){0,1}(clothes|shoes|fabrik):repair$"~"^yes$"];
      nw["shoe_repair"~"^(yes|only)$"];
      nw["repair"="shoes"];
      nw["shop"="shoe_repair"];
      nw["craft"~"^(bag_repair|shoe_repair)$"];
      nw["tailor:alteration_service"="yes"];
      nw["shop"~"^(shoes|clothes|tailor|bag|sewing|leather)$"]["repair"~"^(yes|only)$"];
      nw["craft"~"^(shoemaker|dressmaker|tailor)$"]["repair"~"^(yes|only)$"];`,
    color: "#FF7F50",
    tags: [
      "shop=shoe_repair",
      "craft=shoemaker",
      "craft=dressmaker",
      "craft=tailor",
    ],
    edit: ["shop", "craft"],
  },
  {
    id: 108,
    group: "goods",
    value: "mobile-phones-take",
    icon: "/lib/maki-icons/mobile-phone-15.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"="mobile_phone"]["second_hand"~"^(yes|only)$"];`,
    color: "#191970",
    tags: ["shop=mobile_phone", "amenity=freeshop"],
    edit: ["shop=mobile_phone", "amenity"],
  },
  {
    id: 109,
    group: "goods",
    value: "mobile-phones-repair",
    icon: "/lib/maki-icons/mobile-phone-15.svg",
    button: "fas fa-tools",
    query: `
      nw["mobile_phone:repair"~"^(yes|only)$"];
      nw["service:mobile_phone:repair"~"^(yes|only)$"];
      nw["repair"="phone"];
      nw["repair"="mobilephone"];
      nw["repair"="mobile_phone"];
      nw["shop"="mobile_phone"]["repair"~"^(yes|only)$"];`,
    color: "#191970",
    tags: ["shop=mobile_phone", "repair=assisted_self_service", "repair=*"],
    edit: ["shop=mobile_phone", "amenity"],
  },
  {
    id: 112,
    group: "goods",
    value: "computers-take",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"="computer"]["second_hand"~"^(yes|only)$"];
      nw["amenity"="freeshop"]["electronics"!="no"];`,
    color: "#ABAB9A",
    tags: ["shop=computer", "amenity=freeshop"],
    edit: ["shop=computer", "amenity"],
  },
  {
    id: 113,
    group: "goods",
    value: "computers-repair",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
    button: "fas fa-tools",
    query: `
      nw["computer:repair"~"^(yes|only)$"];
      nw["service:computer:repair"~"^(yes|only)$"];
      nw["repair"="computer"];
      nw["shop"="computer_repair"];
      nw["shop"="computer"]["repair"~"^(yes|only)$"];`,
    color: "#ABAB9A",
    tags: ["shop=computer", "repair=assisted_self_service", "repair=*"],
    edit: ["shop=computer", "amenity"],
  },
  {
    id: 114,
    group: "goods",
    value: "toys",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    query: `
      // Rent
      nw["amenity"="toy_library"];
      nw["rental"~"toys"];`,
    color: "#800000",
    tags: [
      "recycling:toys=yes",
      "shop=toys",
      "amenity=give_box",
      "amenity=freeshop",
      "amenity=toy_library",
      "repair=assisted_self_service",
      "repair=*",
    ],
    edit: [
      "amenity=recycling",
      "shop=toys",
      "amenity=toy_library",
      "amenity=give_box",
      "amenity",
    ],
  },
  {
    id: 117,
    group: "goods",
    value: "toys-rent",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    button: "fas fa-redo-alt",
    query: `
      nw["amenity"="toy_library"];`,
    color: "#800000",
    tags: ["amenity=toy_library"],
    edit: ["amenity=toy_library"],
  },
  {
    id: 121,
    group: "goods",
    value: "electronics-take",
    icon: "/lib/temaki-icons/electronic.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"~"^(electronics|hifi|appliance|camera|kitchen)$"]["second_hand"~"^(yes|only)$"];

      nw["amenity"="give_box"]["electronics"!="no"];
      nw["amenity"="freeshop"]["electronics"!="no"];

      nw["rental"~"camera_equipment"];
      nw["shop"~"^(electronics|printer|appliance)$"]["rental"~"^(yes|only)$"];`,
    color: "#800080",
    tags: ["amenity=give_box", "amenity=freeshop"],
    edit: ["amenity=give_box", "amenity"],
  },
  {
    id: 122,
    group: "goods",
    value: "electronics-repair",
    icon: "/lib/temaki-icons/electronic.svg",
    button: "fas fa-tools",
    query: `
      nw["electronics_repair"~"^(yes|only)$"];
      nw["service:small_electronics_device:repair"~"^(yes|only)$"];
      nw["camera:repair"~"^(yes|only)$"];
      nw["service:camera:repair"~"^(yes|only)$"];
      nw["hifi:repair"~"^(yes|only)$"];
      nw["repair"~"^(electronics|tv|electricity)$"];
      nw["craft"="electronics_repair"];
      nw["shop"~"^(electronics|hifi|camera|radiotechnics|electrical|vacuum_cleaner|appliance|white_goods)$"]["repair"~"^(yes|only)$"];
      nw["craft"~"^(headphones|electronics|electrician)$"]["repair"~"^(yes|only)$"];`,
    color: "#800080",
    tags: [
      "shop=electronics",
      "shop=hifi",
      "shop=appliance",
      "shop=camera",
      "shop=kitchen",
      "shop=radiotechnics",
      "shop=electrical",
      "shop=vacuum_cleaner",
      "shop=appliance",
      "craft=electronics_repair",
      "repair=assisted_self_service",
      "repair=*",
    ],
    edit: [
      "shop=electronics",
      "shop=hifi",
      "shop=appliance",
      "shop=camera",
      "shop=kitchen",
      "shop=radiotechnics",
      "shop=electrical",
      "shop=vacuum_cleaner",
      "shop=appliance",
      "craft=electronics_repair",
      "amenity",
    ],
  },
  {
    id: 125,
    group: "goods",
    value: "furniture-take",
    icon: "/lib/temaki-icons/furniture.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"~"^(interior_decoration|furniture|bed)$"][~"^(rental|regional|fair_trade|second_hand)$"~"^(yes|only)$"];
      nw["amenity"="freeshop"];

      nw["rental"~"tableware|furniture"];
      nw["shop"="furniture"]["rental"~"^(yes|only)$"];`,
    color: "#B8860B",
    tags: ["shop=interior_decoration", "shop=furniture", "amenity=freeshop"],
    edit: ["shop=interior_decoration", "craft=cabinet_maker", "amenity"],
  },
  {
    id: 131,
    group: "mobility",
    value: "bicycle-repair",
    icon: "/lib/maki-icons/bicycle-15.svg",
    button: "fas fa-tools",
    query: `
nw["service:bicycle:repair"~"^(yes|only)$"];
nw["bicycle:repair"~"^(yes|only)$"];
nw["amenity"="bicycle_repair_station"];
nw["shop"="bicycle"]["repair"~"^(yes|only)$"];
nw["service:bicycle:diy"="yes"];`,
    color: "#4682B4",
    tags: [
      "amenity=bicycle_repair_station",
      "repair=assisted_self_service",
      "repair=*",
      "service:bicycle:repair=*",
      "service:bicycle:diy=*",
    ],
    edit: ["amenity=bicycle_repair_station", "amenity", "shop"],
  },
];
