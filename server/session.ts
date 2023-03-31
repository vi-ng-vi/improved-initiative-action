const RedisStore = require("../local_node_modules/connect-redis/dist/cjs")
  .default;
import { RequestHandler } from "express";
import expressSession = require("express-session");
import moment = require("moment");
import redis = require("redis");

import { probablyUniqueString } from "../common/Toolbox";

export default async function(
  redisConnectionString?: string
): Promise<RequestHandler> {
  let store: any = null;

  if (redisConnectionString) {
    const sessionClient = redis.createClient({
      url: redisConnectionString,
      socket: { tls: true, rejectUnauthorized: false }
    });
    sessionClient.on("error", err => {
      console.warn("Session Store Redis Client:", err);
    });
    await sessionClient.connect();
    store = new RedisStore({
      client: sessionClient
    });
  }

  const cookie = {
    maxAge: moment.duration(1, "weeks").asMilliseconds()
  };

  const session = expressSession({
    store: store || undefined,
    secret: process.env.SESSION_SECRET || probablyUniqueString(),
    resave: false,
    saveUninitialized: false,
    cookie
  });

  return session;
}
