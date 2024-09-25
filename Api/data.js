const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer'); // Multer for file uploads
const ApiFeatures = require("./utils/apiFeature");
const { validate } = require("uuid");
const app = express();
const upload = multer({ dest: 'uploads' });
const validator = require("validator");
const nodemailer = require("nodemailer")

const mongooseConnect = async() => {
    await mongoose.connect("mongodb://localhost:27017/Cars").then(()=>{
        console.log(`connect`);        
    }).catch((error)=>{
        console.log(`${error}`);        
    })
} 


mongooseConnect();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));


const {Schema} = mongoose;

const schema =   new Schema({
    name : {
        type : String,
        required  : true,
        set: value => value.replace(/\"/g, "")
    }
    ,
    price : {
        type : Number,
        required : true 
    }
    ,
    brand : {
        type : String,
        required : true  ,
        set: value => value.replace(/\"/g, "")
    }
    ,
    model: {
        type: String,
        required: true,
        set: value => value.replace(/\"/g, "") 
    },
    seller : {
        type : String,
        required  : true,
        set: value => value.replace(/\"/g, "")
    }
    ,
    performance : {
        type : String,
        required  : true,
        set: value => value.replace(/\"/g, "")
    }
    ,
    owner : {
        type : String,
        required  : true,
        enum : ["Localseller","seller"],
        set: value => value.replace(/\"/g, "")
    }
    ,
    miLeg : {
        type : Number,
        required  : true
    }
    ,
    serviving :{
        type :  Number,
        required  : true
    }
    ,
    photo : {
        type : String,
        required  : true
    },
      createdAt : Date,
      updatedAt : Date,
    }
,{
    timestamps:true,
}
)

// schema.virtual("age").get(function(){
//     const today = new Date();
//     const dob = this.year;
//     let age = today.getFullYear() - dob.getFullYear();
//     if (
//         today.getMonth() < dob.getMonth() ||
//         (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
//       ) {
//         age--;
//       }
    
//       return age;
// })


// const OTP_EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes
// const OTP_LENGTH = 6;



// const userSchema = new Schema({
//   name : {
//     type : String,
//     required : [true,"please enter your great name"],
//   }
//   ,
//   email : {
//     type : String,
//     required : true, 
//     validator: function (v) {
//     return validator.isEmail(v);  // Use the validator's isEmail method
//     },
//     message: props => `${props.value} is not a valid email!`,
//     unique : [true,"This email assest"] 
//   }
//   ,
//   phone : { 
//     type : String,
//     required : true,
//     validator: function (v) {
//         return validator.isMobilePhone(v);  // Use the validator's isEmail method
//         },
//         message: props => `${props.value} is not a valid Phone`,
//         unique : [true,"This Phone number assest"]  
//   },
//   otp: {
//     type: String,
//     required: false
// },
// otpExpiresAt: {
//     type: Date,
//     required: false
// }
// })



// const User = mongoose.model("User",userSchema)

// const generateOTP = (length = OTP_LENGTH) => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
// }

// // POST request to register new user and send OTP if user doesn't exist
// app.post("/postNewUser", async (req, res) => {
//     try {
//         const { name, email, phone } = req.body;

//         // Check if user already exists
//         const existingUser = await User.findOne({ name, email });
//         if (existingUser) {
//             return res.status(409).json({
//                 message: "User already exists"
//             });
//         }

//         // Generate OTP and set expiration time
//         const otp = generateOTP();
//         const otpExpiresAt = Date.now() + OTP_EXPIRATION_TIME;

//         // Create a new user with OTP
//         const newUser = await User.create({
//             name, email, phone, otp, otpExpiresAt
//         });

//         // Configure nodemailer to send OTP via email
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'your-email@gmail.com',  // Replace with your email
//                 pass: 'your-email-password'    // Replace with your email password or app-specific password
//             }
//         });

//         const mailOptions = {
//             from: 'your-email@gmail.com',
//             to: email,
//             subject: 'Your OTP for registration',
//             text: `Your OTP is ${otp}. It will expire in 10 minutes.`
//         };

//         // Send email
//         await transporter.sendMail(mailOptions);

//         return res.status(200).json({
//             message: "OTP sent successfully",
//             userId: newUser._id
//         });

//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred",
//             error: error.message
//         });
//     }
// });

// // POST request to verify OTP
// app.post("/verifyOTP", async (req, res) => {
//     try {
//         const { userId, otp } = req.body;

//         // Find the user by ID
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Check if OTP is valid and not expired
//         if (user.otp === otp && user.otpExpiresAt > Date.now()) {
//             return res.status(200).json({
//                 message: "OTP verified successfully",
//                 user
//             });
//         } else {
//             return res.status(400).json({
//                 message: "Invalid or expired OTP"
//             });
//         }

//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred",
//             error: error.message
//         });
//     }
// });

// // POST request to resend OTP
// app.post("/resendOTP", async (req, res) => {
//     try {
//         const { userId } = req.body;

//         // Find the user by ID
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Generate a new OTP and update the expiration time
//         const newOtp = generateOTP();
//         const newOtpExpiresAt = Date.now() + OTP_EXPIRATION_TIME;

//         user.otp = newOtp;
//         user.otpExpiresAt = newOtpExpiresAt;
//         await user.save();

//         // Send the new OTP via email
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'your-email@gmail.com',
//                 pass: 'your-email-password'
//             }
//         });

//         const mailOptions = {
//             from: 'your-email@gmail.com',
//             to: user.email,
//             subject: 'Your new OTP',
//             text: `Your new OTP is ${newOtp}. It will expire in 10 minutes.`
//         };

//         await transporter.sendMail(mailOptions);

//         return res.status(200).json({
//             message: "New OTP sent successfully",
//         });

//     } catch (error) {
//         return res.status(500).json({
//             message: "An error occurred",
//             error: error.message
//         });
//     }
// });

  

schema.pre('save', function (next) {
    this.name = this.name.replace(/\\/g, ""); // Remove backslashes from 'name'
    this.brand = this.brand.replace(/\\/g, ""); // Remove backslashes from 'brand'
    // You can do similar for other fields if needed
  
    next();
  });

const Car = mongoose.model("CarList",schema);

app.get("/getAllData",async(req,res)=>{

    try{

        const CarsPerPage = 100;
        const apiFeature = new ApiFeatures(Car.find(), req.query).search().filter().pagination(CarsPerPage);
        const products = await apiFeature.query;
        // const CarData = await Car.find({});
        return res.status(200).json({
            message: "getAllData",
            success: true,
            data: products,
            total: await Car.countDocuments(), // Total number of cars for pagination
            currentPage: apiFeature.currentPage || 1, // Current page number
            totalPages: Math.ceil(await Car.countDocuments() / CarsPerPage)
        });
    }
    catch(error){
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }

})


app.get("/:id",async(req,res)=>{

    try {
        const carData = await Car.findById(req.params.id);
        res.status(200).json({
            message : "found car",
            success : true,
            carDetails : carData
        })
    } catch (error) {
        res.status(500).json({
            message : "found not car",
            success : false 
        })
    }
})


app.post("/add-cars",  upload.single('photo'), async(req,res)=>{
    try {
        
        const { name, price, brand,model, seller, performance,owner, miLeg, serviving } = req.body;        
        
        const photo = req.file;
        
        
        // if(name && price && brand &&seller&& year &&performance&& owner &&MiLeg&& serviving &&photo){
         
        const car =  await Car.create({
                name, price ,brand ,seller ,model, performance ,owner, miLeg ,serviving,photo:`${req.protocol}://${req.get('host')}/uploads/${photo.filename}`
            });

            return res.status(201).json({
                success : true,
                message : "Product create Successfully",
                car
            })

    // }else{
    //     res.send("ADD ALL Fields").status(401).json({
    //         message : "ADD ALL Fields",
    //         success : false,  
    //     })
    // }


    } catch (error) {
        return res.send(error).status(500).json({
            message : "ADD ALL Fields",
            success : false,  
        })
    }
})


app.delete("/delete",async(req,res)=>{
    await Car.deleteMany();
    res.status(200).send("delete")
})



app.listen(3000);