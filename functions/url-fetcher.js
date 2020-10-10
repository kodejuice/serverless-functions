exports.handler = async function(event, context) {
	const name = event.queryStringParameters.name;

  return {
    body: `Hello ${mame}`,
    statusCode: 200
  };
};

