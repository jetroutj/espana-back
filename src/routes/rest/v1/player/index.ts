const Router = require('express').Router;
const createPlayer =require ("../controller/player.controller");

module.exports = Router({ mergeParams: true })

    .post("/rest/v1/player", async (req:Request, res:Response) => {
        console.log(req.body);
        
        // await createPlayer(req.body)
        
    })