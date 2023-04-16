const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);

export default function SuggestListPage(props) {
  console.log(props);
  const response = openai.createCompletion({
    model: "gpt-3.5-turbo",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });
  console.log(response.data);
  return <div>no data</div>;
}
