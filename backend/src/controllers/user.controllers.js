const register = async (req, res) => {
  const {
    data,
    fullName,
    username,
    email,
    password,
    phone_no,
    qualification,
    working,
    current_working_type,
    current_working,
    current_working_company,
    yearly_income,
    avatars,
    body,
    discription,
  } = req.body;
};

const login = async (req, res) => {};

// In this api we will take a query like -> how many profiles do you want ?
const getProfile = async (req, res) => {};

const addFollowers = async (req, res) => {
  try {
    const { user, follower_user } = req.body;
    const { email, username } = user;
    const { follower_user_email, follower_user_name } = follower_user;
    if (!user) return res.status(400).json({ message: "Insufficient data" });
    const checkuser = await user.findById({
      $or: [email, username],
    });
    if (!checkuser)
      return res.status(400).json({ message: "user doesn't exist" });
    const check_follower_user = await user.findById({
      $or: [{ email: follower_user_email, username: follower_user_name }],
    });
    if (!check_follower_user)
      return res.status(400).json({ message: "following user doesn't exist" });
    const updateUser = await user.findByIdAndUpdate(
      checkuser._id,
      {
        $addToSet: { followers: check_follower_user._id },
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ user: updateUser, message: "successfully increment following" });
  } catch (error) {
    console.log("addFollowing => ", error);
  }
};

const addfollowing = async (req, res) => {
  try {
    const { user, following_user } = req.body;
    const { email, username } = user;
    const { following_user_email, following_user_name } = following_user;
    if (!user) return res.status(400).json({ message: "Insufficient data" });
    const checkuser = await user.findById({
      $or: [email, username],
    });
    if (!checkuser)
      return res.status(400).json({ message: "user doesn't exist" });
    const check_following_user = await user.findById({
      $or: [{ email: following_user_email, username: following_user_name }],
    });
    if (!check_following_user)
      return res.status(400).json({ message: "following user doesn't exist" });
    const updateUser = await user.findByIdAndUpdate(
      checkuser._id,
      {
        $addToSet: { following: check_following_user._id },
      },
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ user: updateUser, message: "successfully increment following" });
  } catch (error) {
    console.log("addFollowing => ", error);
  }
};

// best profiles are add according to theirs :- age, location, working domain, all about personl info,
// looking for :- (type of partner)
const addBestMatches = async (req, res) => {};

module.exports = {
  register,
  login,
  getProfile,
  addFollowers,
  addfollowing,
  addBestMatches,
};
