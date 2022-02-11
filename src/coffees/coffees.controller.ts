import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  //   @Get()
  //   findAll(@Res() response) {
  //     response.status(200).send('This action returns all coffees');
  //   }

  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  fineOne(@Param('id') id: string) {
    return `This action returns #${id} coffees`;
  }

  //   @Post()
  //   @HttpCode(HttpStatus.GONE)
  //   create(@Body() body) {
  //     return body;
  //   }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action update #${id} coffees`;
  }

  @Delete(':id')
  remove(id: string) {
    return `This action delete #${id} coffees`;
  }
}
