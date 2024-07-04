const mongoose = require("mongoose");
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

    password: {
      type: String,
      require: true,
    },

    phone_no: {
      type: String,
      require: true,
    },

    qualification: [
      // add more qualifications
      {
        type: String,
        require: true,
      },
    ],
    
    working :[
      {
        type : String,
        require : true
      },
      {
        type : String,
        require : true
      },
      {
        type : String,
        require : true
      }
    ],
    
    current_working_type : {
      type : String,
      require : true
    },
    
    current_working : {
      type : String,
      require : true
    },

    current_working_company : {
      type : String,
      require : true
    },

     yearly_income : {
      type : String,
      require : true
     },

    avatar: {
      type: String,
      default: "",
    },

    body: {
      // here you make a object for user body structure
      type: Object, // like : skin color, any body demages,
    },

    discription: {
      type: String,
      require: true,
    },

    about: {
      type: String,
      require: true,
    },

    DOB: {
      type: Date,
      require: true,
    },

    Achievments: [
      {
        type: String,
        require: true,
      },
    ],

    place: {
      type: String,
      require: true,
    },

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],

    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],

    marital_status: {
      type: Boolean,
      require: true,
    },

    diet : {
      type : String,
      require: true
    },

    sub_community : {
      type : String,
      require : true
    },

    isJoinedFamily : {
      type : Boolean,
      require : true
    },
    
     fun : [
      {
        type : String,
        require : true
      }
     ],
    
     creative : [
      {
        type : String,
        require : true
      }
     ],
    
     fitness : [
      {
        type : String,
        require : true
      }
     ],
    
     other_interest : [
      {
        type : String,
        require : true
      }
     ],

  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
