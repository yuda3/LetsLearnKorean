import { Question } from '../../../types';

export const snsQuestions: Question[] = [
  // 投稿・更新 (5問)
  {
    id: 700,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'SNS投稿の呼びかけ',
    question: 'SNSでファン全員に呼びかける時、最も親しみやすく自然なのは？',
    options: [
      '국민 여러분',               // 政治家・大統領の演説
      '여러분~',                   // ← 正解 (基本かつ親しみやすい)
      '제위',                      // 公文書・ビジネスメール
      '당신들'                     // 「お前ら・あなた達」喧嘩腰/失礼
    ],
    correctAnswer: 1,
    explanation: '「여러분~」が最も一般的です。',
    detailedExplanation: '국민 여러분は政治家、제위はビジネス文書、당신들は攻撃的なニュアンスになることがあります。SNSでは「여러분(皆さん)」やファンダム名を使います。',
    usage: 'greeting',
    frequency: 'extremely_high',
    context: 'SNS',
    formality: 'casual'
  },
  {
    id: 701,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '「今何してる？」',
    question: 'SNSでファンに「今何してる？」と聞く時の自然な表現は？',
    options: [
      '무엇을 실시합니까?',        // 「何を実施しますか？」業務・軍隊
      '동작 중입니까?',            // 「動作中ですか？」機械の確認
      '지금 뭐 해요?',             // ← 正解
      '활동하나요?'                // 「活動しますか？」カムバ活動の話になる
    ],
    correctAnswer: 2,
    explanation: '「지금 뭐 해요?」が日常会話として自然です。',
    detailedExplanation: '실시・동작は機械的・業務的な硬い表現です。カジュアルに近況を聞くなら「뭐 해?」「뭐 해요?」が正解です。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 702,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '写真を投稿する時',
    question: '写真をアップしながら「投下！」というニュアンスで使う言葉は？',
    options: [
      '사진 제출',                 // 「写真提出」宿題・書類
      '사진 투척!',                // ← 正解 (ネットスラング的な「投下」)
      '사진 납부',                 // 「写真納付」税金など
      '사진 배급'                  // 「写真配給」食料配給など
    ],
    correctAnswer: 1,
    explanation: '「사진 투척」はSNSで写真を気前よくアップする際によく使います。',
    detailedExplanation: '투척(投擲・投げること)は、ネット用語で「(画像などを)貼り付ける・アップする」という意味でよく使われます。제출や납부は事務的すぎます。',
    usage: 'announcement',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 703,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '久しぶりの投稿',
    question: '久しぶりの投稿で「生きてるよ（生存報告）」という意味で使う定番フレーズは？',
    options: [
      '생존신고',                  // ← 正解 (定番のハッシュタグ/フレーズ)
      '생명유지',                  // 「生命維持」医療用語
      '구조요청',                  // 「救助要請」遭難
      '호흡확인'                   // 「呼吸確認」生存確認だが医学的
    ],
    correctAnswer: 0,
    explanation: '「생존신고(生存申告)」は久しぶりのSNS更新の定番フレーズです。',
    detailedExplanation: 'しばらく更新がなかったアイドルが「元気だよ」と伝える際、「#생존신고」というタグや言葉をよく使います。',
    usage: 'greeting',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 704,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'セルカ（自撮り）',
    question: '「自撮り持ってきたよ（アップするよ）」という時の可愛い表現は？',
    options: [
      '자화상 왔어요',             // 「自画像来ました」美術
      '본인 사진 지참',            // 「本人写真持参」証明写真など
      '셀카 왔어요',               // ← 正解
      '안면 촬영물'                // 「顔面撮影物」警察・資料
    ],
    correctAnswer: 2,
    explanation: '「셀카 왔어요」がファンにプレゼントする感覚の表現です。',
    detailedExplanation: '自撮りは「셀카(Selfie Camera)」。자화상は絵画、지참や촬영물は硬い表現です。',
    usage: 'announcement',
    frequency: 'extremely_high',
    context: 'SNS'
  },

  // コメント・リアクション (5問)
  {
    id: 705,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'コメントを見ている',
    question: '「コメント全部見てるよ」と伝える時の少しスリリングで親密な表現は？',
    options: [
      '댓글 검열 중',              // 「検閲中」独裁的・怖い
      '댓글 다 보고 있어요',       // ← 正解
      '댓글 수집 중',              // 「収集中」データ分析
      '댓글 분석 개시'             // 「分析開始」研究所
    ],
    correctAnswer: 1,
    explanation: '「댓글 다 보고 있어요」は「全部チェックしてるからね（安心して／気をつけて）」というニュアンスです。',
    detailedExplanation: 'ファンが「これ読んでるかな？」と不安な時に「다 보고 있어(全部見てるよ)」と言うと喜ばれます。검열(検閲)は不適切です。',
    usage: 'interaction',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 706,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'いいね！',
    question: 'SNSで「いいね」を押す動作を表す可愛い擬音語は？',
    options: [
      '하트 쾅',                   // 「ハート ドカン！」爆発・衝突
      '하트 꾹',                   // ← 正解 (指で押す音)
      '하트 퍽',                   // 「ハート バシッ！」殴る音
      '하트 뚝'                    // 「ハート ポキッ」折れる音
    ],
    correctAnswer: 1,
    explanation: '「하트 꾹(ハートぎゅっ/ぽちっ)」がボタンを押す時の可愛い表現です。',
    detailedExplanation: '꾹は指先で力を入れて押す様子。SNSで「いいねしてね」と言う時に「하트 꾹 눌러줘」とよく言います。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 707,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '爆笑した時',
    question: 'ファンのコメントが面白すぎて「爆笑した」と言う時のスラングは？',
    options: [
      '빵 터짐',                   // ← 正解 (パンと弾ける＝吹き出す)
      '대성통곡',                  // 「大声痛哭」大泣きすること
      '분노 폭발',                 // 「怒り爆発」
      '실소'                       // 「失笑」あきれ笑い
    ],
    correctAnswer: 0,
    explanation: '「빵 터짐」は風船が割れるように急に笑い出すことを指します。',
    detailedExplanation: '터지다(破裂する)を使って、笑いがこらえきれない様子を表します。SNSのリプライで非常によく使われます。',
    usage: 'reaction',
    frequency: 'high',
    context: 'SNS',
    emotion: 'happy'
  },
  {
    id: 708,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'コメントへの返信',
    question: '特定のコメントに返信機能を使って返すことを何と言う？',
    options: [
      '대댓글',                    // ← 正解 (リプライ・コメントへのコメント)
      '뒷댓글',                    // 「裏コメント」悪口など
      '윗댓글',                    // 「上コメント」
      '남의 댓글'                  // 「他人のコメント」
    ],
    correctAnswer: 0,
    explanation: '「대댓글(大+댓글)」がリプライ（コメントへの返信）を指す用語です。',
    detailedExplanation: '댓글(コメント)に対してさらに付ける댓글なので대(対)댓글と呼ばれます。「대댓글 달러 왔어(リプ返信しに来たよ)」のように使います。',
    usage: 'interaction',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 709,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: '略語クイズ',
    question: '「多くの関心をお願いします（たくさん見てね）」の定番略語は？',
    options: [
      '많관부',                    // ← 正解 (많은 관심 부탁드립니다)
      '많시부',                    // 存在しない略語
      '대관부',                    // 存在しない略語
      '관심필'                     // 「関心必須」命令っぽい
    ],
    correctAnswer: 0,
    explanation: '「많관부」はアイドルSNSの必須用語です。',
    detailedExplanation: '많은 관심 부탁드립니다(多くの関心をお願いします)の略。ハッシュタグや動画の最後で頻繁に使われます。',
    usage: 'request',
    frequency: 'extremely_high',
    context: 'SNS'
  },

  // 日常・近況報告 (5問)
  {
    id: 710,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '練習室にて',
    question: '練習室での写真をアップする際、「練習室に来たよ」のニュアンスでよく使う表現は？',
    options: [
      '연습실 출근',               // ← 正解 (練習室に出勤＝来たよ)
      '연습실 입학',               // 「練習室に入学」
      '연습실 침입',               // 「練習室に侵入」
      '연습실 기생'                // 「練習室に寄生」
    ],
    correctAnswer: 0,
    explanation: '「출근(出勤)」は会社だけでなく、練習室に来た時にもジョーク交じりでよく使います。',
    detailedExplanation: '「출근 도장 쾅(出勤ハンコぽん)」のように、毎日練習室に通っていることをアピールする際によく使われる表現です。',
    usage: 'update',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 711,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'お腹すいた',
    question: '空腹で目が回りそうな様子を大げさに伝えるSNS表現は？',
    options: [
      '식사 요망',                 // 「食事要望」硬い要求
      '배고파서 현기증 나요',      // ← 正解 (ネットミーム的な定番表現)
      '영양 실조 직전',            // 「栄養失調直前」深刻すぎる
      '위장 활동 정지'             // 「胃腸活動停止」医学的
    ],
    correctAnswer: 1,
    explanation: '「배고파서 현기증 나요(お腹空いてめまいがする)」は、早くご飯を見せて/食べたいという意味の定番ジョークです。',
    detailedExplanation: 'ただ「배고파(お腹空いた)」と言うより、愛嬌と切実さが伝わる表現としてSNSで人気があります。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 712,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '眠い時',
    question: '眠くて意識がはっきりしない状態を表す四字熟語は？',
    options: [
      '비몽사몽',                  // ← 正解 (夢うつつ)
      '수면부족',                  // 「睡眠不足」健康状態
      '혼수상태',                  // 「昏睡状態」危険
      '숙면희망'                   // 「熟睡希望」
    ],
    correctAnswer: 0,
    explanation: '「비몽사몽(非夢似夢)」は、寝起きや極度に眠い時のぼんやりした状態を表します。',
    detailedExplanation: '「비몽사몽(夢うつつ)で投稿中...」のように、深夜や早朝の投稿でよく使われます。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 713,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'おやすみの挨拶',
    question: 'ファンに「夢で会おう」というロマンチックな挨拶は？',
    options: [
      '꿈에서 만나요',             // ← 正解
      '악몽 꾸세요',               // 「悪夢を見てください」呪い
      '수면실에서 만나요',         // 「睡眠室で会いましょう」施設の集合
      '내일 아침에 기상하세요'     // 「明日の朝起床してください」号令
    ],
    correctAnswer: 0,
    explanation: '「꿈에서 만나요(夢で会いましょう)」はアイドルがよく使う甘いおやすみ挨拶です。',
    detailedExplanation: '単なる「おやすみ」より、ファンへの愛情が伝わる表現です。',
    usage: 'closing',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 714,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: '気合を入れる',
    question: '「今日も一日頑張ろう！」という気合を表す可愛い掛け声は？',
    options: [
      '오늘도 노동!',              // 「今日も労働！」現実的すぎる
      '오늘도 아자아자!',          // ← 正解
      '오늘도 고생!',              // 「今日も苦労！」ネガティブ
      '오늘도 투쟁!'               // 「今日も闘争！」デモ・ストライキ
    ],
    correctAnswer: 1,
    explanation: '「아자아자(アジャアジャ)」は気合を入れる時の可愛い掛け声です。',
    detailedExplanation: '「화이팅(ファイティン)」と同様によく使われます。「아자아자 화이팅!」とセットで使うことも多いです。',
    usage: 'cheering',
    frequency: 'very_high',
    context: 'SNS'
  }
];