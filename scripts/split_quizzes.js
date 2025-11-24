const fs = require('fs');
const path = require('path');

// Read the original quiz data file
const quizDataPath = path.join(__dirname, '../data/quizData.ts');
const content = fs.readFileSync(quizDataPath, 'utf8');

// Extract the questions array
const questionsMatch = content.match(/export const quizQuestions: Question\[\] = \[([\s\S]*?)\];[\s\S]*?\/\/ カテゴリー別/);
if (!questionsMatch) {
  console.error('Could not find questions array');
  process.exit(1);
}

const questionsText = questionsMatch[1];

// Parse questions by splitting on question objects
const questions = [];
let currentQuestion = '';
let braceCount = 0;
let inQuestion = false;

for (let i = 0; i < questionsText.length; i++) {
  const char = questionsText[i];

  if (char === '{' && questionsText.slice(i - 2, i).trim() === '') {
    inQuestion = true;
    braceCount = 1;
    currentQuestion = '{';
    continue;
  }

  if (inQuestion) {
    currentQuestion += char;
    if (char === '{') braceCount++;
    if (char === '}') braceCount--;

    if (braceCount === 0) {
      questions.push(currentQuestion);
      currentQuestion = '';
      inQuestion = false;
    }
  }
}

// Group questions by category
const categorizedQuestions = {};
const categoryDifficulty = {
  basic: 'beginner',
  gratitude: 'beginner',
  daily: 'beginner',
  numbers: 'beginner',
  travel: 'intermediate',
  shopping: 'intermediate',
  restaurant: 'intermediate',
  emergency: 'advanced',
};

questions.forEach((q) => {
  const categoryMatch = q.match(/category: '(\w+)'/);
  if (categoryMatch) {
    const category = categoryMatch[1];
    if (!categorizedQuestions[category]) {
      categorizedQuestions[category] = [];
    }
    categorizedQuestions[category].push(q);
  }
});

// Ensure output directory exists
const outputDir = path.join(__dirname, '../data/quizzes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write each category to a separate file
Object.keys(categorizedQuestions).forEach((category) => {
  const questions = categorizedQuestions[category];
  const difficulty = categoryDifficulty[category] || 'beginner';

  const fileContent = `import { Question } from '../../types';

// ${category} - ${difficulty} level
export const ${category}Questions: Question[] = [
${questions.join(',\n')}
];
`;

  const outputPath = path.join(outputDir, `${category}.ts`);
  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log(`Created ${category}.ts with ${questions.length} questions`);
});

console.log('\nSplit complete!');
console.log('Categories:', Object.keys(categorizedQuestions).join(', '));
