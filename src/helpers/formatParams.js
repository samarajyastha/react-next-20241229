export function formatSearchParams(searchParams) {
  const { limit, sort, min, max, brand } = searchParams;

  let query = "";

  if (limit) query = `${query == "" ? "" : query + "&"}limit=${limit}`;

  if (sort) query = `${query == "" ? "" : query + "&"}sort=${sort}`;

  if (min) query = `${query == "" ? "" : query + "&"}min=${min}`;

  if (max) query = `${query == "" ? "" : query + "&"}max=${max}`;

  if (brand) query = `${query == "" ? "" : query + "&"}brand=${brand}`;

  return query;
}
