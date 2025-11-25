import { Question } from '../../../types';

export const concertQuestions: Question[] = [
  // 開演・挨拶 (5問)
  {
    id: 800,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: 'コンサート開始の挨拶',
    question: 'コンサートが始まる時の挨拶として、もっとも自然なものは？', // 질문을 구체화
    options: [
      '안녕히 가세요', // 작별 인사 (오답)
      '안녕하세요',    // 정답
      '다녀오겠습니다', // 외출 인사 (오답)
      '잘 자요'       // 취침 인사 (오답)
    ],
    correctAnswer: 1, // index 1
    explanation: '「안녕하세요」が基本的な挨拶です。「안녕히 가세요」は別れの挨拶です。',
    detailedExplanation: 'コンサートの登場時には、観客に向けて元気に「안녕하세요!（こんにちは！）」と挨拶するのが基本です。',
    usage: 'greeting',
    frequency: 'extremely_high',
    context: 'concert',
    formality: 'polite'
  },
  {
    id: 801,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: '会いたかった',
    question: '「みなさんにとても会いたかったです」は韓国語で？',
    options: [
      '여러분이 보고 싶지 않았어요', // 보고 싶지 않다 (오답: 会いたくなかった)
      '여러분을 보고 싶었어요',       // 문법적으로 맞지만 3번이 더 자연스러움 (함정)
      '여러분 너무 보고 싶었어요',     // 정답 (가장 자연스러운 구어체)
      '여러분 보지 마세요'           // 보지 마라 (오답: 見ないでください)
    ],
    correctAnswer: 2,
    explanation: '「보고 싶었어요（会いたかったです）」に強調の「너무（とても）」をつけるのが自然です。',
    detailedExplanation: '「보고 싶지 않았어요」は会いたくなかったという意味になります。ステージでは感情を込めて「너무 보고 싶었어요!」と叫ぶことが多いです。',
    usage: 'greeting',
    frequency: 'extremely_high',
    context: 'concert',
    emotion: 'longing'
  },
  {
    id: 802,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: '来てくれて',
    question: '「来てくれてありがとうございます」として正しい表現は？',
    options: [
      '와주셔서 감사합니다',     // 정답
      '가주셔서 감사합니다',     // 가다 (오답: 行ってくれて)
      '오지 말아주세요',        // 오지 마라 (오답: 来ないでください)
      '와주셔서 죄송합니다'      // 죄송 (오답: 来てくれて申し訳ありません)
    ],
    correctAnswer: 0,
    explanation: '「오다（来る）」の敬語表現「와주셔서（来てくださって）」を使います。',
    detailedExplanation: '「가주셔서」は「行ってくれて」という意味になり、逆の意味になってしまうので注意しましょう。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert'
  },
  {
    id: 803,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '待たせてごめん',
    question: '久しぶりのコンサートで「お待たせしました」と言うときは？',
    options: [
      '기다리지 마세요',       // (오답: 待たないでください)
      '오래 기다리셨죠?',      // 정답
      '빨리 가세요',           // (오답: 早く行ってください)
      '기다리게 해서 잘했어요'  // (오답: 待たせてよくやりました)
    ],
    correctAnswer: 1,
    explanation: '「오래 기다리셨죠?（長く待ちましたよね？）」が、ファンへの配慮を示す定番フレーズです。',
    detailedExplanation: '直訳の「기다리게 해서 미안해요（待たせてごめんなさい）」も使いますが、疑問形で共感を求める「오래 기다리셨죠?」の方がライブのMCではよく使われます。',
    usage: 'apology',
    frequency: 'high',
    context: 'concert'
  },
  {
    id: 804,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '夢みたい',
    question: '「夢のようです」と感激を表す表現は？',
    options: [
      '꿈이 아니에요',     // (오답: 夢ではありません)
      '졸려요',           // (오답: 眠いです)
      '꿈만 같아요',       // 정답
      '악몽 같아요'        // (오답: 悪夢のようです)
    ],
    correctAnswer: 2,
    explanation: '「꿈（夢）」＋「만（〜だけ）」＋「같아요（ようです）」で、夢を見ているようだという意味になります。',
    detailedExplanation: '大きな会場が埋まった時や、サプライズがあった時によく使われる感動の表現です。「악몽（悪夢）」と言わないように注意！',
    usage: 'reaction',
    frequency: 'high',
    context: 'concert',
    emotion: 'surprise'
  },

  // 掛け声・応援 (5問)
  {
    id: 805,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: 'ファイト',
    question: '応援する時の「頑張れ！」に当たる韓国語は？',
    options: [
      '화이팅 (파이팅)',    // 정답
      '하지 마',           // (오답: やめて)
      '조용히 해',         // (오답: 静かにして)
      '집에 가'            // (오답: 家に帰れ)
    ],
    correctAnswer: 0,
    explanation: '英語のFightingから来た「화이팅（ファイティン）」や「파이팅」を使います。',
    detailedExplanation: '「힘내세요（力を出してください）」も使いますが、掛け声としては「화이팅!」が最も一般的です。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'concert',
    emotion: 'happy'
  },
  {
    id: 806,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: 'かっこいい',
    question: 'パフォーマンスを見て「かっこいい！」と叫ぶときは？',
    options: [
      '맛있어요!',        // (오답: 美味しいです)
      '멋있어요!',        // 정답
      '미안해요!',        // (오답: ごめんなさい)
      '재미없어요!'       // (오답: 面白くないです)
    ],
    correctAnswer: 1,
    explanation: '「멋（粋・かっこよさ）」があるという意味で「멋있어요!」と言います。',
    detailedExplanation: '発音が似ている「맛있어요（マシッソヨ・美味しい）」と間違えないようにしましょう。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'concert',
    emotion: 'happy'
  },
  {
    id: 807,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: '愛してる',
    question: '「愛してる」の表現として、コンサートで不自然なものは？',
    options: [
      '사랑해',            // (반말: OK)
      '사랑해요',          // (존댓말: OK)
      '사랑합니다',        // (격식체: OK)
      '사랑하지 마세요'     // (오답: 愛さないでください)
    ],
    correctAnswer: 3,
    explanation: '「사랑하지 마세요」は「愛さないでください」という意味になり、コンサートでは使いません。',
    detailedExplanation: 'コンサートでは、タメ口の「사랑해!」や丁寧な「사랑해요!」のどちらもよく使われます。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'concert',
    emotion: 'love'
  },
  {
    id: 808,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '声援を送る',
    question: '「叫べー！（声を上げろ）」と観客を煽る時の決まり文句は？',
    options: [
      '조용히 해 주세요',    // (오답: 静かにしてください)
      '소리 질러',          // 정답
      '노래 불러',          // (오답: 歌って - ※合唱とは違う)
      '입을 열어'           // (오답: 口を開けて - ※不自然)
    ],
    correctAnswer: 1,
    explanation: '「Make some noise」にあたる韓国語の決まり文句は「소리 질러（ソリ チッロ）」です。',
    detailedExplanation: '直訳の「큰 소리로 불러 주세요」は使いません。アーティストが「소리 질러!」と言ったら、観客は「ワァー！」と歓声で返します。',
    usage: 'request',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 809,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '一緒に歌おう',
    question: '一緒に歌ってほしい時、アーティストは何と言いますか？',
    options: [
      '듣기만 하세요',       // (오답: 聞く「だけ」にしてください)
      '같이 불러요',         // 정답
      '혼자 부를게요',       // (오답: 一人で歌いますね)
      '집에 가서 부르세요'    // (오답: 家に帰って歌ってください)
    ],
    correctAnswer: 1,
    explanation: '「같이（一緒に）」＋「부르다（歌う）」で「같이 불러요（カチ プルロヨ）」と言います。',
    detailedExplanation: '「다 같이!（みんな一緒に！）」という掛け声もよく使われます。',
    usage: 'request',
    frequency: 'extremely_high',
    context: 'concert'
  },

  // 締め・別れ (5問)
  {
    id: 810,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: '楽しかった',
    question: '「今日のコンサートは楽しかったです」は？',
    options: [
      '오늘 즐거웠어요',      // 정답
      '오늘 슬펐어요',        // (오답: 今日は悲しかったです)
      '오늘 무서웠어요',      // (오답: 今日は怖かったです)
      '오늘 지루했어요'       // (오답: 今日は退屈でした)
    ],
    correctAnswer: 0,
    explanation: '「즐거웠어요（楽しかったです）」や「재밌었어요（面白かったです）」を使います。',
    detailedExplanation: '「행복했어요（幸せでした）」もコンサートの感想としてよく使われる表現です。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'concert',
    emotion: 'happy'
  },
  {
    id: 811,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: 'また会おう',
    question: '別れの挨拶。「また会いましょう」は？',
    options: [
      '다시는 보지 말아요',    // (오답: 二度と会わないようにしましょう)
      '또 만나요',            // 정답
      '저를 잊어 주세요',      // (오답: 私を忘れてください)
      '안녕히 주무세요'        // (오답: おやすみなさい - ※寝る時)
    ],
    correctAnswer: 1,
    explanation: '「또（また）」＋「만나요（会いましょう）」を使います。',
    detailedExplanation: '「다시 만나요（再び会いましょう）」も同じ意味でよく使われます。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'concert'
  },
  {
    id: 812,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: '気をつけて帰って',
    question: 'ファンに「気をつけて帰ってね」と言う時は？',
    options: [
      '위험하게 가세요',       // (오답: 危険に帰ってください)
      '조심히 가세요',         // 정답
      '천천히 오세요',         // (오답: ゆっくり「来て」ください)
      '뛰어 가세요'            // (오답: 走って行ってください)
    ],
    correctAnswer: 1,
    explanation: '「조심히（気をつけて・慎重に）」＋「가세요（行ってください＝帰ってください）」と言います。',
    detailedExplanation: '韓国では「帰る」という動詞の代わりに、去っていく相手には「가세요（行ってください）」を使うのが一般的です。',
    usage: 'closing',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 813,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: 'おかげで',
    question: '「皆さんのおかげです」と感謝を伝える表現は？',
    options: [
      '여러분 덕분이에요',      // 정답
      '여러분 때문이에요',      // (함정: 〜のせいです - ※ネガティブな意味で使うことが多い)
      '제 덕분이에요',          // (오답: 私のおかげです)
      '아무도 없었어요'         // (오답: 誰もいませんでした)
    ],
    correctAnswer: 0,
    explanation: '良い結果の理由は「덕분（おかげ）」、悪い結果の理由は「때문（せい）」を使います。',
    detailedExplanation: '「때문이에요」を使うと「皆さんのせいです」と聞こえてしまう可能性があるので注意が必要です。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert',
    emotion: 'happy'
  },
  {
    id: 814,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '忘れない',
    question: '「この瞬間を忘れません」は？',
    options: [
      '이 순간을 잊을게요',     // (오답: この瞬間を忘れますね)
      '이 순간을 잊지 않을게요', // 정답
      '기억하고 싶지 않아요',   // (오답: 記憶したくありません)
      '지금 잊어버렸어요'       // (오답: 今忘れてしまいました)
    ],
    correctAnswer: 1,
    explanation: '「잊다（忘れる）」の否定形「잊지 않다（忘れない）」を使います。',
    detailedExplanation: '「평생 기억할게요（一生記憶します＝一生忘れません）」という表現も感動的な場面で使われます。',
    usage: 'closing',
    frequency: 'high',
    context: 'concert',
    emotion: 'moved'
  }
];