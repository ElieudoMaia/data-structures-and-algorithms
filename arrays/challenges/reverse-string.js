export const reverse = (string = '') => {
  if (!string?.length) throw new Error('string is required');

  const array = string.split('');

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const aux = array[i];
    array[i] = array[j];
    array[j] = aux;

    i += 1;
    j -= 1;
  }

  return array.join('');
};
