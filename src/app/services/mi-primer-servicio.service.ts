import { Injectable } from '@angular/core';
import {producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class MiPrimerServicioService {

  public datos : Array<producto> = [
    {
      "id": 1,
      "title": "Fantastic Fresh Chair",
      "price": 734,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=7759",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5957",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=9262"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 4,
        "name": "Shoes",
        "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=4169",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 2,
      "title": "Intelligent Rubber Towels",
      "price": 923,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image?w=640&h=480&r=4854",
        "https://api.lorem.space/image?w=640&h=480&r=5742",
        "https://api.lorem.space/image?w=640&h=480&r=4388"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://api.lorem.space/image?w=640&h=480&r=4088",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 3,
      "title": "Bespoke Rubber Bacon",
      "price": 390,
      "description": "The Football Is Good For Training And Recreational Purposes",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=9008",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=856",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5211"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 4,
        "name": "Shoes",
        "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=4169",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 4,
      "title": "Intelligent Rubber Fish",
      "price": 434,
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "images": [
        "https://api.lorem.space/image?w=640&h=480&r=9884",
        "https://api.lorem.space/image?w=640&h=480&r=3627",
        "https://api.lorem.space/image?w=640&h=480&r=198"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://api.lorem.space/image?w=640&h=480&r=4088",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 5,
      "title": "Fantastic Granite Salad",
      "price": 961,
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "images": [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=2905",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=2347",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=1465"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 3,
        "name": "Furniture",
        "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8056",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 6,
      "title": "Bespoke Rubber Car",
      "price": 404,
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "images": [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=909",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=8614",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=274"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 3,
        "name": "Furniture",
        "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8056",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 7,
      "title": "Incredible Rubber Car",
      "price": 486,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "images": [
        "https://api.lorem.space/image?w=640&h=480&r=9781",
        "https://api.lorem.space/image?w=640&h=480&r=2087",
        "https://api.lorem.space/image?w=640&h=480&r=8453"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://api.lorem.space/image?w=640&h=480&r=4088",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 8,
      "title": "Unbranded Frozen Bike",
      "price": 327,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "images": [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=4797",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=7754",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=6567"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 3,
        "name": "Furniture",
        "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8056",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 9,
      "title": "Oriental Steel Chair",
      "price": 153,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=2366",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4525",
        "https://api.lorem.space/image/watch?w=640&h=480&r=563"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://api.lorem.space/image/watch?w=640&h=480&r=3002",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    },
    {
      "id": 10,
      "title": "Electronic Steel Table",
      "price": 709,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=8518",
        "https://api.lorem.space/image/watch?w=640&h=480&r=3026",
        "https://api.lorem.space/image/watch?w=640&h=480&r=5816"
      ],
      "creationAt": "2023-01-05T22:20:42.000Z",
      "updatedAt": "2023-01-05T22:20:42.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://api.lorem.space/image/watch?w=640&h=480&r=3002",
        "creationAt": "2023-01-05T22:20:42.000Z",
        "updatedAt": "2023-01-05T22:20:42.000Z"
      }
    }
  ]

  constructor() { }



}
