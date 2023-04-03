function fullSubtractor(x, y, z) {
  let D,
    B,
    xXORy = !x * y + x * !y;
  if (!xXORy * z + xXORy * !z) {
    D = 1;
  } else {
    D = 0;
  }
  if (z * !xXORy + !x * y) {
    B = 1;
  } else {
    B = 0;
  }

  return [D, B];
}

fullSubtractor(1, 0, 1);
