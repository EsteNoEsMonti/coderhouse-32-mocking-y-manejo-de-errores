import * as dotenv from "dotenv";

dotenv.config({
  path: "src/config/.env",
});

//server
const PORT = process.env.NODE_PORT;

//persitencia
const PERSISTENCIA = process.env.NODE_PERSISTENCIA;

const MONGODB_CNX_STR = process.env.NODE_MONGODB_CNX_STR;

//auth
const JWT_PRIVATE_KEY = "JWT_PRIVATE_KEY";
const COOKIE_KEY = "COOKIE_KEY";

const CLIENTID_GIT = process.env.NODE_CLIENTID_GIT;
const CLIENTSCR_GIT = process.env.NODE_CLIENTSCR_GIT;
const CALLBACK_URL_GIT = process.env.NODE_CALLBACK_URL_GIT;

const SESSION_SECRET = "SESSION_SECRET";

//views
const PATH_NEW_PRODUCT = process.env.NODE_PATH_NEW_PRODUCT;
const PATH_PRODUCT = process.env.NODE_PATH_PRODUCT;
const PATH_CARTS = process.env.NODE_PATH_CARTS;
const PATH_LOGIN = process.env.NODE_PATH_LOGIN;
const PATH_REGIS = process.env.NODE_PATH_REGIS;
const PATH_TICKETS = process.env.NODE_PATH_TICKETS;
const PATH_CHAT = process.env.NODE_PATH_CHAT;

export {
  PORT,
  PERSISTENCIA,
  MONGODB_CNX_STR,
  COOKIE_KEY,
  JWT_PRIVATE_KEY,
  CLIENTID_GIT,
  CLIENTSCR_GIT,
  CALLBACK_URL_GIT,
  SESSION_SECRET,
  PATH_CARTS,
  PATH_LOGIN,
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_REGIS,
  PATH_TICKETS,
  PATH_CHAT,
};
