/**
 *
 */

const AmpOptimizer = require("@ampproject/toolbox-optimizer");
const ampOptimizer = AmpOptimizer.create(processOptions());

const express = require("express");
const app = express();

const port = 3000;

app.use(express.text());

const opts = {};
if (process.env.CANONICAL) {
  opts.canonical = process.env.CANONICAL;
}

app.post("/", (req, res) => {
  const originalHtml = req.body;
  ampOptimizer.transformHtml(originalHtml, opts).then(optimizedHtml => {
    res.send(optimizedHtml);
  });
});

app.listen(port, () => {
  console.log(`AMP Optimizer listening at http://localhost:${port}`);
});

function camelToSnakeCase(str) {
  str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function processOptions() {
  const opts = {};
  [
    "autoAddMandatoryTags", // defaults true
    "autoExtensionImport", // default true
    "format", // default AMP
    "fetch", // TODO: remove, cannot specify function.
    "experimentEsm",
    "imageBasePath", // default undefined. valid arg is a string.
    "imageOptimizer", // TODO: remove, cannot specify function.
    "lts", // default false
    "markdown", // default false
    "minify", // default true
    "preloadHeroImage", // default true
    "verbose" // default false
  ].forEach(option => {
    const snakeCaseOpt = camelToSnakeCase(option);
    if (snakeCaseOpt in process.env) {
      opts[option] = process.env.snakeCaseOpt;
    }
  });

  return opts;
}

process.on("SIGINT", function() {
  process.exit();
});
