import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NumberService {
  // Prime Number Check
  isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // Perfect Number Check
  isPerfect(n: number): boolean {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i !== n / i) sum += n / i;
      }
    }
    return sum === n && n !== 1;
  }

  // Armstrong Number Check
  isArmstrong(n: number): boolean {
    const digits = n.toString().split('');
    const power = digits.length;
    const sum = digits.reduce(
      (acc, digit) => acc + Math.pow(parseInt(digit), power),
      0,
    );
    return sum === n;
  }

  // Get Sum of Digits
  getDigitSum(n: number): number {
    return n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  // Fetch Fun Fact from Numbers API
  async getFunFact(n: number): Promise<string> {
    try {
      const response = await axios.get(`http://numbersapi.com/${n}/math`);
      return response.data as string;
    } catch {
      return 'Fun fact unavailable';
    }
  }
}
