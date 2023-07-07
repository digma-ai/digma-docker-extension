import { GetAssetsResponse } from "../Assets/types";

export const client = {
  host: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    openExternal: (url: string) => {}
  },
  extension: {
    vm: {
      service: {
        get: (url: string): string[] => [],
        post: (url: string, data: any): GetAssetsResponse => ({
          accountId: "",
          environment: "",
          serviceAssetsEntries: []
        })
      }
    }
  }
};
