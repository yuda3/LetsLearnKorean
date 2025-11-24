import { Question } from '../../types';

// gratitude - beginner level
export const gratitudeQuestions: Question[] = [
{
    id: 8,
    category: 'gratitude',
    questionJa: '感謝を表現するとき',
    question: '「ありがとうございます」のより丁寧な表現は？',
    options: [
      '고마워',
      '감사합니다',
      '괜찮아요',
      '미안해요',
    ],
    correctAnswer: 1,
    explanation: '「감사합니다」は「ありがとうございます」の最も丁寧な表現です。',
    detailedExplanation:
      '感謝の表現レベル：고마워(カジュアル・友達間)< 고마워요(丁寧)< 고맙습니다(より丁寧)< 감사합니다(最も丁寧・ビジネスや目上の人に)。初対面や公式な場面では「감사합니다」が安全です。',
  },
{
    id: 9,
    category: 'gratitude',
    questionJa: '感謝への返答',
    question: '「どういたしまして」は韓国語で？',
    options: [
      '천만에요',
      '아니에요',
      '괜찮아요',
      '모두 정답',
    ],
    correctAnswer: 3,
    explanation: 'すべて「どういたしまして」の意味で使えます。',
    detailedExplanation:
      '천만에요(どういたしまして・やや古風)、아니에요(いいえ・謙遜)、괜찮아요(大丈夫です)はすべて感謝への返答として使えます。カジュアルには「아니야」もよく使われます。',
  },
{
    id: 37,
    category: 'gratitude',
    questionJa: 'お礼を言う（カジュアル）',
    question: '友達に「ありがとう」と言うときは？',
    options: [
      '고마워',
      '감사합니다',
      '죄송합니다',
      '괜찮아요',
    ],
    correctAnswer: 0,
    explanation: '「고마워」は友達同士で使うカジュアルな「ありがとう」です。',
    detailedExplanation:
      '고마워(ありがとう・カジュアル)、고마워요(ありがとう・丁寧)、감사합니다(ありがとうございます・最も丁寧)。親しい間柄では「고마워」が自然です。',
  },
{
    id: 38,
    category: 'gratitude',
    questionJa: '親切への感謝',
    question: '「親切にしてくださってありがとうございます」は？',
    options: [
      '친절하게 해주셔서 감사합니다',
      '친절해요',
      '잘 해요',
      '고마워요',
    ],
    correctAnswer: 0,
    explanation: '「친절하게 해주셔서」は「親切にしてくださって」の丁寧な表現です。',
    detailedExplanation:
      '친절하다(親切だ)、하다(する)、주시다(くださる・謙譲)、아서/어서(〜て)、감사하다(感謝する)。長い感謝表現の構造を覚えましょう。',
  },
{
    id: 39,
    category: 'gratitude',
    questionJa: '助けてもらったとき',
    question: '「助けてくれてありがとう」は？',
    options: [
      '도와줘서 고마워',
      '도와주세요',
      '도와줄게요',
      '도와주고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「도와줘서 고마워」は「助けてくれてありがとう」です。',
    detailedExplanation:
      '돕다(助ける)、주다(くれる)、아서/어서(〜て)、고맙다(ありがたい)。より丁寧には「도와주셔서 감사합니다」を使います。',
  },
{
    id: 40,
    category: 'gratitude',
    questionJa: '待ってくれたことへの感謝',
    question: '「待ってくれてありがとう」は？',
    options: [
      '기다려줘서 고마워',
      '기다릴게요',
      '기다려 주세요',
      '기다렸어요',
    ],
    correctAnswer: 0,
    explanation: '「기다려줘서 고마워」は「待ってくれてありがとう」という意味です。',
    detailedExplanation:
      '기다리다(待つ)、주다(くれる)、아서/어서(〜て)、고맙다(ありがたい)。基本パターン：動詞 + 아/어 줘서 고마워/감사합니다。',
  },
{
    id: 41,
    category: 'gratitude',
    questionJa: '招待への感謝',
    question: '「招待してくださってありがとうございます」は？',
    options: [
      '초대해 주셔서 감사합니다',
      '초대할게요',
      '초대하고 싶어요',
      '초대했어요',
    ],
    correctAnswer: 0,
    explanation: '「초대해 주셔서 감사합니다」は丁寧な感謝の表現です。',
    detailedExplanation:
      '초대하다(招待する)、주시다(くださる・尊敬)、아서/어서(〜て)、감사하다(感謝する)。パーティーや食事の招待に使います。',
  },
{
    id: 42,
    category: 'gratitude',
    questionJa: 'プレゼントへの感謝',
    question: '「素敵なプレゼントありがとう」は？',
    options: [
      '멋진 선물 고마워',
      '선물을 주세요',
      '선물을 받았어요',
      '선물이 있어요',
    ],
    correctAnswer: 0,
    explanation: '「멋진 선물 고마워」は「素敵なプレゼントありがとう」です。',
    detailedExplanation:
      '멋지다(素敵だ)、선물(プレゼント)、고맙다(ありがたい)。より丁寧には「멋진 선물 감사합니다」も使えます。',
  },
{
    id: 43,
    category: 'gratitude',
    questionJa: 'いつもの感謝',
    question: '「いつもありがとうございます」は？',
    options: [
      '항상 감사합니다',
      '가끔 감사합니다',
      '한 번 감사합니다',
      '내일 감사합니다',
    ],
    correctAnswer: 0,
    explanation: '「항상」は「いつも」、「감사합니다」は「ありがとうございます」です。',
    detailedExplanation:
      '항상(いつも・常に)、가끔(時々)、한 번(一度)、매일(毎日)。頻度を表す副詞と一緒に使える表現です。',
  }
];
