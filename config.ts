const getEnvironmentVariable = (environmentVariable: string): string => {
    const unvalidatedEnvironmentVariable = process.env[environmentVariable];
    if (!unvalidatedEnvironmentVariable) {
      throw new Error(
        `Couldn't find environment variable: ${environmentVariable}`
      );
    } else {
      return unvalidatedEnvironmentVariable;
    }
  };
  
  export const config = {
    apiKey: getEnvironmentVariable("OPENAI_KEY"),
    nylasAPI: getEnvironmentVariable("NYLAS_API_KEY"),
    clientId: getEnvironmentVariable("NYLAS_CLIENT_ID"),
    callbackUri: "http://localhost:3000/",
    apiUri: getEnvironmentVariable("NYLAS_API_URI"),
  };
  