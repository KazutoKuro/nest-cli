import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

// class MockCoffeeService {}
// class ConfigService {}
// class DevelopmentconfigService {}
// class ProductConfigService {}

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    // do something
    return ['buddy brew', 'nescafe'];
  }
}
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'development'
    //       ? DevelopmentconfigService
    //       : ProductConfigService,
    // },
    // { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
    {
      provide: COFFEE_BRANDS,
      useFactory: (brandsFactory: CoffeeBrandsFactory) =>
        brandsFactory.create(),
      inject: [CoffeeBrandsFactory],
    },
    // {
    // provide: CoffeesService,
    // useClass: CoffeesService,
    // useValue: new MockCoffeeService(),
    // },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
