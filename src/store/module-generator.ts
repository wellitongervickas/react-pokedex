const moduleGenerator = (options?: any) => ({
  loading: false,
  errors: null,
  list: [],
  read: {},
  filters: {
    offset: 0,
    limit: 10,
  },
  ...options,
});

export default moduleGenerator;
