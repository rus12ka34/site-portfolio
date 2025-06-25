type ModsType = Record<string, boolean | string>; 

export const ClassNames = (main: string, mods: ModsType = {}, additional: string[] = []): string => {
  const _mods = Object.entries(mods).filter(([_, isView]) => Boolean(isView)).map(([name]) => name);
  return [
    main,
    ..._mods,
    ...additional.filter(Boolean),
  ].join(' ');
};