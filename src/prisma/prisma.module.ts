import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//to make the PrismaModule available to all other module use decorator @Global, and don't forget to export PrismaService
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
