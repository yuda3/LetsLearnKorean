import { Question } from '../../types';

// restaurant - intermediate level
export const restaurantQuestions: Question[] = [
{
    id: 15,
    category: 'restaurant',
    questionJa: 'メニューを頼むとき',
    question: '「メニューを見せてください」は？',
    options: [
      '메뉴판 좀 주세요',
      '물 좀 주세요',
      '계산서 주세요',
      '영수증 주세요',
    ],
    correctAnswer: 0,
    explanation: '「메뉴판」はメニュー、「좀」は少し(丁寧さを加える)です。',
    detailedExplanation:
      '메뉴판(メニュー表)、물(水)、계산서(お会計)、영수증(レシート)、좀(少し・依頼を柔らかくする)。',
  },
{
    id: 16,
    category: 'restaurant',
    questionJa: 'おすすめを聞くとき',
    question: '「おすすめは何ですか？」は韓国語で？',
    options: [
      '추천 메뉴가 뭐예요?',
      '주문할게요',
      '계산할게요',
      '포장해 주세요',
    ],
    correctAnswer: 0,
    explanation: '「추천 메뉴」はおすすめメニューという意味です。',
    detailedExplanation:
      '추천(推薦・おすすめ)、메뉴(メニュー)、주문(注文)、계산(会計)、포장(包装・持ち帰り)。',
  },
{
    id: 59,
    category: 'restaurant',
    questionJa: '注文するとき',
    question: '「これ2つください」は？',
    options: [
      '이거 두 개 주세요',
      '이거 두 명 주세요',
      '이거 두 잔 주세요',
      '저거 두 개 주세요',
    ],
    correctAnswer: 0,
    explanation: '「두 개」は「2つ」、物を数える時の単位です。',
    detailedExplanation:
      '이거(これ)、저거(あれ)、개(個・一般的な数え方)、잔(杯・飲み物)、명(名・人)。固有数詞：하나、둘、셋...',
  },
{
    id: 60,
    category: 'restaurant',
    questionJa: '辛さを調整',
    question: '「辛くないのはありますか？」は？',
    options: [
      '안 매운 거 있어요?',
      '매운 거 있어요?',
      '맛있는 거 있어요?',
      '짠 거 있어요?',
    ],
    correctAnswer: 0,
    explanation: '「안 매운 거」は「辛くないもの」という意味です。',
    detailedExplanation:
      '맵다(辛い)、안(〜ない)、맛있다(美味しい)、짜다(塩辛い)、달다(甘い)、시다(酸っぱい)、쓰다(苦い)。',
  },
{
    id: 61,
    category: 'restaurant',
    questionJa: '水を頼む',
    question: '「お水ください」は韓国語で？',
    options: [
      '물 주세요',
      '물 좀 주세요',
      '물 한 잔 주세요',
      'すべて正解',
    ],
    correctAnswer: 3,
    explanation: 'すべて「お水ください」の意味で使えます。',
    detailedExplanation:
      '물(水)、주세요(ください)、좀(少し・丁寧さを加える)、한 잔(1杯)。韓国のレストランでは水は無料が一般的です。',
  },
{
    id: 62,
    category: 'restaurant',
    questionJa: '追加注文',
    question: '「追加で注文したいです」は？',
    options: [
      '추가로 주문하고 싶어요',
      '더 주문할게요',
      '추가요',
      'すべて使える',
    ],
    correctAnswer: 3,
    explanation: 'すべて追加注文で使える表現です。',
    detailedExplanation:
      '추가(追加)、더(もっと)、주문하다(注文する)、고 싶다(〜したい)、ㄹ/을게요(〜します・意志)。',
  },
{
    id: 63,
    category: 'restaurant',
    questionJa: '持ち帰り',
    question: '「持ち帰りできますか？」は？',
    options: [
      '포장 돼요?',
      '포장해 주세요',
      '테이크아웃 돼요?',
      '포장とテイクアウト両方OK',
    ],
    correctAnswer: 3,
    explanation: '「포장」も「테이크아웃」も持ち帰りの意味で使えます。',
    detailedExplanation:
      '포장(包装・持ち帰り)、테이크아웃(テイクアウト)、돼요?(できますか?)、해 주세요(してください)。',
  },
{
    id: 64,
    category: 'restaurant',
    questionJa: 'お会計',
    question: '「お会計お願いします」は？',
    options: [
      '계산해 주세요',
      '계산서 주세요',
      '여기요, 계산이요',
      'すべて使える',
    ],
    correctAnswer: 3,
    explanation: 'すべてお会計の際に使える表現です。',
    detailedExplanation:
      '계산(会計)、하다(する)、주세요(ください)、계산서(伝票)、여기요/저기요(すみません)。',
  },
{
    id: 65,
    category: 'restaurant',
    questionJa: '別々に支払う',
    question: '「別々に会計できますか？」は？',
    options: [
      '따로따로 계산할 수 있어요?',
      '같이 계산할게요',
      '한 번에 내요',
      '카드로 내요',
    ],
    correctAnswer: 0,
    explanation: '「따로따로」は「別々に」という意味です。',
    detailedExplanation:
      '따로따로(別々に)、같이(一緒に)、한 번에(一度に)、계산하다(会計する)、을/를 수 있다(〜できる)。',
  },
{
    id: 66,
    category: 'restaurant',
    questionJa: 'アレルギー確認',
    question: '「これに何が入っていますか？」は？',
    options: [
      '이거에 뭐가 들어 있어요?',
      '이거 뭐예요?',
      '이거 맛있어요?',
      '이거 얼마예요?',
    ],
    correctAnswer: 0,
    explanation: '「뭐가 들어 있어요?」は「何が入っていますか?」です。',
    detailedExplanation:
      '들어가다(入る)、있다(ある)、뭐(何)、이거(これ)。アレルギーがある場合は「〜 알레르기가 있어요」と伝えましょう。',
  },
{
    id: 67,
    category: 'restaurant',
    questionJa: '予約について',
    question: '「予約は必要ですか？」は？',
    options: [
      '예약이 필요해요?',
      '예약했어요',
      '예약할게요',
      '예약하고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「필요하다」は「必要だ」という意味です。',
    detailedExplanation:
      '예약(予約)、필요하다(必要だ)、하다(する)、했어요(しました・過去)、할게요(します・意志)、고 싶다(〜したい)。',
  }
];
