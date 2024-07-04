const mongoose = require('mongoose')
const userSchema = await mongoose.Schema(
  {

    fullName: {
      type: String,
      require: true,
    },

    username: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
    },

    password : {
     type : String,
     require : true
    },

    phone_no: {
      type: String,
      require: true,
    },

    qualification: [      // add more qualifications
       {
         type: String,
         require: true,
       },
    ],

    avatar : {
        type : String,
        default : ""
    },

    body : {            // here you make a object for user body structure 
        type : Object  // like : skin color, any body demages, 
    }, 

    discription : {
        type : String,
        require : true
    },

    about : {
        type : String,
        require : true
    },

    DOB : {
        type : Date,
        require : true
    },

    Achievments : {
        type : String,
        require : true
    },

    place : {
        type : String,
        require : true
    },

    followers : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
      }
    ],

    following : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
      }
    ]

  },
  {
    timestamps: true,
  }
);

const User = await mongoose.model("User", userSchema);
module.exports = User