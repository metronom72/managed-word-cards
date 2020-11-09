export interface Pagination {
  total: number;
  last: number;
  perPage: number;
  current: number;
  canPrev: boolean;
  canNext: boolean;
  leftDots: boolean;
  rightDots: boolean;
  disabled: boolean;
}

export const generatePagination = (total: number, current: number, perPage: number) => {
  const last: number = Math.ceil(total / perPage);
  console.log(total, current, perPage, last);
  return {
    total,
    last,
    perPage,
    current,
    canPrev: current !== 1,
    canNext: current  !== last,
    rightDots: current !== last && current !== last - 1,
    leftDots: current !== 1 && current !== 2,
    disabled: total === 0,
  };
};
