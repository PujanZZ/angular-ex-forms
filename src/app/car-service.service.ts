import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Car } from './Car';

@Injectable()
export class CarServiceService {
  public USERS: Car[] = [];

  constructor() {
    function getCar(): Car {
      return {
        id: faker.datatype.uuid(),
        name: faker.vehicle.vehicle(),
        model: faker.vehicle.model(),
        brand: faker.vehicle.manufacturer(),
        color: faker.vehicle.color(),
      };
    }

    Array.from({ length: 50 }).forEach(() => {
      this.USERS.push(getCar());
    });
  }
}
