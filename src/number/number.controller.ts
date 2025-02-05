import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { NumberService } from './number.service';

@Controller('api')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Get('classify-number')
  async classifyNumber(@Query('number') num: string) {
    const parsedNumber = Number(num);

    if (!Number.isInteger(parsedNumber)) {
      throw new BadRequestException({
        number: 'float',
        error: true,
      });
    }

    if (isNaN(parsedNumber)) {
      throw new BadRequestException({ number: num, error: true });
    }
    const number = Math.abs(parsedNumber);
    // Check properties using service functions
    const isPrime = this.numberService.isPrime(number);
    const isPerfect = this.numberService.isPerfect(number);
    const isArmstrong = this.numberService.isArmstrong(number);
    const isEven = number % 2 === 0;
    const digitSum = this.numberService.getDigitSum(number);

    // Set properties
    const properties = isArmstrong ? ['armstrong'] : [];
    properties.push(isEven ? 'even' : 'odd');

    // Fetch fun fact
    const funFact = await this.numberService.getFunFact(number);

    return {
      number,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    };
  }
}
