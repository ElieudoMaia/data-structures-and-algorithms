export const mergeSortedArrays = (arr1, arr2) => {
  let arr1End = arr1.length - 1;
  let arr2End = arr2.length - 1;
  let arr1LastPos = arr1.length + arr2.length - 1;

  while (arr2End >= 0) {
    if (arr1End >= 0 && arr1[arr1End] > arr2[arr2End]) {
      arr1[arr1LastPos] = arr1[arr1End];
      arr1End -= 1;
    } else {
      arr1[arr1LastPos] = arr2[arr2End];
      arr2End -= 1;
    }

    arr1LastPos -= 1;
  }

  return arr1;
};

[1, 4, 7, 0, 0, 0], [3, 5, 6];
