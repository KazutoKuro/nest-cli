import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  fineOne(@Param('id') id: string) {
    return `This action returns #${id} coffees`;
  }

  @Post()
  create(@Body() body) {
      return body;
  }
}
