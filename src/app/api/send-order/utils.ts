export function formatProductsForCRM(
  productsArray: { product_id: string; price: string; count: string }[],
) {
  const result: Record<number, (typeof productsArray)[number]> = {};
  productsArray.forEach((p, idx) => {
    result[idx + 1] = p;
  });
  return result;
}
