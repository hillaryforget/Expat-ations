import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { budgetMin, budgetMax, age, activity } = req.body;
  const prompt = generatePrompt(budgetMin, budgetMax, age, activity);
  console.log(prompt);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 2048,
  });

  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(budgetMin, budgetMax, age, activity) {
  return `suggest 5 cities to travel with minimum budget of ${budgetMin}$ and max budget of ${budgetMax}$ who is ${age} years old and likes ${activity}`;
}
