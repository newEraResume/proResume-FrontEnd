const OpenAI = require('openai');
const openai = new OpenAI.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const enhancePrompt = async (prompt) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: prompt }],
    model: 'gpt-3.5-turbo',
  });
  return completion;
};

module.exports = { enhancePrompt };