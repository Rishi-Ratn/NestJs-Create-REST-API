import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";  // exportable as typescript types from the prisma client, we can do this after running npx prisma generate 
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    signup() {
        return {msg: 'I am signed up'};
    }
    signin() {
        return {msg: 'I am signed in'};
    }
}