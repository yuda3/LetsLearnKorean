import { Question } from '../../types';

// shopping - intermediate level
export const shoppingQuestions: Question[] = [
{
    id: 13,
    category: 'shopping',
    questionJa: '値段を聞くとき',
    question: '「これはいくらですか？」は韓国語で？',
    options: [
      '이거 얼마예요?',
      '이거 뭐예요?',
      '이거 어디예요?',
      '이거 언제예요?',
    ],
    correctAnswer: 0,
    explanation: '「얼마예요?」は「いくらですか?」という意味です。',
    detailedExplanation:
      '이거(これ・口語)、얼마(いくら)、예요(です)。「이것(これ・書き言葉)」より「이거」の方が自然な会話表現です。',
  },
{
    id: 14,
    category: 'shopping',
    questionJa: 'サイズを確認するとき',
    question: '「もっと大きいサイズはありますか？」は？',
    options: [
      '더 큰 사이즈 있어요?',
      '더 작은 사이즈 있어요?',
      '같은 사이즈 있어요?',
      '다른 색 있어요?',
    ],
    correctAnswer: 0,
    explanation: '「더 큰」は「もっと大きい」、「사이즈」はサイズです。',
    detailedExplanation:
      '더(もっと)、큰(大きい)、작은(小さい)、같은(同じ)、다른(違う)、색(色)。「있어요?」は「ありますか?」の意味です。',
  },
{
    id: 52,
    category: 'shopping',
    questionJa: '試着したいとき',
    question: '「試着してもいいですか？」は？',
    options: [
      '입어 봐도 돼요?',
      '사도 돼요?',
      '입을게요',
      '입었어요',
    ],
    correctAnswer: 0,
    explanation: '「입어 봐도 돼요?」は「着てみてもいいですか?」という意味です。',
    detailedExplanation:
      '입다(着る)、보다(みる・試す)、아/어 보다(〜してみる)、아도/어도 되다(〜してもよい)。',
  },
{
    id: 53,
    category: 'shopping',
    questionJa: '値引き交渉',
    question: '「もう少し安くなりませんか？」は？',
    options: [
      '좀 더 싸게 안 돼요?',
      '너무 비싸요',
      '할인해 주세요',
      '모두 使える',
    ],
    correctAnswer: 3,
    explanation: 'すべて値引き交渉で使える表現です。',
    detailedExplanation:
      '좀 더 싸게 안 돼요?(もう少し安くなりませんか?)、너무 비싸요(高すぎます)、할인해 주세요(割引してください)。市場などで使えます。',
  },
{
    id: 54,
    category: 'shopping',
    questionJa: '色を尋ねる',
    question: '「他の色はありますか？」は？',
    options: [
      '다른 색 있어요?',
      '같은 색 있어요?',
      '무슨 색이에요?',
      '색이 좋아요',
    ],
    correctAnswer: 0,
    explanation: '「다른 색」は「他の色」、「있어요?」は「ありますか?」です。',
    detailedExplanation:
      '다른(他の・違う)、같은(同じ)、무슨(何の)、색(色)。색の名前：빨강(赤)、파랑(青)、노랑(黄色)、검정(黒)、하양(白)。',
  },
{
    id: 55,
    category: 'shopping',
    questionJa: '支払い方法',
    question: '「カードで支払えますか？」は？',
    options: [
      '카드로 결제할 수 있어요?',
      '현금으로 내요',
      '카드가 있어요',
      '결제했어요',
    ],
    correctAnswer: 0,
    explanation: '「카드로」は「カードで」、「결제하다」は「決済する」です。',
    detailedExplanation:
      '카드(カード)、현금(現金)、로/으로(で・手段)、결제하다(決済する)、내다(払う)、을/를 수 있다(〜できる)。',
  },
{
    id: 56,
    category: 'shopping',
    questionJa: 'レシートについて',
    question: '「レシートください」は？',
    options: [
      '영수증 주세요',
      '계산서 주세요',
      '영수증 있어요?',
      '영수증이 필요해요',
    ],
    correctAnswer: 0,
    explanation: '「영수증」はレシート、「주세요」は「ください」です。',
    detailedExplanation:
      '영수증(レシート・領収書)、계산서(お会計・伝票)、주세요(ください)、필요하다(必要だ)。',
  },
{
    id: 57,
    category: 'shopping',
    questionJa: '返品・交換',
    question: '「交換できますか？」は？',
    options: [
      '교환할 수 있어요?',
      '환불할 수 있어요?',
      '바꿀 수 있어요?',
      '교환과 바꾸다は同じ',
    ],
    correctAnswer: 3,
    explanation: '「교환하다」と「바꾸다」は両方とも「交換する」の意味です。',
    detailedExplanation:
      '교환하다(交換する・フォーマル)、바꾸다(交換する・一般)、환불하다(返金する)、을/를 수 있다(〜できる)。',
  },
{
    id: 58,
    category: 'shopping',
    questionJa: 'ポイントカード',
    question: '「ポイントカードありますか？」は？',
    options: [
      '포인트 카드 있으세요?',
      '포인트 카드 주세요',
      '포인트가 많아요',
      '카드로 내요',
    ],
    correctAnswer: 0,
    explanation: '「있으세요?」は「お持ちですか?」という尊敬語です。',
    detailedExplanation:
      '포인트(ポイント)、카드(カード)、있으세요?(お持ちですか?・尊敬)、주세요(ください)、많다(多い)。',
  }
];
