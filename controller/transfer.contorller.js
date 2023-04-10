const Transfer = require('../models/transfer.model');
const User = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');

exports.valid = catchAsync(async (req, res, next) => {
  const { amount, accountNumber, senderUserId } = req.body;

  const validUser = await User.findOne({
    where: {
      accountNumber,
    },
  });
  if (!validUser) {
    return res.status(404).json({
      satatus: 'error',
      message: 'the userNamber not exist',
    });
  }

  const receiverUserId = validUser.accountNumber;

  const userMake = await User.findOne({
    where: {
      id: senderUserId,
    },
  });

  // if (amount > userMake) {
  //   return res.status(400).json({
  //     status: 'error',
  //     message: 'No tiene suficiente saldo en su cuenta',
  //   });
  // }

  if (receiverUserId === senderUserId) {
    return res.status(400).json({
      status: 'error',
      message: 'Cannot transfer money to your same account',
    });
  }

  // const newAmountUser = userMake.amount - amount;

  const newAmountUserReceiver = validUser.amount + amount;

  // await userMake.update({ amount: newAmountUser });

  await validUser.update({
    amount: newAmountUserReceiver,
  });

  await Transfer.create({ amount, senderUserId, receiverUserId });

  return res.status(200).json({
    status: 'success',
    message: 'The transfer has been successful',
  });
});
