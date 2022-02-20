const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err.stack);
  res.status(404).send({ message: "not found" });
};

export default errorHandler;
