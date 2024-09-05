import { textTruncate } from './textTruncate';

describe('Truncate message', () => {
  it('should not truncate message when length is smaller than expected length', () => {
    const message = 'The quick brown fox';
    const truncatedMessage = textTruncate(message, 30);
    expect(truncatedMessage).toHaveLength(19);
    expect(truncatedMessage.endsWith('...')).toBe(false);
  });

  it('should truncate message when length is greater than expected length', () => {
    const message = 'The quick brown fox jumps over the lazy dog';
    const truncatedMessage = textTruncate(message, 20);
    expect(truncatedMessage).toHaveLength(20);
    expect(truncatedMessage.endsWith('...')).toBe(true);
  });

  it('should not truncate message when length is same as expected length', () => {
    const message = 'abcdefghijklmnopqrstuvwxyz';
    const truncatedMessage = textTruncate(message, 26);
    expect(truncatedMessage).toHaveLength(26);
    expect(truncatedMessage.endsWith('...')).toBe(false);
  });

  it('should truncate message when expected length is not given', () => {
    const message =
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus pariatur, et, odit quod nostrum eum cum voluptate aliquam molestias hic quasi numquam aperiam, adipisci dicta.';
    const truncatedMessage = textTruncate(message);
    expect(truncatedMessage).toHaveLength(45);
    expect(truncatedMessage.endsWith('...')).toBe(true);
  });
});
