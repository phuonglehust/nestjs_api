import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Req,
  Res,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomersService } from '../../service/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {
  }

  @Get(':id')
  getCustomer(@Param('id', ParseIntPipe) id: number, @Req() req, @Res() res) {
    const customers = this.customersService.findCustomerById(id);
    console.log(customers);
    if (!customers) {
      res.status(404).send({ msg: 'Customer not found' });
    }
    res.status(200).send(customers);
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number){
    const customers = this.customersService.findCustomerById(id);
    if(customers) return customers;
    else{
      throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
    }
  }
}
