exports.handler = async function(event, context) {
	const name = event.queryStringParameters.name;

  return {
    body: `Hello ${name}`,
    statusCode: 200
  };
};

