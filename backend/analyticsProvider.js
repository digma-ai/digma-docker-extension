const fetch = require("node-fetch");
const https = require("https");
const { momentJsDateParser } = require("./utils");

class AnalyticsProvider {
  constructor(url, token, customHeader) {
    this.url = url;
    this.token = token;
    this.customHeader = customHeader;
  }

  async getEnvironments() {
    try {
      const response = await this.send("GET", `/CodeAnalytics/environments`);
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async getAssets(environment, serviceNames) {
    try {
      const response = await this.send(
        "POST",
        `/CodeAnalytics/codeObjects/assets`,
        undefined,
        {
          environment,
          serviceNames,
        }
      );
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async getInsights(codeObjectIds, environment) {
    try {
      const response = await this.send(
        "POST",
        `/CodeAnalytics/codeObjects/insights`,
        undefined,
        {
          codeObjectIds,
          environment,
        }
      );
      return response;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  createSslAgent() {
    // when NODE_TLS_REJECT_UNAUTHORIZED = 0, it allows allows insecure http
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    return new https.Agent({ rejectUnauthorized: false });
  }

  async send(
    method,
    relativePath,
    queryParams,
    body,
    respondAsJsonObject = true
  ) {
    let url = new URL(relativePath, this.url).href;
    const agent = url.startsWith("https") ? this.createSslAgent() : undefined;

    if (queryParams) {
      url += "?";
      queryParams.forEach((val) => {
        url += `${val[0]}=${encodeURIComponent(val[1])}&`;
      });
    }
    const requestHeaders = { "Content-Type": "application/json" };
    if (this.token !== undefined && this.token.trim() !== "") {
      requestHeaders["Authorization"] = `Token ${this.token}`;
    }
    const customHeaderMatch = new RegExp(`^ *([^ ]+) *: *(.+[^ ]) *$`).exec(
      this.customHeader ?? ""
    );
    if (customHeaderMatch) {
      requestHeaders[customHeaderMatch[1]] = customHeaderMatch[2];
    }

    const response = await fetch(url, {
      agent: agent,
      method: method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const txt = await response.text();
      throw new HttpError(response.status, response.statusText, txt);
    }
    const responseBody = await response.text();
    if (respondAsJsonObject) {
      return JSON.parse(responseBody, momentJsDateParser);
    }
    return responseBody;
  }
}

class HttpError extends Error {
  constructor(status, statusText, responseText) {
    super(
      `Request failed with http code: [${status}] ${statusText}\nResponse: ${responseText}`
    );
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

module.exports = {
  AnalyticsProvider,
};
