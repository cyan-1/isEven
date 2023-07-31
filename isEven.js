const { Configuration, OpenAIApi } = require("openai");
const config = require("./config.json")

const configuration = new Configuration({
    apiKey: config.openAI_Key,
});
const openai = new OpenAIApi(configuration);

async function isEven(number) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You will be provided with a number you will reply with either true or false depnding if the number is even or not, in all lower case, however if it isn't a number you will say 'not a number'"}, 
            {role: "user", content: `${number}`}
        ],
    });
    return completion.data.choices[0].message.content;
}

module.exports = {
    isEven
};
