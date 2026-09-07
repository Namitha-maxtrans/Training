import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositiveNumberPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {

    const number = Number(value);

    if (isNaN(number)) {
      throw new BadRequestException('ID must be a number');
    }

    return number;
  }
}