var fs = require("fs");
var http = require("http");
var process = require("process");
var express = require("express");
const { AnalyticsProvider } = require("./analyticsProvider");
var app = express();
app.use(express.json());

var analyticsProvider = new AnalyticsProvider("https://digma-compound:5051");

app.get("/environments", async function (req, res) {
  try {
    const environments = await analyticsProvider.getEnvironments();
    res.send(environments);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get("/environments/:environmentId/asset-types", async function (req, res) {
  try {
    const assetTypes = await analyticsProvider.getAssetTypes({
      environment: req.params.environmentId
    });
    res.send(assetTypes);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get("/environments/:environmentId/assets", async function (req, res) {
  try {
    const assets = await analyticsProvider.getAssets({
      environment: req.params.environmentId,
      sortBy: req.query.sortBy,
      sortOrder: req.query.order,
      assetType: req.query.type,
      displayName: req.query.search,
      page: req.query.page,
      pageSize: req.query.pageSize
    });
    res.send(assets);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get(
  "/environments/:environmentId/assets/:assetId/insights",
  async function (req, res) {
    try {
      const insights = await analyticsProvider.getInsightsOfSingle(
        req.params.assetId,
        req.params.environmentId
      );

      res.send(insights);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

app.post("/environments/:environmentId/insights", async function (req, res) {
  try {
    const insights = await analyticsProvider.getInsights(
      req.body.codeObjectIds,
      req.params.environmentId
    );

    res.send(insights);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

var sock = process.argv[2];

fs.stat(sock, function (err) {
  if (!err) {
    fs.unlinkSync(sock);
  }
  http.createServer(app).listen(sock, function () {
    fs.chmodSync(sock, "777");
    console.log("Express server listening on " + sock);
  });
});
