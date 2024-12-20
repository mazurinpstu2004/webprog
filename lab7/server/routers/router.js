const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

const {
  getEarlyAccessData,
  postEarlyAccessData,
} = require("../controllers/earlyAccessDataController");

router.route("/early-access").get(getEarlyAccessData).post(postEarlyAccessData);

const {
  getEarlyAccessRectangleData,
  postEarlyAccessRectangleData,
} = require("../controllers/earlyAccessRectangleDataController");

router.route("/early-access-rectangle").get(getEarlyAccessRectangleData).post(postEarlyAccessRectangleData);

const {
  getBlogData,
  postBlogData,
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogData).post(postBlogData);

const {
  getFinalData,
  postFinalData,
} = require("../controllers/finalDataController");

router.route("/final").get(getFinalData).post(postFinalData)

module.exports = router;
