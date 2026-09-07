import { ProductLoggerMiddleware } from './product-logger.middleware';

describe('ProductLoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new ProductLoggerMiddleware()).toBeDefined();
  });
});
