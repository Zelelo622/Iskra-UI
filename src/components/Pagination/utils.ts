export type TPaginationItem = number | "start-ellipsis" | "end-ellipsis";

const range = (start: number, end: number): number[] =>
  Array.from({ length: Math.max(end - start + 1, 0) }, (_, i) => start + i);

export const getPaginationRange = (
  page: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number,
): TPaginationItem[] => {
  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(Math.max(totalPages - boundaryCount + 1, boundaryCount + 1), totalPages);

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, totalPages - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  );
  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    totalPages - boundaryCount - 1,
  );

  const startGap: TPaginationItem[] =
    siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < totalPages - boundaryCount
        ? [boundaryCount + 1]
        : [];

  const endGap: TPaginationItem[] =
    siblingsEnd < totalPages - boundaryCount - 1
      ? ["end-ellipsis"]
      : totalPages - boundaryCount > boundaryCount
        ? [totalPages - boundaryCount]
        : [];

  return [...startPages, ...startGap, ...range(siblingsStart, siblingsEnd), ...endGap, ...endPages];
};
