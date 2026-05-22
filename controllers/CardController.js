import express from "express";

const router = express.Router();

router.get("/card", function (req, res) {
  res.render("card");
});

export default router;