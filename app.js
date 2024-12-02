import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

import 'dotenv/config';

const llm = new ChatGoogleGenerativeAI({
  model: 'gemini-1.5-flash-latest',
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

console.log('Protótipo de IA Gen');
console.log('<><><><><><><><><>');

const question = "Como são os problemas da educação no Brasil?";
console.log(`Pergunta: ${question}`);

const response = await llm.invoke(question);
console.log(`Resposta: ${response.content}`);