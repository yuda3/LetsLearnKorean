import { Question } from '../../types';

// numbers - beginner level
export const numbersQuestions: Question[] = [
{
    id: 19,
    category: 'numbers',
    questionJa: '韓国語の数字',
    question: '「1, 2, 3」の固有数詞は？',
    options: [
      '하나, 둘, 셋',
      '일, 이, 삼',
      '한, 두, 세',
      '일, 둘, 삼',
    ],
    correctAnswer: 0,
    explanation: '固有数詞は「하나, 둘, 셋」です。',
    detailedExplanation:
      '韓国語には2つの数詞システムがあります：固有数詞(하나, 둘, 셋...)と漢数詞(일, 이, 삼...)。物を数える時は固有数詞を使います。',
  },
{
    id: 20,
    category: 'numbers',
    questionJa: '時間を言うとき',
    question: '「3時」は韓国語で？',
    options: [
      '세 시',
      '삼 시',
      '셋 시',
      '석 시',
    ],
    correctAnswer: 0,
    explanation: '時間の「時」には固有数詞を使い、「세 시」となります。',
    detailedExplanation:
      '時間表現：時(시)には固有数詞、分(분)には漢数詞を使います。例：3時30分 = 세 시 삼십 분。',
  },
{
    id: 76,
    category: 'numbers',
    questionJa: '漢数詞の基本',
    question: '「10, 20, 30」の漢数詞は？',
    options: [
      '십, 이십, 삼십',
      '열, 스물, 서른',
      '일, 이, 삼',
      '하나, 둘, 셋',
    ],
    correctAnswer: 0,
    explanation: '漢数詞は「십(10)、이십(20)、삼십(30)」です。',
    detailedExplanation:
      '漢数詞：일(1)、이(2)、삼(3)、사(4)、오(5)、육(6)、칠(7)、팔(8)、구(9)、십(10)。お金や電話番号に使います。',
  },
{
    id: 77,
    category: 'numbers',
    questionJa: '固有数詞の応用',
    question: '「4個、5個、6個」は韓国語で？',
    options: [
      '네 개, 다섯 개, 여섯 개',
      '사 개, 오 개, 육 개',
      '넷 개, 다섯 개, 여섯 개',
      '네 명, 다섯 명, 여섯 명',
    ],
    correctAnswer: 0,
    explanation: '固有数詞 + 개(個)で物を数えます。「네 개」が正しい形です。',
    detailedExplanation:
      '固有数詞：하나(1)、둘(2)、셋(3)、넷(4)、다섯(5)、여섯(6)。単位と一緒に使う時：한、두、세、네に変化します。',
  },
{
    id: 78,
    category: 'numbers',
    questionJa: '年齢を言う',
    question: '「20歳です」は韓国語で？',
    options: [
      '스무 살이에요',
      '이십 살이에요',
      '스물 살이에요',
      'スムとスムルは同じ',
    ],
    correctAnswer: 3,
    explanation: '「스무 살」と「스물 살」は両方とも使えます。',
    detailedExplanation:
      '年齢には固有数詞を使用：한 살(1歳)、두 살(2歳)...스무 살/스물 살(20歳)、서른 살(30歳)。歳は「살」を使います。',
  },
{
    id: 79,
    category: 'numbers',
    questionJa: 'お金の言い方',
    question: '「5000ウォン」は韓国語で？',
    options: [
      '오천 원',
      '다섯천 원',
      '오천천 원',
      '다섯 원',
    ],
    correctAnswer: 0,
    explanation: 'お金には漢数詞を使います。「오천(5000) 원(ウォン)」です。',
    detailedExplanation:
      '漢数詞でお金を数える：백(100)、천(1000)、만(10000)。例：삼천 원(3000ウォン)、만 원(10000ウォン)。',
  },
{
    id: 80,
    category: 'numbers',
    questionJa: '日付の言い方',
    question: '「3月15日」は韓国語で？',
    options: [
      '삼월 십오일',
      '세월 열다섯일',
      '삼월 열다섯일',
      '세월 십오일',
    ],
    correctAnswer: 0,
    explanation: '月と日には漢数詞を使います。「삼월(3月) 십오일(15日)」です。',
    detailedExplanation:
      '日付は漢数詞：일월(1月)、이월(2月)、삼월(3月)...십이월(12月)。일(日)も漢数詞：일일(1日)、이일(2日)...삼십일일(31日)。',
  },
{
    id: 81,
    category: 'numbers',
    questionJa: '人数を数える',
    question: '「3人です」は韓国語で？',
    options: [
      '세 명이에요',
      '삼 명이에요',
      '셋 명이에요',
      '석 명이에요',
    ],
    correctAnswer: 0,
    explanation: '人数には固有数詞を使い、「세 명」となります。',
    detailedExplanation:
      '人数：한 명(1人)、두 명(2人)、세 명(3人)、네 명(4人)...명(名)は人を数える単位です。',
  },
{
    id: 82,
    category: 'numbers',
    questionJa: '電話番号',
    question: '電話番号「010-1234-5678」はどう読む？',
    options: [
      '공일공 일이삼사 오육칠팔',
      '영일영 하나둘셋넷 다섯여섯일곱여덟',
      '零一零 一二三四 五六七八',
      '공일공の공はゼロ',
    ],
    correctAnswer: 0,
    explanation: '電話番号は漢数詞で読み、0は「공(ゼロ)」と読みます。',
    detailedExplanation:
      '電話番号には漢数詞使用。0は「공」または「영」。공(コン)の方が一般的。例：010(공일공)、119(일일구)。',
  },
{
    id: 83,
    category: 'numbers',
    questionJa: '何時何分',
    question: '「7時30分」は韓国語で？',
    options: [
      '일곱 시 삼십 분',
      '칠 시 삼십 분',
      '일곱 시 서른 분',
      '칠 시 서른 분',
    ],
    correctAnswer: 0,
    explanation: '時(시)は固有数詞、分(분)は漢数詞を使います。',
    detailedExplanation:
      '時間：한 시(1時)、두 시(2時)...열두 시(12時)。分：일 분(1分)、이 분(2分)...육십 분(60分)。半：삼십 분 = 반。',
  },
{
    id: 84,
    category: 'numbers',
    questionJa: '階数を言う',
    question: '「2階」は韓国語で？',
    options: [
      '이 층',
      '두 층',
      '이층 어느쪽も使える',
      '二階',
    ],
    correctAnswer: 0,
    explanation: '階数には漢数詞を使い、「이 층(2階)」となります。',
    detailedExplanation:
      '階数：일 층(1階)、이 층(2階)、삼 층(3階)...層(층)。地下は지하(地下)：지하 일 층(地下1階)。',
  },
{
    id: 85,
    category: 'numbers',
    questionJa: '回数を数える',
    question: '「2回、3回」は韓国語で？',
    options: [
      '두 번, 세 번',
      '이 번, 삼 번',
      '둘 번, 셋 번',
      '두 회, 세 회',
    ],
    correctAnswer: 0,
    explanation: '回数には固有数詞を使い、単位は「번(回)」です。',
    detailedExplanation:
      '回数：한 번(1回)、두 번(2回)、세 번(3回)...번(回・度)。「회(回)」も使えますが、口語では「번」が一般的です。',
  }
];
