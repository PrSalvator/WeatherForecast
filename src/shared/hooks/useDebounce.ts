export const useDebounce = (callFn: (...args: any) => void, delay: number) => {
  let lastCall = Date.now();
  let lastCallTimer = setTimeout(() => {}, delay);

  return function perform(...args: any) {
    const prevCall = lastCall;
    lastCall = Date.now();

    if (lastCall - prevCall <= delay) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => {
      callFn(...args);
    }, delay);
  };
};
