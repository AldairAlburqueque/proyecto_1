const Transfer = require('../models/transfer.model');
const User = require('../models/users.model');

// exports.validUserName = async (req, res, next) => {
//   const { senderUserId } = req.body;

//   const userMakeTransfer = await User.findOne({
//     where: {
//       id: senderUserId,
//     },
//   });

//   // req.userMakeTransfer = userMakeTransfer;
//   // next();
// };
