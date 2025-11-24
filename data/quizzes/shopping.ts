import { Question } from '../../types';

// shopping - intermediate/advanced level
export const shoppingQuestions: Question[] = [
  // Intermediate level - 基本的なショッピング表現
  {
    id: 13,
    category: 'shopping',
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
    difficulty: 'intermediate',
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
  },
  // Intermediate level - 穴埋め問題
  {
    id: 200,
    category: 'shopping',
    difficulty: 'intermediate',
    questionJa: '試着室を探す（穴埋め）',
    question: '「試着室はどこですか？」「탈의실이 ( )예요?」',
    options: [
      '어디',
      '언제',
      '누구',
      '뭐',
    ],
    correctAnswer: 0,
    explanation: '場所を聞く時は「어디(どこ)」を使います。',
    detailedExplanation:
      '탈의실(試着室・脱衣室)。場所を尋ねる疑問詞は「어디」です。언제(いつ)、누구(誰)、뭐(何)は場所には使えません。',
  },
  {
    id: 201,
    category: 'shopping',
    difficulty: 'intermediate',
    questionJa: '割引を尋ねる（穴埋め）',
    question: '「割引されますか？」「( )돼요?」',
    options: [
      '할인',
      '할인해',
      '할인하다',
      '할인을',
    ],
    correctAnswer: 0,
    explanation: '「할인 돼요?」は「割引されますか?」という意味です。',
    detailedExplanation:
      '할인(割引)、되다(される・なる)。「할인 돼요?」は「할인이 돼요?」の略で、名詞+되다の形です。',
  },
  {
    id: 202,
    category: 'shopping',
    difficulty: 'intermediate',
    questionJa: '購入意思を伝える（穴埋め）',
    question: '「これを買います」「이거 ( )」',
    options: [
      '살게요',
      '샀어요',
      '사요',
      '사세요',
    ],
    correctAnswer: 0,
    explanation: '「살게요」は「買います」という意志を表します。',
    detailedExplanation:
      '사다(買う)、ㄹ/을게요(〜します・意志)。샀어요(買いました・過去)、사요(買います・現在)、사세요(お買いください・命令)。',
  },
  // Advanced level - 文法問題
  {
    id: 300,
    category: 'shopping',
    difficulty: 'advanced',
    questionJa: '婉曲な依頼（文法）',
    question: '「もう少し安くしていただけますか？」最も丁寧で自然な表現は？',
    options: [
      '좀 더 싸게 해 주실 수 있으세요?',
      '좀 더 싸게 해 주세요',
      '좀 더 싸게 하세요',
      '좀 더 싸게 해요',
    ],
    correctAnswer: 0,
    explanation: '「주실 수 있으세요?」は最も丁寧で婉曲的な依頼表現です。',
    detailedExplanation:
      '주다(くれる)、시(尊敬)、ㄹ 수 있다(〜できる)、세요(敬語語尾)。「해 주실 수 있으세요?」は二重敬語で最も丁寧です。해 주세요(してください)、하세요(してください・命令的)、해요(します・平叙文)。',
  },
  {
    id: 301,
    category: 'shopping',
    difficulty: 'advanced',
    questionJa: '仮定表現（文法）',
    question: '「もし気に入らなければ、返品できますか？」正しい表現は？',
    options: [
      '마음에 안 들면 환불할 수 있어요?',
      '마음에 안 들어서 환불할 수 있어요?',
      '마음에 안 들고 환불할 수 있어요?',
      '마음에 안 드니까 환불할 수 있어요?',
    ],
    correctAnswer: 0,
    explanation: '仮定・条件を表す時は「으면/면」を使います。',
    detailedExplanation:
      '마음에 들다(気に入る)、환불하다(返金する)。으면/면(〜なら・仮定)、아서/어서(〜ので・理由)、고(〜て・並列)、니까(〜から・理由)。仮定の意味を表すのは「으면/면」のみです。',
  },
  {
    id: 302,
    category: 'shopping',
    difficulty: 'advanced',
    questionJa: '受動表現（文法）',
    question: '「この商品は昨日入荷されました」正しい受動表現は？',
    options: [
      '이 상품은 어제 입고됐어요',
      '이 상품은 어제 입고했어요',
      '이 상품을 어제 입고됐어요',
      '이 상품이 어제 입고했어요',
    ],
    correctAnswer: 0,
    explanation: '「입고되다」は受動形で「入荷される」という意味です。',
    detailedExplanation:
      '입고하다(入荷する・能動)、입고되다(入荷される・受動)。受動文では主語に「은/는」または「이/가」を使い、「을/를」は使いません。됐어요は「되었어요(されました)」の縮約形です。',
  },
  {
    id: 303,
    category: 'shopping',
    difficulty: 'advanced',
    questionJa: '使役表現（文法）',
    question: '「店員に商品を見せてもらいました」正しい表現は？',
    options: [
      '점원에게 상품을 보여 달라고 했어요',
      '점원이 상품을 보여 주었어요',
      '점원한테 상품을 보였어요',
      '上記すべて正しい',
    ],
    correctAnswer: 3,
    explanation: 'すべて文法的に正しく、ニュアンスが少し異なります。',
    detailedExplanation:
      '보여 달라고 하다(見せてくれと頼む・間接依頼)、보여 주다(見せてくれる・直接)、보이다(見せる・使役)。에게/한테(〜に)。すべて「見せてもらう」の意味を表現できますが、1番は依頼のニュアンス、2番は相手の行為、3番は使役です。',
  },
  {
    id: 304,
    category: 'shopping',
    difficulty: 'advanced',
    questionJa: '推量表現（文法）',
    question: '「このシャツは私に似合うでしょうか？」最も自然な表現は？',
    options: [
      '이 셔츠가 저한테 어울릴까요?',
      '이 셔츠가 저한테 어울려요?',
      '이 셔츠가 저한테 어울렸어요?',
      '이 셔츠가 저한테 어울리세요?',
    ],
    correctAnswer: 0,
    explanation: '「ㄹ까요?」は推量・疑問を表す丁寧な表現です。',
    detailedExplanation:
      '어울리다(似合う)、ㄹ까요?(〜でしょうか?・推量疑問)。어울려요?(似合いますか?・直接疑問)、어울렸어요?(似合いましたか?・過去)、어울리세요?(似合われますか?・敬語だが不自然)。自分に似合うかを控えめに聞く時は「ㄹ까요?」が最適です。',
  },
];
