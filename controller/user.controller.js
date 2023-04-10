const User = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, password } = req.body;

  const accountNumber = Math.floor(
    Math.random() * (999999 - 100000 + 1) + 100000
  );

  const amount = 1000;

  const user = await User.create({
    name,
    password,
    accountNumber,
    amount,
  });

  res.status(201).json({
    status: 'success',
    message: 'The user has been created successfully!',
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { accountNumber, password } = req.body;

  const user = await User.findOne({
    where: {
      accountNumber,
      password,
    },
  });
  res.status(201).json({
    message: 'The user has been login successfully!',
    user,
  });
});
