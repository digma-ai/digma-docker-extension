export const toSpanCodeObjectId = (
  instrumentationLibrary: string,
  spanName: string
) => `span:${instrumentationLibrary}$_$${spanName}`;
