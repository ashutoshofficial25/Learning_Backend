const requestValidateForCategoryName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: "Error",
      message: "Category is void",
    });
  }
  next();
};

module.exports = { requestValidateForCategoryName };
