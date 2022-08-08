import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  user = [
    {
      id: 1,
      username: 'DoThiDiemQuynh',
      email: 'dothidiemquynh@gmail.com',
      createAt: new Date(),
    },
    {
      id: 2,
      username: 'PhamThiYenLinh',
      email: 'yenlinh@gmail.com',
      createAt: new Date(),
    },
    {
      id: 3,
      username: 'LeThanhPhuong',
      email: 'lephuong@gmail.com',
      createAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.user.find((user) => user.id === id);
  }
}
