import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavor: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
      return this.coffees;
  }

  findOne(id: string) {
      throw 'A random error';
      const coffee = this.coffees.find(item => item.id ===+id);
      if(!coffee) {
          throw new NotFoundException(`Coffee #${id} not found`);
      }
     return coffee; 
  }

  create(createcoffeeDto: any) {
      this.coffees.push(createcoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
      const existingCoffee = this.findOne(id);
      if (existingCoffee) {
          //update the existing entity
      }
  }

  remove(id: string) {
      const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
      if (coffeeIndex >= 0) {
          this.coffees.splice(coffeeIndex, 1);
      }
  }

}
