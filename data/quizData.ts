import { Question } from '../types';

export const quizQuestions: Question[] = [
  // 旅行会話 (travel)
  {
    id: 1,
    category: 'travel',
    questionJa: 'レストランで食べ物を注文するとき',
    question: '「これをください」は韓国語で？',
    options: [
      '이것 주세요',
      '저것 주세요',
      '그것 주세요',
      '다 주세요',
    ],
    correctAnswer: 0,
    explanation: '「이것(これ)+ 주세요(ください)」で「これをください」という意味になります。',
    detailedExplanation:
      '韓国語の指示代名詞は3種類あります：이것(これ・近くのもの)、그것(それ・相手の近くのもの)、저것(あれ・遠くのもの)。レストランでメニューを指して注文する時は「이것 주세요」が最も自然です。',
  },
  {
    id: 2,
    category: 'travel',
    questionJa: '道を尋ねるとき',
    question: '「トイレはどこですか？」は韓国語で？',
    options: [
      '화장실이 어디예요?',
      '화장실이 뭐예요?',
      '화장실이 누구예요?',
      '화장실이 언제예요?',
    ],
    correctAnswer: 0,
    explanation: '「화장실(トイレ)+ 어디예요?(どこですか?)」で場所を尋ねます。',
    detailedExplanation:
      '疑問詞の使い分け：어디(どこ)、뭐/무엇(何)、누구(誰)、언제(いつ)、왜(なぜ)、어떻게(どのように)。場所を聞く時は必ず「어디」を使います。',
  },
  {
    id: 3,
    category: 'travel',
    questionJa: 'カフェでの注文',
    question: '「アイスアメリカーノ一つください」は？',
    options: [
      '아이스 아메리카노 한 잔 주세요',
      '아이스 아메리카노 두 잔 주세요',
      '아이스 아메리카노 세 잔 주세요',
      '뜨거운 아메리카노 주세요',
    ],
    correctAnswer: 0,
    explanation: '한 잔(一杯)は「ひとつ」という意味の数え方です。',
    detailedExplanation:
      '飲み物を数える時は「잔(杯)」を使います：한 잔(1杯)、두 잔(2杯)、세 잔(3杯)。아이스(アイス)と뜨거운(ホット)も覚えておくと便利です。',
  },
  {
    id: 4,
    category: 'travel',
    questionJa: 'ホテルでのチェックイン',
    question: '「予約しています」は韓国語で？',
    options: [
      '예약했어요',
      '예약할게요',
      '예약했습니다',
      '예약하고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「예약했어요」は丁寧な過去形で「予約しました」という意味です。',
    detailedExplanation:
      '예약하다(予約する)の活用：예약해요(予約します)、예약했어요(予約しました)、예약할게요(予約します・意志)、예약하고 싶어요(予約したいです)。',
  },

  // 日常会話 (daily)
  {
    id: 5,
    category: 'daily',
    questionJa: '挨拶の基本',
    question: '「おはようございます」は韓国語で？',
    options: [
      '안녕하세요',
      '잘 자요',
      '안녕히 가세요',
      '반갑습니다',
    ],
    correctAnswer: 0,
    explanation: '「안녕하세요」は時間帯に関係なく使える基本的な挨拶です。',
    detailedExplanation:
      '韓国語では日本語と違い、朝昼晩で挨拶を変えません。「안녕하세요」がいつでも使える万能な挨拶表現です。より親しい関係なら「안녕」だけでもOKです。',
  },
  {
    id: 6,
    category: 'daily',
    questionJa: '別れの挨拶',
    question: '去る人に対して「さようなら」は？',
    options: [
      '안녕히 가세요',
      '안녕히 계세요',
      '또 만나요',
      '잘 가',
    ],
    correctAnswer: 0,
    explanation: '「안녕히 가세요」は去る人に対して使う丁寧な別れの挨拶です。',
    detailedExplanation:
      '韓国語の別れの挨拶は2種類：안녕히 가세요(去る人に)、안녕히 계세요(残る人に)。友達同士なら「또 만나요(また会いましょう)」や「잘 가(じゃあね)」も使えます。',
  },
  {
    id: 7,
    category: 'daily',
    questionJa: '自己紹介',
    question: '「私は田中です」は韓国語で？',
    options: [
      '저는 다나카예요',
      '나는 다나카예요',
      '제가 다나카예요',
      '저의 다나카예요',
    ],
    correctAnswer: 0,
    explanation: '「저는(私は)+ 名前 + 예요」で丁寧な自己紹介ができます。',
    detailedExplanation:
      '一人称：저(私・謙譲)、나(私・カジュアル)。助詞：는/은(は)、가/이(が)。丁寧な場面では「저는」を使います。',
  },

  // 感謝の表現 (gratitude)
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

  // 基本フレーズ (basic)
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

  // ショッピング (shopping)
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

  // レストラン (restaurant)
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

  // 緊急時 (emergency)
  {
    id: 17,
    category: 'emergency',
    questionJa: '助けを求めるとき',
    question: '「助けてください」は韓国語で？',
    options: [
      '도와주세요',
      '괜찮아요',
      '알겠어요',
      '감사합니다',
    ],
    correctAnswer: 0,
    explanation: '「도와주세요」は「助けてください」という意味です。',
    detailedExplanation:
      '도와주세요(助けてください)、살려주세요(助けて・緊急)。より緊急の場合は「살려주세요!」を使います。',
  },
  {
    id: 18,
    category: 'emergency',
    questionJa: '病院に行きたいとき',
    question: '「病院に行きたいです」は？',
    options: [
      '병원에 가고 싶어요',
      '약국에 가고 싶어요',
      '집에 가고 싶어요',
      '공항에 가고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「병원」は病院、「가고 싶어요」は「行きたいです」です。',
    detailedExplanation:
      '병원(病院)、약국(薬局)、집(家)、공항(空港)、가고 싶어요(行きたいです)。',
  },

  // 数字 (numbers)
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
];

// カテゴリー別にクイズを取得する関数
export const getQuizzesByCategory = (category: string): Question[] => {
  return quizQuestions.filter((q) => q.category === category);
};

// ランダムなクイズを取得する関数
export const getRandomQuizzes = (count: number): Question[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// カテゴリー情報
export const categoryInfo = {
  travel: { name: '旅行会話', icon: '🗺️', color: '#9AC4B3' },
  daily: { name: '日常会話', icon: '💬', color: '#85C9B7' },
  gratitude: { name: '感謝の表現', icon: '💝', color: '#F99B85' },
  basic: { name: '基本フレーズ', icon: '✨', color: '#7DB49E' },
  shopping: { name: 'ショッピング', icon: '🛍️', color: '#B8D4C8' },
  restaurant: { name: 'レストラン', icon: '🍜', color: '#D4E4DD' },
  emergency: { name: '緊急時', icon: '🚨', color: '#FBB8A8' },
  numbers: { name: '数字', icon: '🔢', color: '#A8D9CC' },
};
