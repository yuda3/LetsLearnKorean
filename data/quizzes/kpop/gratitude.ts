import { Question } from '../../../types';

export const kpopGratitudeQuestions: Question[] = [
  // === BEGINNER: 基本の感謝表現 (8問) ===
  
  {
    id: 400,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '基本の感謝',
    question: 'V LIVE放送中、ファンに軽く「ありがとう」と言う時の自然な表現は？',
    options: [
      '감사드립니다',              // (격식: 뉴스 앵커 느낌)
      '감사합니다',                // 정답 (가장 무난함)
      '성은이 망극하옵니다',        // (사극 말투: 왕에게 하는 말)
      '수고하세요'                 // (오답: 일을 시킬 때/헤어질 때)
    ],
    correctAnswer: 1,
    explanation: '「감사합니다」が最も標準的です。「감사드립니다」は少し堅く聞こえることがあります。',
    detailedExplanation: 'V LIVEのような少しカジュアルな場では、あまり堅苦しくない「감사합니다」や「고마워요」がよく使われます。',
    context: 'V LIVE',
    usage: 'gratitude',
    frequency: 'extremely_high',
    formality: 'polite',
    realExample: 'ほぼ全アイドル共通'
  },

  {
    id: 401,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '強調の感謝',
    question: 'コンサート後、SNSで「本当にありがとうございました」と投稿する時は？',
    options: [
      '진짜 감사합니다',           // (조금 가벼운 표현)
      '정말 감사합니다',           // 정답 (진정성 있고 정중함)
      '참 감사합니다',             // (약간 어색한 강조)
      '매우 감사합니다'            // (문어체: 편지나 글에서 주로 사용)
    ],
    correctAnswer: 1,
    explanation: '「정말（本当に）」が最も自然で、感情がこもった表現として頻繁に使われます。',
    detailedExplanation: '「진짜」は少しカジュアル、「매우」は書き言葉のニュアンスが強いです。SNSでは「정말」がベストです。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'grateful',
    context: 'SNS',
    formality: 'polite'
  },

  {
    id: 402,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '量を強調',
    question: '「（愛を）たくさんくださってありがとうございます」と言う時は？',
    options: [
      '무겁게 감사합니다',         // (오답: 重く)
      '많이 감사합니다',           // 정답
      '높게 감사합니다',           // (오답: 高く)
      '넓게 감사합니다'            // (오답: 広く)
    ],
    correctAnswer: 1,
    explanation: '感謝の大きさや量は「많이（たくさん）」で表現します。',
    detailedExplanation: '「사랑을 많이 주셔서 감사합니다（愛をたくさんくださって〜）」の略としてよく使われます。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'concert',
    formality: 'polite'
  },

  {
    id: 403,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '継続的な感謝',
    question: 'デビュー記念日に「いつもありがとうございます」と伝える時は？',
    options: [
      '가끔 감사합니다',           // (오답: たまに)
      '항상 감사합니다',           // 정답
      '잠깐 감사합니다',           // (오답: しばらく/少しの間)
      '이따가 감사합니다'          // (오답: あとで)
    ],
    correctAnswer: 1,
    explanation: '「항상（いつも・常に）」を使います。「늘（いつも）」も同じ意味でよく使われます。',
    detailedExplanation: '長期間応援してくれているファンへの感謝を伝える際の必須単語です。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'V LIVE',
    formality: 'polite',
    realExample: 'デビュー記念日、周年記念'
  },

  {
    id: 404,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '心がいっぱい',
    question: '1位の感想で「感謝の気持ちでいっぱいです」と言う時は？',
    options: [
      '감사한 마음이 터질 것 같아요', // (조금 과격하지만 쓸 수는 있음: 爆発しそうです)
      '감사한 마음 가득해요',      // 정답
      '감사한 마음이 텅 비었어요',   // (오답: 空っぽです)
      '감사한 마음이 부족해요'      // (오답: 足りません)
    ],
    correctAnswer: 1,
    explanation: '「가득하다（いっぱいだ）」を使って、心が満たされていることを表現します。',
    detailedExplanation: '感動して言葉が出ない時によく使われる表現です。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'award_speech',
    realExample: '音楽番組1位、授賞式'
  },

  {
    id: 405,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: 'おかげです',
    question: '「皆さんのおかげです」の正しい表現は？（※間違いやすい文法に注意）',
    options: [
      '여러분 때문입니다',         // (오답: 〜のせいです ※ネガティブ)
      '여러분 덕분입니다',         // 정답
      '여러분 탓입니다',           // (오답: 〜のせいです ※非難)
      '여러분 잘못입니다'          // (오답: 〜の過ちです)
    ],
    correctAnswer: 1,
    explanation: '良い結果には「덕분（おかげ）」、悪い結果には「때문/탓（せい）」を使います。',
    detailedExplanation: '「여러분 때문입니다」と言うと「皆さんのせいです」と聞こえる場合があるので、必ず「덕분입니다」を使いましょう。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'award_speech',
    formality: 'formal',
    realExample: 'ほぼ全アイドルが使う定番フレーズ'
  },

  {
    id: 406,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '愛してます',
    question: 'コンサートのエンディングで叫ぶ「愛してます！」は？',
    options: [
      '좋아해요!',                 // (고백 느낌, 콘서트 엔딩으로는 조금 약함)
      '사랑해요!',                 // 정답
      '사랑했었어요!',              // (과거형: 愛していました ※別れの時)
      '사랑할까요?'                // (의문형: 愛しましょうか？)
    ],
    correctAnswer: 1,
    explanation: 'コンサートの最後は、最も直接的な愛情表現である「사랑해요!」が定番です。',
    detailedExplanation: '頭の上に手でハートを作りながら叫ぶのがお決まりのポーズです。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'love',
    context: 'concert',
    formality: 'polite',
    realExample: 'コンサート終了時の定番'
  },

  {
    id: 407,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '簡潔な感謝',
    question: 'SNSでファンに「（応援）ありがとう！」と親しみを込めて言う時は？',
    options: [
      '수고했어',                  // (오답: お疲れ - ※スタッフやメンバーに言う言葉)
      '고마워요',                  // 정답
      '미안해요',                  // (오답: ごめんね)
      '축하해요'                   // (오답: おめでとう)
    ],
    correctAnswer: 1,
    explanation: '「고마워요」は「감사합니다」よりも柔らかく、親近感のある表現です。',
    detailedExplanation: 'さらにカジュアルに「고마워!（タメ口）」を使うこともありますが、まずは「고마워요」を覚えましょう。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'grateful',
    context: 'SNS',
    formality: 'casual'
  },

  // === INTERMEDIATE: シーンによる使い分け (12問) ===

  {
    id: 408,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '心から感謝',
    question: '授賞式のような公的な場で「心より感謝申し上げます」と言う時は？',
    options: [
      '마음으로 고맙습니다',        // (약간 어색한 표현)
      '진심으로 감사드립니다',      // 정답
      '진짜로 땡큐',               // (너무 가벼움)
      '정말로 고마워'              // (반말: 친구에게 하는 말)
    ],
    correctAnswer: 1,
    explanation: '格式高い場では「진심으로（心から/本心で）」＋「감사드립니다（感謝申し上げます）」を使います。',
    detailedExplanation: '「드립니다（差し上げる）」を使うことで、ファンへの敬意を最大限に表します。',
    usage: 'gratitude',
    frequency: 'very_high',
    formality: 'formal',
    context: 'award_speech',
    realExample: 'MAMA、Golden Disc等の授賞式'
  },

  {
    id: 409,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '恩返しの約束',
    question: '「この愛に必ず応えます（恩返しします）」という決まり文句は？',
    options: [
      '반드시 보상하겠습니다',      // (보상: 損害賠償のニュアンスがある)
      '꼭 보답하겠습니다',          // 정답
      '꼭 배상하겠습니다',          // (배상: 弁償します)
      '반드시 갚아주겠습니다'       // (복수: 復讐してやる、とも聞こえる)
    ],
    correctAnswer: 1,
    explanation: '「보답하다（報いる・恩返しする）」がアイドルの決まり文句です。',
    detailedExplanation: '「보상（補償）」や「배상（賠償）」はお金や損害に関わる言葉なので使いません。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'concert',
    formality: 'formal',
    emotion: 'determined'
  },

  {
    id: 410,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '応援への感謝',
    question: '「応援してくださってありがとうございます」の自然な敬語表現は？',
    options: [
      '응원해 줘서 고마워',         // (반말: 友達同士)
      '응원해 주셔서 감사합니다',   // 정답
      '응원하고 감사합니다',        // (문법 오류: 応援して、感謝します)
      '응원해서 감사합니다'         // (약간 어색함: 応援したので感謝します)
    ],
    correctAnswer: 1,
    explanation: '「주셔서（〜してくださって）」を使うのがポイントです。',
    detailedExplanation: '「아/어 주다（〜してくれる）」の尊敬語「아/어 주시다」を活用します。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert',
    formality: 'polite',
    realExample: 'カムバックショー、コンサート'
  },

  {
    id: 411,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '力をもらう',
    question: '「皆さんのおかげで力が湧きます（頑張れます）」は？',
    options: [
      '여러분 덕분에 힘들어요',      // (오답: 皆さんのせいで「しんどい」です)
      '여러분 덕분에 힘이 나요',     // 정답
      '여러분 덕분에 힘이 없어요',   // (오답: 力がありません)
      '여러분 덕분에 힘을 뺐어요'    // (오답: 力を抜きました)
    ],
    correctAnswer: 1,
    explanation: '「힘이 나다（力が出る・湧く）」を使います。',
    detailedExplanation: 'よく似た「힘들어요（辛いです）」と間違えないように注意しましょう！全く逆の意味になります。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'grateful',
    context: 'V LIVE',
    formality: 'polite'
  },

  {
    id: 412,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '頑張れる理由',
    question: '「皆さんがいるから頑張れました」と過去を振り返る時は？',
    options: [
      '여러분이 없어서 힘냈어요',     // (오답: 皆さんがいなくて頑張りました)
      '여러분 덕분에 힘낼 수 있었어요', // 정답
      '여러분이 있어서 포기했어요',    // (오답: 皆さんがいて諦めました)
      '여러분 때문에 망했어요'        // (오답: 皆さんのせいで失敗しました)
    ],
    correctAnswer: 1,
    explanation: '「힘내다（頑張る/力を出す）」＋「ㄹ 수 있었다（〜できた）」の形です。',
    detailedExplanation: '困難な時期をファンの応援で乗り越えた、という感動的な文脈で使われます。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE',
    emotion: 'moved',
    formality: 'polite',
    realExample: '困難な時期後のV LIVE'
  },

  {
    id: 413,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: 'エネルギー源',
    question: 'ファンは「私のビタミン（活力の源）」だと言いたい時は？',
    options: [
      '여러분은 제 약이에요',        // (약: 薬 ※病気みたいに聞こえる)
      '여러분은 제 비타민이에요',     // 정답
      '여러분은 제 독이에요',        // (독: 毒)
      '여러분은 제 병이에요'         // (병: 病気)
    ],
    correctAnswer: 1,
    explanation: 'K-POPではファンを「비타민（ビタミン）」や「에너지（エネルギー）」に例えることがよくあります。',
    detailedExplanation: '「인간 비타민（人間ビタミン＝見ると元気になる人）」というあだ名もよく使われます。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'love',
    context: 'fan_letter',
    formality: 'polite'
  },

  {
    id: 414,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '幸せの理由',
    question: '「皆さんのおかげで幸せです」の自然な表現は？',
    options: [
      '여러분 덕분에 행복해요',     // 정답
      '여러분 덕분에 불행해요',     // (불행: 不幸です)
      '여러분 덕분에 우울해요',     // (우울: 憂鬱です)
      '여러분 덕분에 심심해요'      // (심심: 退屈です)
    ],
    correctAnswer: 0,
    explanation: '「행복하다（幸せだ）」を使います。最もポジティブな感謝の言葉です。',
    detailedExplanation: '「너무 행복해서 눈물이 나요（幸せすぎて涙が出ます）」などの応用表現もあります。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'happy',
    context: 'concert',
    formality: 'polite'
  },

  {
    id: 415,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '一緒にいてくれて',
    question: '「ずっと一緒にいてくれてありがとう」は？',
    options: [
      '잠깐 함께해 줘서 고마워요',    // (잠깐: 少しの間だけ)
      '쭉 함께해 줘서 고마워요',      // 정답
      '따로 함께해 줘서 고마워요',    // (따로: 別々に)
      '가끔 함께해 줘서 고마워요'     // (가끔: たまに)
    ],
    correctAnswer: 1,
    explanation: '継続的な状態を表す副詞「쭉（ずっと）」を使います。',
    detailedExplanation: '「곁에 있어 줘서 고마워요（そばにいてくれてありがとう）」も感動的な表現です。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'moved',
    context: 'V LIVE',
    formality: 'polite',
    realExample: '周年記念V LIVE'
  },

  {
    id: 416,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '支え',
    question: '「皆さんは私の支え（支柱）です」という比喩表現は？',
    options: [
      '여러분이 제 짐이에요',        // (짐: 荷物 ※お荷物、迷惑の意味になる)',
      '여러분이 제 버팀목이에요',     // 정답
      '여러분이 제 걸림돌이에요',     // (걸림돌: 邪魔者、障害物)',
      '여러분이 제 문제예요'         // (문제: 問題)
    ],
    correctAnswer: 1,
    explanation: '倒れないように支える木「버팀목（支え木）」という言葉を、精神的な支えとして使います。',
    detailedExplanation: '「짐（荷物）」と言ってしまうと、「負担だ/迷惑だ」という意味になるので要注意です！',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'V LIVE',
    formality: 'polite',
    realExample: '困難な時期後の告白'
  },

  {
    id: 417,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '来場への感謝',
    question: '会場に来てくれたファンに「来てくれてありがとう」と言う時は？',
    options: [
      '가줘서 고마워요',             // (가다: 行ってくれて ※ここから去ってくれて)',
      '와줘서 고마워요',             // 정답
      '나와줘서 고마워요',           // (나오다: 出てくれて ※番組出演などの時)',
      '돌아가줘서 고마워요'          // (돌아가다: 帰ってくれて)
    ],
    correctAnswer: 1,
    explanation: '「오다（来る）」を使って「와줘서（来てくれて）」と言います。',
    detailedExplanation: '「가줘서（行ってくれて）」は「帰ってくれて」という意味になり、失礼になるので注意しましょう。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert',
    formality: 'polite',
    realExample: 'コンサート開始時の定番'
  },

  {
    id: 418,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '聴いてくれて',
    question: '「私の歌を聴いてくれてありがとう」は？',
    options: [
      '제 노래를 불러 줘서 고마워요', // (부르다: 歌ってくれて)',
      '제 노래를 들어 줘서 고마워요', // 정답
      '제 노래를 팔아 줘서 고마워요', // (팔다: 売ってくれて)',
      '제 노래를 꺼 줘서 고마워요'    // (끄다: （再生を）止めて/消してくれて)'
    ],
    correctAnswer: 1,
    explanation: '「듣다（聴く）」の活用形「들어 줘서」を使います。',
    detailedExplanation: 'ストリーミングで応援してくれるファンへの感謝表現です。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE',
    formality: 'polite',
    realExample: 'カムバック後のV LIVE'
  },

  {
    id: 419,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '待ってくれて',
    question: '除隊や活動再開時、「待っていてくれてありがとう」と言う時は？',
    options: [
      '기대해 주셔서 감사합니다',     // (기대하다: 期待してくださって)',
      '기다려 주셔서 감사합니다',     // 정답
      '기도해 주셔서 감사합니다',     // (기도하다: 祈ってくださって)',
      '기억해 주셔서 감사합니다'      // (기억하다: 覚えていてくださって)'
    ],
    correctAnswer: 1,
    explanation: '「기다리다（待つ）」を使います。「기대（期待）」「기도（祈り）」など発音が似た単語に注意。',
    detailedExplanation: '兵役を終えたアイドルの第一声として最も感動的な言葉です。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE',
    emotion: 'moved',
    formality: 'polite',
    realExample: '兵役復帰後、長期休止後'
  },

  // === ADVANCED: 深い感謝・特別な場面 (5問) ===

  {
    id: 420,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '言葉にできない感謝',
    question: '「言葉で表現できないほど感謝しています」という最上級の感謝は？',
    options: [
      '말로 다 할 수 없을 만큼 감사해요',  // 정답
      '말로만 감사해요',                 // (오답: 口先だけで感謝します)
      '말없이 감사해요',                 // (오답: 無言で感謝します)
      '말도 안 되게 감사해요'             // (관용구: とんでもなく感謝します ※これも通じるが1番がより詩的)
    ],
    correctAnswer: 0,
    explanation: '「말로 다 할 수 없다（言葉ですべて言えない）」という表現を使います。',
    detailedExplanation: '大賞受賞など、感極まった瞬間に使われる表現です。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'award_speech',
    formality: 'polite',
    realExample: 'MAMA、Golden Disc等の大賞受賞時'
  },

  {
    id: 421,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '変わらない愛への感謝',
    question: '「変わらない愛をありがとうございます」は？',
    options: [
      '변덕스러운 사랑 감사해요',     // (변덕: 気まぐれな愛)
      '변함없는 사랑 감사해요',       // 정답
      '변해버린 사랑 감사해요',       // (변해버린: 変わってしまった愛)
      '별난 사랑 감사해요'           // (별난: 変な/変わった愛)
    ],
    correctAnswer: 1,
    explanation: '「변함없다（変わらない）」を使います。長寿グループがよく使う言葉です。',
    detailedExplanation: '「한결같은 사랑（一途な/変わらない愛）」という表現も高級な表現として覚えましょう。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'concert',
    formality: 'polite',
    realExample: '周年記念コンサート'
  },

  {
    id: 422,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '存在そのものへの感謝',
    question: '「皆さんがいてくれたから、私は生きてこられました」は？',
    options: [
      '여러분이 있어서 살 수 있었어요',       // 정답
      '여러분이 있어서 살기 싫었어요',        // (오답: 生きたくなかったです)
      '여러분이 있어서 죽을 뻔했어요',        // (오답: 死ぬところでした ※冗談や悪い意味)
      '여러분이 있어서 집에 갔어요'           // (오답: 家に帰りました)
    ],
    correctAnswer: 0,
    explanation: '「살 수 있다（生きることができる）」の過去形で、ファンの存在が生きる力だったことを伝えます。',
    detailedExplanation: '非常に重みのある言葉で、つらい時期を告白する際などに使われます。',
    usage: 'gratitude',
    frequency: 'medium',
    emotion: 'moved',
    context: 'V LIVE',
    formality: 'polite',
    realExample: '深刻な困難後の告白'
  },

  {
    id: 423,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: 'もっと良い姿で',
    question: '「もっと良い姿（成長した姿）で恩返しします」は？',
    options: [
      '더 좋은 얼굴로 보답하겠습니다',        // (얼굴: 顔 ※整形したように聞こえるかも)
      '더 좋은 모습으로 보답하겠습니다',      // 정답
      '더 좋은 몸매로 보답하겠습니다',        // (몸매: 体つき/スタイル)
      '더 비싼 모습으로 보답하겠습니다'       // (비싼: 高い)
    ],
    correctAnswer: 1,
    explanation: '韓国語の「모습（姿）」は、外見だけでなく、実力や人間性を含めた「あり方」を指します。',
    detailedExplanation: 'カムバックを約束する際の決まり文句です。「기대해 주세요（期待してください）」とセットで使います。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'award_speech',
    emotion: 'determined',
    formality: 'formal',
    realExample: '授賞式の定番締めくくり'
  },

  {
    id: 424,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '生涯の約束',
    question: '「これからもずっと一緒にいましょう」という約束は？',
    options: [
      '앞으로도 쭉 함께해요',               // 정답
      '뒤로도 쭉 함께해요',                 // (뒤로: 後ろへ)
      '옆으로만 가세요',                   // (오답: 横にだけ行ってください)
      '앞으로는 따로 가요'                 // (오답: これからは別々に行きましょう)
    ],
    correctAnswer: 0,
    explanation: '未来を表す「앞으로도（これからも/今後も）」を使います。',
    detailedExplanation: '「꽃길만 걷자（花道だけ歩こう）」という表現も、未来へのポジティブな約束としてよく使われます。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'concert',
    emotion: 'love',
    formality: 'polite',
    realExample: '周年記念・重要な節目'
  }
];