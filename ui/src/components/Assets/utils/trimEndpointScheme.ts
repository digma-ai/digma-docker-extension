export const trimEndpointScheme = (route: string) => {
  const SCHEMES = ["epHTTP:", "epRPC:", "epConsumer:"];

  for (let scheme of SCHEMES) {
    if (route.startsWith(scheme)) {
      return route.replace(scheme, "");
    }
  }

  return route;
};
