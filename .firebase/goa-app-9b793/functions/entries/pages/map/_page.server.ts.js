const load = async ({ fetch, params, url }) => {
  console.log(`Search params are ${url.searchParams}`);
  const p = url.searchParams;
  const area = {
    "latlon": [
      p.get("lat"),
      p.get("lon")
    ]
  };
  const api_url = new URL(`https://goa.olek.site/v1/map`);
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(area)
  };
  const res = await fetch(api_url, requestOptions);
  const item = await res.json();
  return item;
};
export {
  load
};
