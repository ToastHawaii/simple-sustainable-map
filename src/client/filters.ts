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

import { Filter } from "../osm-app-component/control/Filters";

export const filters: Filter[] = [
  //   {
  //     id: 5,
  //     group: "",
  //     value: "books",
  //     icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
  //     query: `
  // // Get
  // nw["shop"="books"]["second_hand"~"^(yes|only)$"];
  // nw["shop"="books"]["books"="antiquarian"];
  // nw["amenity"="public_bookcase"]; // Get, Borrow, Give

  // // Borrow
  // nw["amenity"="library"];
  // nw["amenity"="mobile_library"];

  // // Recycle
  // nw["recycling:books"="yes"];`,
  //     color: "#A0522D",
  //     tags: [
  //       "shop=books",
  //       "amenity=public_bookcase",
  //       "amenity=library",
  //       "amenity=mobile_library",
  //       "recycling:books=yes",
  //     ],
  //     edit: [
  //       "shop=books",
  //       "amenity=public_bookcase",
  //       "amenity=library",
  //       "amenity=recycling",
  //     ],
  //   },

  {
    id: 34,
    group: "",
    value: "grocery",
    icon: "https://wiki.openstreetmap.org/w/images/9/96/Convenience-14.svg",
    query: `
nw["shop"~"^(supermarket|convenience|pasta|deli|wholesale|grocery|food|frozen_food|farm|greengrocer|dairy|yes)$"]["organic"="only"];
nw["shop"="organic"];
nw["amenity"="marketplace"]["organic"="only"];
nw["craft"="pasta"]["organic"="only"];`,
    color: "#ac39ac",
    tags: [
      "shop=supermarket",
      "shop=convenience",
      "shop=farm",
      "amenity=marketplace",
      "shop=greengrocer",
    ],
    edit: [
      "shop=supermarket",
      "shop=convenience",
      "shop=farm",
      "amenity=marketplace",
      "shop=greengrocer",
    ],
  },

  {
    id: 37,
    group: "",
    value: "baked-goods",
    icon: "/lib/maki-icons/bakery-15.svg",
    query: `
nw["shop"="bakery"]["organic"="only"];`,
    color: "#D2B48C",
    tags: ["shop=bakery"],
    edit: ["shop=bakery"],
  },

  {
    id: 47,
    group: "",
    value: "dinner-vegetarian",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Restaurant-14.svg",
    query: `
nw["amenity"~"^(restaurant|biergarten|fast_food|pub|canteen|cafe)$"][~"^((diet:){0,1}(vegetarian|lacto_vegetarian|ovo_vegetarian))$"~"^(only)$"];
nw["amenity"~"^(restaurant|biergarten|fast_food|pub|canteen|cafe)$"][~"^(diet|cuisine)$"~"vegetarian"];`,
    color: "#ffd700",
    tags: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=pub",
      "amenity=cafe",
      "amenity=canteen",
    ],
    edit: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=pub",
      "amenity=cafe",
    ],
  },
  {
    id: 48,
    group: "",
    value: "dinner-vegan",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Restaurant-14.svg",
    query: `
nw["amenity"~"^(restaurant|biergarten|fast_food|pub|canteen|cafe)$"][~"^((diet:){0,1}(vegan|fruitarian))$"~"^(only)$"];
nw["amenity"~"^(restaurant|biergarten|fast_food|pub|canteen|cafe)$"][~"^(diet|cuisine)$"~"vegan|fruitarian"];`,
    color: "#7ccd7c",
    tags: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=pub",
      "amenity=cafe",
      "amenity=canteen",
    ],
    edit: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=pub",
      "amenity=cafe",
    ],
  },

    {
      id: 49,
      group: "",
      value: "goods-get",
      icon: "https://wiki.openstreetmap.org/w/images/8/85/Charity-14.svg",
      query: `
        nw["shop"="second_hand"];
        nw["shop"~"^(variety_store|convenience|yes|general|department_store|gift|mall|trade|houseware)$"]["second_hand"="only"];
        nw["amenity"="marketplace"]["second_hand"="only"];`,
      color: "#F08080",
      tags: [
        "shop=second_hand",
        "second_hand=*",
      ],
      edit: ["shop=second_hand"],
    },
  //   {
  //     id: 50,
  //     group: "",
  //     value: "hackerspace",
  //     icon: "/lib/temaki-icons/toolbox.svg",
  //     query: `
  //       nw["leisure"="hackerspace"]["repair"!="only"];

  //       nw["club"="doityourself"];`,
  //     color: "#333333",
  //     tags: ["leisure=hackerspace", "club=doityourself"],
  //     edit: ["leisure=hackerspace", "club"],
  //   },
    {
      id: 104,
      group: "",
      value: "clothes-take",
      icon: "/lib/maki-icons/clothing-store-15.svg",
      button: "fas fa-long-arrow-alt-right",
      query: `
        // Shop
        nw["shop"~"^(clothes|boutique|fashion|shoes|bag|sewing|tailor|fabric)$"]["second_hand"="only"];
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
      ],
    },
  //   {
  //     id: 105,
  //     group: "",
  //     value: "clothes-repair",
  //     icon: "/lib/maki-icons/clothing-store-15.svg",
  //     button: "fas fa-tools",
  //     query: `
  //       nw[~"^(service:){0,1}(clothes|shoes|fabrik):repair$"~"^yes$"];
  //       nw["shoe_repair"~"^(yes|only)$"];
  //       nw["repair"="shoes"];
  //       nw["shop"="shoe_repair"];
  //       nw["craft"~"^(bag_repair|shoe_repair)$"];
  //       nw["tailor:alteration_service"="yes"];
  //       nw["shop"~"^(shoes|clothes|tailor|bag|sewing|leather)$"]["repair"~"^(yes|only)$"];
  //       nw["craft"~"^(shoemaker|dressmaker|tailor)$"]["repair"~"^(yes|only)$"];`,
  //     color: "#FF7F50",
  //     tags: [
  //       "shop=shoe_repair",
  //       "craft=shoemaker",
  //       "craft=dressmaker",
  //       "craft=tailor",
  //     ],
  //     edit: ["shop", "craft"],
  //   },
  //   {
  //     id: 108,
  //     group: "",
  //     value: "mobile-phones-take",
  //     icon: "/lib/maki-icons/mobile-phone-15.svg",
  //     button: "fas fa-long-arrow-alt-right",
  //     query: `
  //       nw["shop"="mobile_phone"]["second_hand"~"^(yes|only)$"];`,
  //     color: "#191970",
  //     tags: ["shop=mobile_phone", "amenity=freeshop"],
  //     edit: ["shop=mobile_phone", "amenity"],
  //   },
  //   {
  //     id: 109,
  //     group: "",
  //     value: "mobile-phones-repair",
  //     icon: "/lib/maki-icons/mobile-phone-15.svg",
  //     button: "fas fa-tools",
  //     query: `
  //       nw["mobile_phone:repair"~"^(yes|only)$"];
  //       nw["service:mobile_phone:repair"~"^(yes|only)$"];
  //       nw["repair"="phone"];
  //       nw["repair"="mobilephone"];
  //       nw["repair"="mobile_phone"];
  //       nw["shop"="mobile_phone"]["repair"~"^(yes|only)$"];`,
  //     color: "#191970",
  //     tags: ["shop=mobile_phone", "repair=assisted_self_service", "repair=*"],
  //     edit: ["shop=mobile_phone", "amenity"],
  //   },
  //   {
  //     id: 112,
  //     group: "",
  //     value: "computers-take",
  //     icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
  //     button: "fas fa-long-arrow-alt-right",
  //     query: `
  //       nw["shop"="computer"]["second_hand"~"^(yes|only)$"];
  //       nw["amenity"="freeshop"]["electronics"!="no"];`,
  //     color: "#ABAB9A",
  //     tags: ["shop=computer", "amenity=freeshop"],
  //     edit: ["shop=computer", "amenity"],
  //   },
  //   {
  //     id: 113,
  //     group: "",
  //     value: "computers-repair",
  //     icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
  //     button: "fas fa-tools",
  //     query: `
  //       nw["computer:repair"~"^(yes|only)$"];
  //       nw["service:computer:repair"~"^(yes|only)$"];
  //       nw["repair"="computer"];
  //       nw["shop"="computer_repair"];
  //       nw["shop"="computer"]["repair"~"^(yes|only)$"];`,
  //     color: "#ABAB9A",
  //     tags: ["shop=computer", "repair=assisted_self_service", "repair=*"],
  //     edit: ["shop=computer", "amenity"],
  //   },
  //   {
  //     id: 114,
  //     group: "",
  //     value: "toys",
  //     icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
  //     query: `
  //       // Rent
  //       nw["amenity"="toy_library"];
  //       nw["rental"~"toys"];`,
  //     color: "#800000",
  //     tags: [
  //       "recycling:toys=yes",
  //       "shop=toys",
  //       "amenity=give_box",
  //       "amenity=freeshop",
  //       "amenity=toy_library",
  //       "repair=assisted_self_service",
  //       "repair=*",
  //     ],
  //     edit: [
  //       "amenity=recycling",
  //       "shop=toys",
  //       "amenity=toy_library",
  //       "amenity=give_box",
  //       "amenity",
  //     ],
  //   },
  //   {
  //     id: 117,
  //     group: "",
  //     value: "toys-rent",
  //     icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
  //     button: "fas fa-redo-alt",
  //     query: `
  //       nw["amenity"="toy_library"];`,
  //     color: "#800000",
  //     tags: ["amenity=toy_library"],
  //     edit: ["amenity=toy_library"],
  //   },
  //   {
  //     id: 121,
  //     group: "",
  //     value: "electronics-take",
  //     icon: "/lib/temaki-icons/electronic.svg",
  //     button: "fas fa-long-arrow-alt-right",
  //     query: `
  //       nw["shop"~"^(electronics|hifi|appliance|camera|kitchen)$"]["second_hand"~"^(yes|only)$"];

  //       nw["amenity"="give_box"]["electronics"!="no"];
  //       nw["amenity"="freeshop"]["electronics"!="no"];

  //       nw["rental"~"camera_equipment"];
  //       nw["shop"~"^(electronics|printer|appliance)$"]["rental"~"^(yes|only)$"];`,
  //     color: "#800080",
  //     tags: ["amenity=give_box", "amenity=freeshop"],
  //     edit: ["amenity=give_box", "amenity"],
  //   },
  //   {
  //     id: 122,
  //     group: "",
  //     value: "electronics-repair",
  //     icon: "/lib/temaki-icons/electronic.svg",
  //     button: "fas fa-tools",
  //     query: `
  //       nw["electronics_repair"~"^(yes|only)$"];
  //       nw["service:small_electronics_device:repair"~"^(yes|only)$"];
  //       nw["camera:repair"~"^(yes|only)$"];
  //       nw["service:camera:repair"~"^(yes|only)$"];
  //       nw["hifi:repair"~"^(yes|only)$"];
  //       nw["repair"~"^(electronics|tv|electricity)$"];
  //       nw["craft"="electronics_repair"];
  //       nw["shop"~"^(electronics|hifi|camera|radiotechnics|electrical|vacuum_cleaner|appliance|white_goods)$"]["repair"~"^(yes|only)$"];
  //       nw["craft"~"^(headphones|electronics|electrician)$"]["repair"~"^(yes|only)$"];`,
  //     color: "#800080",
  //     tags: [
  //       "shop=electronics",
  //       "shop=hifi",
  //       "shop=appliance",
  //       "shop=camera",
  //       "shop=kitchen",
  //       "shop=radiotechnics",
  //       "shop=electrical",
  //       "shop=vacuum_cleaner",
  //       "shop=appliance",
  //       "craft=electronics_repair",
  //       "repair=assisted_self_service",
  //       "repair=*",
  //     ],
  //     edit: [
  //       "shop=electronics",
  //       "shop=hifi",
  //       "shop=appliance",
  //       "shop=camera",
  //       "shop=kitchen",
  //       "shop=radiotechnics",
  //       "shop=electrical",
  //       "shop=vacuum_cleaner",
  //       "shop=appliance",
  //       "craft=electronics_repair",
  //       "amenity",
  //     ],
  //   },
  //   {
  //     id: 125,
  //     group: "",
  //     value: "furniture-take",
  //     icon: "/lib/temaki-icons/furniture.svg",
  //     button: "fas fa-long-arrow-alt-right",
  //     query: `
  //       nw["shop"~"^(interior_decoration|furniture|bed)$"][~"^(rental|regional|fair_trade|second_hand)$"~"^(yes|only)$"];
  //       nw["amenity"="freeshop"];

  //       nw["rental"~"tableware|furniture"];
  //       nw["shop"="furniture"]["rental"~"^(yes|only)$"];`,
  //     color: "#B8860B",
  //     tags: ["shop=interior_decoration", "shop=furniture", "amenity=freeshop"],
  //     edit: ["shop=interior_decoration", "craft=cabinet_maker", "amenity"],
  //   },
  //   {
  //     id: 131,
  //     group: "",
  //     value: "bicycle-repair",
  //     icon: "/lib/maki-icons/bicycle-15.svg",
  //     button: "fas fa-tools",
  //     query: `
  // nw["service:bicycle:repair"~"^(yes|only)$"];
  // nw["bicycle:repair"~"^(yes|only)$"];
  // nw["amenity"="bicycle_repair_station"];
  // nw["shop"="bicycle"]["repair"~"^(yes|only)$"];
  // nw["service:bicycle:diy"="yes"];`,
  //     color: "#4682B4",
  //     tags: [
  //       "amenity=bicycle_repair_station",
  //       "repair=assisted_self_service",
  //       "repair=*",
  //       "service:bicycle:repair=*",
  //       "service:bicycle:diy=*",
  //     ],
  //     edit: ["amenity=bicycle_repair_station", "amenity", "shop"],
  //   },
];
