const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }
  next();
};

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chacacter long'),
  // body('accountNumber')
  //   .notEmpty()
  //   .withMessage('accountNumber cannot be empty')
  //   .isLength({ min: 6 })
  //   .withMessage('accountNumber must be at least 6 chacacter long'),
  // body('amount').notEmpty().withMessage('amount cannot not'),

  validFields,
];
