export const highlight = (value: string, filter: string): string => {
  if (!value.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    return value;

  const startPosition = value
    .toLocaleLowerCase()
    .indexOf(filter.toLocaleLowerCase());
  const endPosition = startPosition + filter.length;

  const result =
    value.slice(0, startPosition) +
    "<b>" +
    value.slice(startPosition, endPosition) +
    "</b>" +
    value.slice(endPosition);

  return result;
};
