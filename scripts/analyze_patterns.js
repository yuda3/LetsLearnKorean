const fs = require('fs');
const path = require('path');

// Analyze patterns in quiz files
const quizzesDir = path.join(__dirname, '../data/quizzes');
const files = fs.readdirSync(quizzesDir).filter(f => f.endsWith('.ts'));

console.log('=== 퀴즈 패턴 분석 ===\n');

// Track common wrong answer patterns
const wrongAnswerPatterns = {};
let totalQuestions = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(quizzesDir, file), 'utf8');

  // Extract options arrays
  const optionsRegex = /options: \[([\s\S]*?)\]/g;
  let match;

  console.log(`\n[${file}]`);
  const filePatterns = {};
  let fileQuestions = 0;

  while ((match = optionsRegex.exec(content)) !== null) {
    fileQuestions++;
    totalQuestions++;

    const options = match[1]
      .split(',')
      .map(o => o.trim().replace(/^['"]|['"]$/g, ''))
      .filter(o => o.length > 0);

    // Check for common patterns in wrong answers
    options.forEach(option => {
      // Common ending patterns
      const patterns = [
        { pattern: /좋아요$/, name: '좋아요 (好きです/良いです)' },
        { pattern: /싫어요$/, name: '싫어요 (嫌いです)' },
        { pattern: /해요$/, name: '해요 (します)' },
        { pattern: /가요$/, name: '가요 (行きます)' },
        { pattern: /와요$/, name: '와요 (来ます)' },
        { pattern: /있어요$/, name: '있어요 (あります)' },
        { pattern: /없어요$/, name: '없어요 (ありません)' },
      ];

      patterns.forEach(({ pattern, name }) => {
        if (pattern.test(option)) {
          wrongAnswerPatterns[name] = (wrongAnswerPatterns[name] || 0) + 1;
          filePatterns[name] = (filePatterns[name] || 0) + 1;
        }
      });
    });
  }

  console.log(`  문제 수: ${fileQuestions}`);
  if (Object.keys(filePatterns).length > 0) {
    console.log('  반복 패턴:');
    Object.entries(filePatterns)
      .sort((a, b) => b[1] - a[1])
      .forEach(([pattern, count]) => {
        console.log(`    - ${pattern}: ${count}회`);
      });
  }
});

console.log('\n=== 전체 통계 ===');
console.log(`총 문제 수: ${totalQuestions}`);
console.log('\n가장 많이 반복되는 패턴:');
Object.entries(wrongAnswerPatterns)
  .sort((a, b) => b[1] - a[1])
  .forEach(([pattern, count]) => {
    const percentage = ((count / totalQuestions) * 100).toFixed(1);
    console.log(`  ${pattern}: ${count}회 (${percentage}%)`);
  });

console.log('\n=== 개선 제안 ===');
console.log('1. "좋아요" 패턴이 과도하게 사용됨 - 다양한 오답 패턴으로 대체');
console.log('   예시 대체안:');
console.log('   - 문맥에 맞지 않는 단어 (전혀 다른 의미)');
console.log('   - 문법적으로 틀린 형태');
console.log('   - 유사하지만 미묘하게 다른 표현');
console.log('   - 실제로 혼동하기 쉬운 단어');
console.log('\n2. 각 카테고리의 특성에 맞는 오답 설계');
console.log('   - travel: 교통, 숙박 관련 혼동하기 쉬운 표현');
console.log('   - restaurant: 음식, 주문 관련 실수하기 쉬운 표현');
console.log('   - shopping: 가격, 크기 관련 표현');
