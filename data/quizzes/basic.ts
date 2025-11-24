import { Question } from '../../types';

// basic - beginner level
export const basicQuestions: Question[] = [
{
    id: 10,
    category: 'basic',
    questionJa: '謝罪の表現',
    question: '「すみません」「ごめんなさい」は？',
    options: [
      '죄송합니다',
      '감사합니다',
      '안녕하세요',
      '잘 먹겠습니다',
    ],
    correctAnswer: 0,
    explanation: '「죄송합니다」は丁寧な謝罪の表現です。',
    detailedExplanation:
      '謝罪のレベル：미안해(カジュアル)< 미안해요(丁寧)< 미안합니다(より丁寧)< 죄송합니다(最も丁寧)。ビジネスや目上の人には「죄송합니다」を使います。',
  },
{
    id: 11,
    category: 'basic',
    questionJa: '食事の前に',
    question: '「いただきます」は韓国語で？',
    options: [
      '잘 먹겠습니다',
      '잘 먹었습니다',
      '맛있어요',
      '배불러요',
    ],
    correctAnswer: 0,
    explanation: '「잘 먹겠습니다」は食事の前に言う挨拶です。',
    detailedExplanation:
      '食事の挨拶：잘 먹겠습니다(いただきます・before)、잘 먹었습니다(ごちそうさまでした・after)。レストランなどでは省略されることも多いです。',
  },
{
    id: 12,
    category: 'basic',
    questionJa: '質問をするとき',
    question: '「すみません、質問があります」は？',
    options: [
      '저기요, 질문 있어요',
      '여기요, 대답 있어요',
      '안녕하세요, 물어요',
      '죄송해요, 말해요',
    ],
    correctAnswer: 0,
    explanation: '「저기요」は人を呼ぶ時、「질문 있어요」は「質問があります」です。',
    detailedExplanation:
      '저기요(すみません・人を呼ぶ)、질문(質問)、있어요(あります)。レストランで店員を呼ぶ時も「저기요」を使います。',
  },
{
    id: 44,
    category: 'basic',
    questionJa: '理解を示す',
    question: '「わかりました」は韓国語で？',
    options: [
      '알겠어요',
      '모르겠어요',
      '물어요',
      '몰라요',
    ],
    correctAnswer: 0,
    explanation: '「알겠어요」は「わかりました」「了解しました」という意味です。',
    detailedExplanation:
      '알다(知る・わかる)、모르다(知らない・わからない)、겠(意志・推測)、어요(丁寧語尾)。カジュアルには「알았어」も使います。',
  },
{
    id: 45,
    category: 'basic',
    questionJa: 'お願いするとき',
    question: '「お願いします」は韓国語で？',
    options: [
      '부탁해요',
      '부탁드려요',
      '부탁합니다',
      '모두 정답',
    ],
    correctAnswer: 3,
    explanation: 'すべて「お願いします」の意味で、丁寧さのレベルが異なります。',
    detailedExplanation:
      '부탁하다(お願いする)。부탁해요(お願いします・普通)、부탁드려요(お願いします・謙譲)、부탁합니다(お願いします・フォーマル)。',
  },
{
    id: 46,
    category: 'basic',
    questionJa: '許可を求める',
    question: '「〜してもいいですか？」は？',
    options: [
      '〜해도 돼요?',
      '〜해야 돼요?',
      '〜하면 안 돼요?',
      '〜할 수 없어요?',
    ],
    correctAnswer: 0,
    explanation: '「해도 돼요?」は「〜してもいいですか?」という許可を求める表現です。',
    detailedExplanation:
      '아도/어도 되다(〜してもよい)、아야/어야 되다(〜しなければならない)、으면/면 안 되다(〜してはいけない)、을/를 수 없다(〜できない)。',
  },
{
    id: 47,
    category: 'basic',
    questionJa: '禁止を伝える',
    question: '「〜してはいけません」は？',
    options: [
      '〜하면 안 돼요',
      '〜해도 돼요',
      '〜할 수 있어요',
      '〜하고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「하면 안 돼요」は「〜してはいけません」という禁止表現です。',
    detailedExplanation:
      '으면/면 안 되다(〜してはいけない)、아도/어도 되다(〜してもよい)、을/를 수 있다(〜できる)、고 싶다(〜したい)。',
  },
{
    id: 48,
    category: 'basic',
    questionJa: 'ちょっと待って',
    question: '「ちょっと待ってください」は？',
    options: [
      '잠깐만요',
      '잠시만요',
      '잠시만 기다려 주세요',
      '모두 정답',
    ],
    correctAnswer: 3,
    explanation: 'すべて「ちょっと待ってください」の意味で使えます。',
    detailedExplanation:
      '잠깐(ちょっと・短い時間)、잠시(少しの間)、기다리다(待つ)、주세요(ください)。잠깐만요と잠시만요は略された形で、最も自然によく使われます。',
  },
{
    id: 49,
    category: 'basic',
    questionJa: '体調が悪いとき',
    question: '「気分が悪いです」は韓国語で？',
    options: [
      '기분이 안 좋아요',
      '몸이 안 좋아요',
      '아파요',
      '모두 正解（ニュアンス違い）',
    ],
    correctAnswer: 3,
    explanation: 'すべて体調不良を表しますが、ニュアンスが異なります。',
    detailedExplanation:
      '기분이 안 좋아요(気分が悪い・心理的)、몸이 안 좋아요(体調が悪い)、아파요(痛い・病気)。状況に応じて使い分けます。',
  },
{
    id: 50,
    category: 'basic',
    questionJa: '好きを伝える',
    question: '「〜が好きです」は韓国語で？',
    options: [
      '〜을/를 좋아해요',
      '〜이/가 싫어요',
      '〜을/를 사랑해요',
      '〜이/가 좋아요',
    ],
    correctAnswer: 0,
    explanation: '「좋아하다」は「好きだ」という意味の動詞です。',
    detailedExplanation:
      '좋아하다(好きだ・動詞)、싫어하다(嫌いだ)、사랑하다(愛する)。「좋다」(良い・形容詞)との違いに注意：이/가 좋아요(〜が良い)。',
  },
{
    id: 51,
    category: 'basic',
    questionJa: '確認をする',
    question: '「本当ですか？」は韓国語で？',
    options: [
      '정말이에요?',
      '진짜예요?',
      '정말요?',
      'すべて正解',
    ],
    correctAnswer: 3,
    explanation: 'すべて「本当ですか？」の意味で使えます。',
    detailedExplanation:
      '정말(本当に・やや正式)、진짜(本当に・口語)、정말요?(本当ですか?・丁寧)、진짜?(マジで?・カジュアル)。',
  }
];
