import { ClassNames } from './ClassNames';

describe('ClassNames', () => {
  it('returns only main class when no mods or additional classes', () => {
    expect(ClassNames('main')).toBe('main');
  });

  it('includes truthy mods as class names', () => {
    const mods = {
      'mod-1': true,
      'mod-2': 'non-empty',
      'mod-3': false,
      'mod-4': '',
    };
    expect(ClassNames('main', mods)).toBe('main mod-1 mod-2');
  });

  it('includes additional classes', () => {
    const additional = ['extra-1', 'extra-2'];
    expect(ClassNames('main', {}, additional)).toBe('main extra-1 extra-2');
  });

  it('ignores falsy additional values', () => {
    const additional = ['extra-1', '', 'extra-2', undefined];
    expect(ClassNames('main', {}, additional)).toBe('main extra-1 extra-2');
  });

  it('combines all correctly', () => {
    const mods = {
      'is-active': true,
      'is-hidden': false,
    };
    const additional = ['extra', '', 'visible'];
    expect(ClassNames('main', mods, additional)).toBe('main is-active extra visible');
  });
});