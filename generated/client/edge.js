Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
} = require("./runtime/edge.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.VisitanteScalarFieldEnum = {
  id: "id",
  nome: "nome",
  email: "email",
  empresa: "empresa",
  printed: "printed",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.ModelName = {
  Visitante: "Visitante",
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js",
    },
    "output": {
      "value":
        "/Users/eduardoferreira/Documents/JavaScript-TypeScript/Deno/deno-api-oak-prisma/generated/client",
      "fromEnvVar": null,
    },
    "config": {
      "engineType": "library",
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true,
      },
    ],
    "previewFeatures": [
      "deno",
    ],
    "isCustomOutput": true,
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env",
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.11.0",
  "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
  "datasourceNames": [
    "db",
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null,
      },
    },
  },
  "inlineSchema":
    '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n  previewFeatures = ["deno"]\n  output = "../generated/client"\n}\n\ndatasource db {\n  provider  = "postgresql"\n  url       = env("DATABASE_URL")\n  directUrl = env("DIRECT_URL")\n}\n        \n\nmodel Visitante {\n  id      Int    @id @default(autoincrement())\n  nome    String\n  email   String\n  empresa String\n  printed Boolean\n}',
  "inlineSchemaHash":
    "123c938ab4dd4b6d2b959a841b6dfe636b038283b5b0858c6a972cd27aae35df",
  "copyEngine": false,
};
config.dirname = "/";

config.runtimeDataModel = JSON.parse(
  '{"models":{"Visitante":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"empresa","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"printed","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL:
      typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] ||
      typeof process !== "undefined" && process.env &&
        process.env.DATABASE_URL ||
      undefined,
  },
});

if (
  typeof globalThis !== "undefined" && globalThis["DEBUG"] ||
  typeof process !== "undefined" && process.env && process.env.DEBUG ||
  undefined
) {
  Debug.enable(
    typeof globalThis !== "undefined" && globalThis["DEBUG"] ||
      typeof process !== "undefined" && process.env && process.env.DEBUG ||
      undefined,
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
