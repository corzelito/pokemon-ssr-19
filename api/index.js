export default import("../dist/pokemon-ssr/server/server.mjs").then((module) =>
  module.app()
);
