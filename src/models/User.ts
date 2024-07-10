import mongoose,{Schema,Document, model, models} from "mongoose";

export interface Message extends Document{
    content:string,
    createdAt:Date,
}

const MessageSchema:Schema<Message>=new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    Accepting:boolean;
    Verified:boolean;
    message:Message[];
}

const UserSchema:Schema<User>=new Schema({
    username:{
        type:String,
        required:[true,"Username is mandatory"],
        trim:true,
        unique:true
    },

    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/.+\@.+\..+/,"please enter a valid email id"]
    },

    password:{
        type:String,
        required:[true,"Password is required"],
        
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is required"], 
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,'This field is required'], 
    },
    Accepting:{
        type:Boolean,
        default:true
    },
    Verified:{
        type:Boolean,
        default:false
    },
    message:[MessageSchema]
})

const UserModel = (models.User as mongoose.Model<User>) || (model<User>("User",UserSchema))

export default UserModel;