const calculateBaseStats = (n: number) => {
  const val = Math.round(n);

  return Math.round(val * 100 / 255);
};

export default calculateBaseStats;
