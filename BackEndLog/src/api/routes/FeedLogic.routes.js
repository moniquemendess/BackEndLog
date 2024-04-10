//------------------------------------(Importaciones)------------------------------------------------------------------

const { checktoken } = require("../../middleware/auth.middleware");
const {
  createFeedLogic,
  getAllFeedLogic,
  getByIdFeedLogic,
  deleteFeedLogic,
  LikedFeed,
} = require("../controllers/FeedLogic.controllers");
const { upload } = require("../../middleware/files.middleware");
//----------------------------(Configuración de la Rutas con Express)----------------------------------------------------

const FeedLogicRoutes = require("express").Router();

//----------------------------------------(Rutas)-----------------------------------------------------------------------

//localhost:8080/api/v1/feedLogic

FeedLogicRoutes.get("/getAllFeedLogic", getAllFeedLogic);
FeedLogicRoutes.get("/idFeedLogic/:id", getByIdFeedLogic);

//---------------------------------------(Rutas Privadas)--------------------------------------------------------------

FeedLogicRoutes.post(
  "/createFeedLogic",
  upload.single("image"),
  checktoken,
  createFeedLogic
);
FeedLogicRoutes.delete("/deleteFeed/:id", checktoken, deleteFeedLogic);
FeedLogicRoutes.patch("/likedFeed/:idFeed", checktoken, LikedFeed);

// -----------------------------------(Exportaciones)-------------------------------------------------------------------

module.exports = FeedLogicRoutes;
