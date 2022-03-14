// Static module

import { Injectable, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { Connection } from 'typeorm';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

// class MockCoffeeService {}
// class ConfigService {}
// class DevelopmentconfigService {}
// class ProductConfigService {}

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     // do something
//     return ['buddy brew', 'nescafe'];
//   }
// }
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // CoffeeBrandsFactory,

    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT,
    },

    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'development'
    //       ? DevelopmentconfigService
    //       : ProductConfig္Service,
    // },

    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     // const coffeeBrands = await connection.query ('SELECT * ...');
    //     const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
    //     console.log('[!] Async factory');
    //     return coffeeBrands;
    //   },
    //   inject: [Connection],
    // },

    // { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },

    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: (brandsFactory: CoffeeBrandsFactory) =>
    //     brandsFactory.create(),
    //   inject: [CoffeeBrandsFactory],
    // },

    // {
    // provide: CoffeesService,
    // useClass: CoffeesService,
    // useValue: new MockCoffeeService(),
    // },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
