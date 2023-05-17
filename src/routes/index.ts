const router = require('express').Router();
// const { join }= require("path")
// const prefix = "/rest/";
// const routes = __dirname + prefix;
// const { readdirSync } = require("fs");
import { Request,Response } from 'express';




// const getDirectories = (path:any)=>{
//     readdirSync(path,{withFileTypes:true}).filter((obj:any) => obj.isDirectory()).map((obj:any)=>join(path,obj.name));

// }

// const getFiles = (path:any) =>{
// readdirSync(path,{withFileTypes:true}).filter((obj:any) => obj.isFile()&&obj.name.includes('.ts')).map((obj:any)=>join(path,obj.name));
// }
// const getFilesRecursively = (path:any) => {
//     let files:any;
// let dirs:any = getDirectories(path);
//     console.log(dirs);
    
//     for (const dir of dirs) {
//          files = getFilesRecursively(dir)
//     }
//     files.reduce((a:any,b:any) => a.concat(b), []);  
// // let files = dirs
// //     .map((dir:any) => {getFilesRecursively(dir)}) // go through each directory
// //     .reduce((a:any,b:any) => a.concat(b), []);    // map returns a 2d array (array of file arrays) so flatten
// return files.concat(getFiles(path));
// };

// getFilesRecursively(routes).forEach((file:any) => {
// router.use(require(file));
// });

module.exports = (app:any) => {

    app.use(async ( req:Request,res:Response, next:any) => {
		res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept, Referer, User-Agent");
        // const origin = req.get("origin") || req.headers.origin;
        // req.realIp = req.headers["x-real-ip"] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;


        next();
    })

    app.use(router);
}