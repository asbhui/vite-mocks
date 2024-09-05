export const memoNoArgs = <T>(func: () => T): (() => T) => {
  let cachedResult: T;
  return () => {
    if (!cachedResult) {
      cachedResult = func();
    }
    return cachedResult;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const separateKeys = <T extends Record<string, any>, K extends string>(
  obj: T,
  keys: K[],
): [Pick<T, K>, Omit<T, K>] => {
  const pick = {} as Pick<T, K>;

  const omit = {} as Omit<T, K>;
  Object.entries(obj).forEach(([key, val]) => {
    if ((keys as string[]).includes(key)) {
      pick[key as keyof Pick<T, K>] = val as Pick<T, K>[keyof Pick<T, K>];
    } else {
      omit[key as keyof Omit<T, K>] = val as Omit<T, K>[keyof Omit<T, K>];
    }
  });
  return [pick, omit];
};
