// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import cors from "cors"

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";
import productRouter from "../web/backend/routes/productRoutes.js";
import checkoutRouter from "../web/backend/routes/checkoutRoutes.js";
import collectionRouter from "../web/backend/routes/collectionRoutes.js";
import subscriptionRouter from "../web/backend/routes/attentiveMobileRoutes.js"
import dotenv from "dotenv"

process.env.NODE_ENV !== "production" ? console.log(dotenv.config({path: '../.env'})) : ''

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);


const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();
app.use(cors())

// Set up Shopify authentication and webhook handling
// app.get(shopify.config.auth.path, shopify.auth.begin());
// app.get(
//   shopify.config.auth.callbackPath,
//   shopify.auth.callback(),
//   shopify.redirectToShopifyOrAppRoot()
// );
// app.post(
//   shopify.config.webhooks.path,
//   shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
// );

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

// app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.use('/api/products', productRouter)
app.use('/api/checkouts', checkoutRouter)
app.use('/api/collections', collectionRouter)
app.use('/api/subscriptions', subscriptionRouter)

app.listen(PORT);
