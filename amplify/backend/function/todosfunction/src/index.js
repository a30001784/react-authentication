/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	AUTH_REACTAUTHENTICATIONB5E59B12_USERPOOLID
	Env
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const listOfTodos = [
    {
        id: 1,
        title: 'Review the PR',
        done: false
    },
    {   
        id: 2,
        title: 'Attend the meeting',
        done: true 
    },
];

app.get('/todos', function(req, res) {
    // res.json({ success: 'get call succeed!', url: req.url });
    res.json(listOfTodos)
});

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        // body: JSON.stringify('Hello from Lambda!'),
    };
};
