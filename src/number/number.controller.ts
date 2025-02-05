import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { NumberService } from './number.service';

@Controller('api')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Get('classify-number')
  async classifyNumber(@Query('number') num: string) {
    if (isNaN(Number(num))) {
      if (/^[a-zA-Z]+$/.test(num)) {
        throw new BadRequestException({
          number: 'alphabet',
          error: true,
        });
      }
      throw new BadRequestException({
        statusCode: 400,
        message: 'Invalid number provided',
        error: 'Bad Request',
      });
    }

    // Parse the number and convert negative numbers to positive
    const parsedNumber = Math.abs(Number(num));

    // ❌ Reject floats
    if (!Number.isInteger(parsedNumber)) {
      throw new BadRequestException({
        number: 'float',
        error: true,
      });
    }

    // Check properties using service functions
    const isPrime = this.numberService.isPrime(parsedNumber);
    const isPerfect = this.numberService.isPerfect(parsedNumber);
    const isArmstrong = this.numberService.isArmstrong(parsedNumber);
    const isEven = parsedNumber % 2 === 0;
    const digitSum = this.numberService.getDigitSum(parsedNumber);

    // Set properties
    const properties = isArmstrong ? ['armstrong'] : [];
    properties.push(isEven ? 'even' : 'odd');

    // Fetch fun fact
    const funFact = await this.numberService.getFunFact(parsedNumber);

    return {
      number: parsedNumber,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    };
  }
}
