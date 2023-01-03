import { Body, Controller,Get, Post, Put, Patch, Delete, Req, Res, Logger } from '@nestjs/common';
/* 
@Request(), @Req()	        req
@Response(), @Res()*	    res
@Next()	                    next
@Session()	                req.session
@Param(key?: string)	    req.params / req.params[key]
@Body(key?: string)	        req.body / req.body[key]
@Query(key?: string)	    req.query / req.query[key]
@Headers(name?: string)	    req.headers / req.headers[name]
@Ip()	                    req.ip
@HostParam()	            req.hosts
 */
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';
import { UsersDto } from './dto/users.dto';

@Controller('api/users')
export class UsersController {

    /* 생성자 */
    constructor(private usersService: UsersService){

    }

    @Get()
    getUsersList() {
        return this.usersService.findAllUser();
    }

    @Post()
    addUser(@Body() body : any) {

        Logger.log(body);

        const userDto : UsersDto = {
            email : body?.email,
            nickname : body?.nickname,
            password : body?.password
        };

        return this.usersService.createUser(userDto);
    }

    @Delete()
    deleteUserOne(@Body() body : any) {

        Logger.log(body);

        return this.usersService.deleteUserOne(body?._id);

    }

    @Put()
    updateUserOne(@Body() body : any ) {

        Logger.log(body);

        const userDto : UsersDto = {
            email : body?.email,
            nickname : body?.nickname,
            password : body?.password
        };

        return this.usersService.updateUserOne(body?._id, userDto);

    }

}
