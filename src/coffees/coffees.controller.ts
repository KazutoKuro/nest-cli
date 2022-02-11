import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  //   @Get()
  //   findAll(@Res() response) {
  //     response.status(200).send('This action returns all coffees');
  //   }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  fineOne(@Param('id') id: string) {
    // return `This action returns #${id} coffees`;
    return this.coffeesService.findOne(id);
  }

  //   @Post()
  //   @HttpCode(HttpStatus.GONE)
  //   create(@Body() body) {
  //     return body;
  //   }

//   @Post()
//   create(@Body() body) {
//     return this.coffeesService.create(body);
//   }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.coffeesService.remove(id);
//   }
}
