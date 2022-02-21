const errorHandler = (error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  console.error(error.stack);
  response.status(404).send({ message: "not found" });
};

export default errorHandler;
