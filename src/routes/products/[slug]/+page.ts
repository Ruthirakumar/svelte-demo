/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    productId: params.slug,
  };
}
