exports.handler = async(event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringyify('Hello from Lambda!'),
  };
  return response;
}