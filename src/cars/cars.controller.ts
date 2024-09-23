import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id: string ) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
    }
    
    @Patch(':id')
    updateCar( 
        @Body() body: any, 
        @Param('id', ParseUUIDPipe) id: string
    ){
        return { id, body, method: 'PATCH'};
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string){
        return {id, method: 'DELETE'};
    }
}
