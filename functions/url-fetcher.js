const downloadURL = (url) => {
    return new Promise((resolve, reject) => {
        const http      = require('http'),
              https     = require('https');

        let client = http;

        if (url.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(false);
        });
    });
};


exports.handler = async function(event, context) {
	const url = event.queryStringParameters.url;

    let headers = {
        'Content-disposition': 'attachment; filename=file.mp4',
        'Content-type': 'video/mp4', 
    };

    try {
        const data = await downloadURL(url);

        return {
            headers,
            body: data,
            statusCode: 200
        };
    } catch(e) {
        return {
            body: "shit happened",
            statusCode: 422,
        }
    }

};

