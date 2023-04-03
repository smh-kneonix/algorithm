function halfSubtractor(x, y) {
  let D, B;
  if (!x * y + x * !y) {
    D = 1;
  } else {
    D = 0;
  }

  if (!x * y) {
    B = 1;
  } else {
    B = 0;
  }

  return [D, B];
}
halfSubtractor(0, 1);
