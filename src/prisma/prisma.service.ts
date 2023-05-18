import { Injectable, OnModuleInit } from '@nestjs/common';
import{ PrismaClient } from '@prisma/client';
import { appendFile } from 'fs';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    category: any;
    async onModuleInit() {
        await this.$connect();
    }
    
    enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
}  
