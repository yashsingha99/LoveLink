const register = async(req, res) => {
     const {data, fullName, username, email, password, phone_no, qualification, working, current_working_type, current_working, current_working_company, yearly_income, avatars, body, discription, } = req.body;

}

const login = async(req, res) => {

}


// In this api we will take a query like -> how many profiles do you want ?
const getProfile = async(req, res) => {
 
}

const addFollowers = async(req, res) => {

}

const addfollowing = async (req, res) => {
  
}

// best profiles are add according to theirs :- age, location, working domain, all about personl info, 
// looking for :- (type of partner)
const addBestMatches = async (req, res) => {

}



module.exports = {
     register,
     login,
     getProfile,
     addFollowers,
     addfollowing,
     addBestMatches
}



