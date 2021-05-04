export const sortObjects = (a, b, sortBy, sortOrder) => {
  if (sortOrder === 'asc') {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1
    }
    return 0;
  }

  if (sortOrder === 'desc') {
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }
    if (a[sortBy] < b[sortBy]) {
      return 1
    }
    return 0;
  }
}