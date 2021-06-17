exports.handler = async (event) => {
    if(event.requestContext.authorizer) {
    console.log("🚀 ~ file: index.js ~ line 5 ~ exports.handler= ~ event.requestContext.authorizer", event.requestContext.authorizer.claims)
    }
    const response = {
        statusCode: 200,
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
