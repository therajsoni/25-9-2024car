const multer = require('multer');
const uuid = require('uuid'); 

const storage = multer.diskStorage({
    destination(req,file,callback){
        callback(null,"uploads")
    }
    ,
    filename(req,file,callback){
        // 
        const id = uuid()
        const extName = file.originalname.split(".").pop();
        const fileName = `${id}.${extName}`
        // 
        callback(null,fileName) // originFilename
    }
    ,
});



export const singleUpload = multer({storage}).single("photo");


//api hai localhost:3000/ isme agar ui me filter button hai price and category ka price and category dono user ne select kiya then button par click kare to server se data filter ho kar pae agar price ko user select na bhi kare 