import { Question } from '../../../types';

export const fanLetterQuestions: Question[] = [
  // 書き出し (5問)
  {
    id: 600,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '手紙の書き出し',
    question: 'ファンレターの書き出しとして、最も丁寧で自然な挨拶は？',
    options: [
      '안녕, 잘 지내?',                  // (반말: 친구 사이)
      '안녕하세요, 사랑하는 [名前]님',     // 정답
      '잘 가세요, [名前]님',              // (오답: 작별 인사)
      '처음 뵙겠습니다만 누구세요?',       // (오답: 누구세요?)
    ],
    correctAnswer: 1,
    explanation: '「안녕하세요（こんにちは）」に「사랑하는（愛する）」と相手の名前、「님（様）」をつけるのがファンレターの定番です。',
    detailedExplanation: '初対面でも「사랑하는」を使うことでファンとしての愛情を表現できます。',
    usage: 'greeting',
    frequency: 'extremely_high',
    context: 'fan_letter',
    formality: 'polite'
  },
  {
    id: 601,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '手紙を書きます',
    question: '「手紙を書くのは初めてです」と伝えたい時は？',
    options: [
      '편지를 처음 써 봐요',            // 정답
      '편지를 쓰지 않을 거예요',        // (오답: 手紙を書かないつもりです)
      '편지를 찢었어요',               // (오답: 手紙を破りました)
      '편지를 받았어요'                // (오답: 手紙をもらいました)
    ],
    correctAnswer: 0,
    explanation: '「처음（初めて）」＋「쓰다（書く）」＋「〜해 보다（〜してみる）」を使います。',
    detailedExplanation: '「이렇게 편지를 쓰는 건 처음이에요（こうして手紙を書くのは初めてです）」という表現もよく使われます。',
    usage: 'greeting',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 602,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '初めて',
    question: '「ドキドキしています」という気持ちを表す表現は？',
    options: [
      '화가 나요',                    // (오답: 怒っています)
      '배가 고파요',                  // (오답: お腹が空いています)
      '떨리고 설레요',                // 정답
      '지루해요'                      // (오답: 退屈です)
    ],
    correctAnswer: 2,
    explanation: '「떨리다（震える）」と「설레다（ときめく）」を合わせて、緊張と期待が混ざった気持ちを表現します。',
    detailedExplanation: 'ファンレターを書く時の緊張感を伝えるのに最適な表現です。',
    usage: 'greeting',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 603,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '勇気を出して',
    question: '「勇気を出してペン（筆）を執りました」という慣用句的な表現は？',
    options: [
      '용기 내어 펜을 들었어요',        // 정답
      '용기 내어 펜을 버렸어요',        // (오답: ペンを捨てました)
      '겁이 나서 도망갔어요',           // (오답: 怖くて逃げました)
      '펜을 사고 싶어요'               // (오답: ペンを買いたいです)
    ],
    correctAnswer: 0,
    explanation: '「펜을 들다（ペンを持つ＝書き始める）」という表現を使います。',
    detailedExplanation: '少し文学的で素敵な表現です。「용기 내어（勇気を出して）」とセットでよく使われます。',
    usage: 'greeting',
    frequency: 'medium',
    context: 'fan_letter',
    emotion: 'happy'
  },
  {
    id: 604,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '伝えたくて',
    question: '「どうしても伝えたい言葉があって手紙を書きました」は？',
    options: [
      '할 말이 없어서 썼어요',          // (오답: 言うことがなくて書きました)
      '꼭 전하고 싶은 말이 있어서요',    // 정답
      '말을 하기 싫어요',              // (오답: 話をしたくないです)
      '편지를 쓰기 귀찮아요'           // (오답: 手紙を書くのが面倒です)
    ],
    correctAnswer: 1,
    explanation: '「꼭（必ず・どうしても）」＋「전하다（伝える）」を使います。',
    detailedExplanation: '手紙を書いた動機（きっかけ）を説明する際によく使われるフレーズです。',
    usage: 'greeting',
    frequency: 'high',
    context: 'fan_letter'
  },

  // 応援・愛情表現 (10問)
  {
    id: 605,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '応援してます',
    question: '「遠くからいつも応援しています」は？',
    options: [
      '멀리서 항상 응원해요',           // 정답
      '가까이 오지 마세요',             // (오답: 近づかないでください)
      '응원하지 않을게요',              // (오답: 応援しません)
      '멀리 도망가세요'                // (오답: 遠くへ逃げてください)
    ],
    correctAnswer: 0,
    explanation: '海外ファンがよく使う表現です。「멀리서（遠くから）」＋「항상（いつも）」＋「응원해요（応援します）」',
    detailedExplanation: '物理的な距離は離れていても、心はそばにいることを伝えられます。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 606,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: 'ずっと応援',
    question: '「死ぬまで（一生）応援します」という強い表現は？',
    options: [
      '죽을 때까지 응원할게요',         // 정답
      '내일까지만 응원할게요',          // (오답: 明日までだけ応援します)
      '죽지 말고 응원하세요',           // (오답: 死なずに応援してください - ※主客転倒)
      '가끔만 응원할게요'               // (오답: たまにだけ応援します)
    ],
    correctAnswer: 0,
    explanation: '「죽을 때까지（死ぬ時まで）」や「평생（一生）」を使って強い意志を伝えます。',
    detailedExplanation: '少し重い表現に聞こえますが、ファンレターでは情熱的な愛情表現として許容されます。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 607,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: 'ファンです',
    question: '「大ファンです」と強調して言う時は？',
    options: [
      '그냥 팬이에요',                 // (오답: ただのファンです)
      '엄청난 팬이에요',               // (문법적으로 맞지만 3번이 더 자연스러움)
      '왕팬이에요',                    // 정답 (구어체)
      '안티팬이에요'                   // (오답: アンチファンです)
    ],
    correctAnswer: 2,
    explanation: '「王（ワン）」をつけて「왕팬（大ファン）」と言うカジュアルな表現があります。',
    detailedExplanation: '「열혈 팬（熱血ファン）」や「찐팬（本当のファン）」という表現も最近よく使われます。',
    usage: 'greeting',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 608,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '好きです',
    question: '「世界で一番好きです」は？',
    options: [
      '세상에서 제일 좋아해요',         // 정답
      '우주에서 제일 싫어해요',         // (오답: 宇宙で一番嫌いです)
      '세상을 좋아해요',               // (오답: 世の中が好きです)
      '제일 좋아하는 척해요'           // (오답: 一番好きなふりをします)
    ],
    correctAnswer: 0,
    explanation: '「세상에서（世界で）」＋「제일（一番）」を使います。',
    detailedExplanation: '「우주에서 제일（宇宙で一番）」と言えばさらにスケールが大きくなります。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'fan_letter',
    emotion: 'love'
  },
  {
    id: 609,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '愛してます',
    question: '「愛してる」の様々な表現の中で、文脈に合わないものは？',
    options: [
      '사랑해요',
      '사랑합니다',
      '사랑해',                       // (※年下や親しい仲ならOKだが、初手紙では注意)
      '미워해요'                      // 정답 (오답: 憎んでいます)
    ],
    correctAnswer: 3,
    explanation: '「미워해요」は「憎んでいます・嫌いです」という意味なので、ファンレターでは使いません。',
    detailedExplanation: '他の3つはすべて「愛しています」という意味で使えます。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'fan_letter',
    emotion: 'love'
  },
  {
    id: 610,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '誇りに思う',
    question: '「あなたのファンであることが誇らしいです」は？',
    options: [
      '팬인 게 부끄러워요',             // (오답: ファンなのが恥ずかしいです)
      '팬인 게 자랑스러워요',           // 정답
      '팬을 그만두고 싶어요',           // (오답: ファンを辞めたいです)
      '팬인 척하고 있어요'              // (오답: ファンのふりをしています)
    ],
    correctAnswer: 1,
    explanation: '「자랑스럽다（誇らしい）」を使います。',
    detailedExplanation: '「내가 [グループ名]의 팬이라서 행복해요（私が〇〇のファンで幸せです）」とも言い換えられます。',
    usage: 'cheering',
    frequency: 'high',
    context: 'fan_letter',
    emotion: 'happy'
  },
  {
    id: 611,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '憧れです',
    question: '「私のロールモデル（憧れ）です」は？',
    options: [
      '제 롤모델이에요',               // 정답
      '제 라이벌이에요',               // (오답: 私のライバルです)
      '제 부하 직원이에요',             // (오답: 私の部下です)
      '제 친구의 친구예요'              // (오답: 私の友達の友達です)
    ],
    correctAnswer: 0,
    explanation: '英語のRole Modelをそのまま「롤모델（ロルモデル）」と書きます。',
    detailedExplanation: '「닮고 싶어요（似たいです＝見習いたいです）」という表現も一緒に使えます。',
    usage: 'cheering',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 612,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '勇気をもらう',
    question: '「[名前]のおかげで頑張れます」は？',
    options: [
      '[名前] 덕분에 힘이 나요',       // 정답
      '[名前] 때문에 힘들어요',        // (오답: 〇〇のせいで辛いです)
      '[名前] 덕분에 포기했어요',      // (오답: 〇〇のおかげで諦めました)
      '[名前] 없이도 살 수 있어요'     // (오답: 〇〇なしでも生きられます)
    ],
    correctAnswer: 0,
    explanation: '「힘이 나요（力が出ます＝頑張れます）」を使います。',
    detailedExplanation: '「덕분에（おかげで）」は良い結果に使い、「때문에（せいで）」は悪い結果に使うことが多いので注意しましょう。',
    usage: 'cheering',
    frequency: 'very_high',
    context: 'fan_letter',
    emotion: 'happy'
  },
  {
    id: 613,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '希望です',
    question: '「私の人生の光です」という詩的な表現は？',
    options: [
      '제 인생의 빛이에요',            // 정답
      '제 인생의 빚이에요',            // (함정: 빛[光]と빚[借金]の発音が同じ)
      '제 인생의 어둠이에요',          // (오답: 私の人生の闇です)
      '제 인생의 끝이에요'             // (오답: 私の人生の終わりです)
    ],
    correctAnswer: 0,
    explanation: '「빛（光）」と「빚（借金）」は発音が同じですが、意味が全く違います。綴りに注意！',
    detailedExplanation: '「한 줄기 빛（一筋の光）」という表現も感動的です。',
    usage: 'cheering',
    frequency: 'medium',
    context: 'fan_letter',
    emotion: 'love'
  },
  {
    id: 614,
    category: 'fanLetter',
    difficulty: 'advanced',
    questionJa: '生きる理由',
    question: '「生まれてきてくれてありがとう」という最上級の感謝は？',
    options: [
      '태어나 줘서 고마워요',           // 정답
      '태어나서 미안해요',              // (오답: 生まれてすみません)
      '일찍 일어나서 고마워요',         // (오답: 早起きしてくれてありがとう)
      '밥 먹어 줘서 고마워요'           // (오답: ご飯食べてくれてありがとう)
    ],
    correctAnswer: 0,
    explanation: 'アイドルの誕生日に特によく使われる、K-POPファンの定番フレーズです。',
    detailedExplanation: '「노래해 줘서 고마워요（歌ってくれてありがとう）」も感動的な表現です。',
    usage: 'cheering',
    frequency: 'medium',
    context: 'fan_letter',
    emotion: 'moved'
  },

  // 健康・幸せを願う (5問)
  {
    id: 615,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '健康でいてください',
    question: '「体調に気をつけて」と心配する時は？',
    options: [
      '감기 조심하세요',               // 정답
      '사람 조심하세요',               // (오답: 人に気をつけてください)
      '차 조심하세요',                 // (오답: 車に気をつけてください)
      '지갑 조심하세요'                // (오답: 財布に気をつけてください)
    ],
    correctAnswer: 0,
    explanation: '季節の挨拶として「감기 조심하세요（風邪に気をつけて）」が最もよく使われます。',
    detailedExplanation: '単に「건강 챙기세요（健康に気をつけて）」と言うことも多いです。',
    usage: 'request',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 616,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '無理しないで',
    question: '「ご飯をしっかり食べてください」と心配する表現は？',
    options: [
      '밥 잘 챙겨 드세요',             // 정답
      '밥 굶으세요',                   // (오답: ご飯を抜いてください)
      '밥 먹지 마세요',                // (오답: ご飯を食べないでください)
      '물만 드세요'                    // (오답: 水だけ飲んでください)
    ],
    correctAnswer: 0,
    explanation: '韓国では挨拶として「ご飯食べましたか？」と聞くほど、食事を重要視します。',
    detailedExplanation: '忙しいアイドルに対して「밥 거르지 마세요（ご飯を抜かないで）」と言うのも愛情表現です。',
    usage: 'request',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 617,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '幸せであってほしい',
    question: '「いつも幸せでいてほしい」と願う表現は？',
    options: [
      '불행했으면 좋겠어요',            // (오답: 不幸だったらいいです)
      '늘 행복만 가득하길 바래요',      // 정답
      '가끔만 행복하세요',              // (오답: たまにだけ幸せでいてください)
      '슬픈 일만 생기길 바래요'         // (오답: 悲しいことだけ起きますように)
    ],
    correctAnswer: 1,
    explanation: '「행복만 가득하길（幸せだけがいっぱいであることを）」という表現がとても綺麗です。',
    detailedExplanation: '「꽃길만 걸어요（花道だけを歩こう＝いいことだけありますように）」も定番です。',
    usage: 'request',
    frequency: 'very_high',
    context: 'fan_letter',
    emotion: 'love'
  },
  {
    id: 618,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '休んでください',
    question: '「疲れた時は休んでください」は？',
    options: [
      '힘들 땐 쉬어 가세요',           // 정답
      '힘들어도 참으세요',             // (오답: 辛くても我慢してください)
      '잠을 자지 마세요',              // (오답: 寝ないでください)
      '계속 일하세요'                  // (오답: ずっと働いてください)
    ],
    correctAnswer: 0,
    explanation: '「쉬어 가다（休んでいく＝一休みする）」という表現を使います。',
    detailedExplanation: '無理をしているアイドルを労わる優しい表現です。',
    usage: 'request',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 619,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '自分を大切に',
    question: '「自分自身を一番大切に考えてね」は？',
    options: [
      '남만 생각하세요',               // (오답: 他人のことだけ考えてください)
      '본인을 제일 먼저 생각하세요',    // 정답
      '아무 생각도 하지 마세요',        // (오답: 何も考えないでください)
      '돈만 생각하세요'                // (오답: お金のことだけ考えてください)
    ],
    correctAnswer: 1,
    explanation: '「본인（本人＝自分）」や「자신（自身）」を使います。',
    detailedExplanation: 'ファンよりも、仕事よりも、まずは自分を大切にしてほしいという深い愛情表現です。',
    usage: 'request',
    frequency: 'high',
    context: 'fan_letter'
  },

  // 締めの言葉 (5問)
  {
    id: 620,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: 'これからも',
    question: '手紙の最後で「愛を込めて」と書くときは？',
    options: [
      '사랑을 담아',                   // 정답
      '화가 나서',                     // (오답: 腹が立って)
      '미워하면서',                    // (오답: 憎みながら)
      '아무 생각 없이'                 // (오답: 何も考えずに)
    ],
    correctAnswer: 0,
    explanation: '手紙の末尾に、自分の名前の前につける定型句です。',
    detailedExplanation: '「사랑하는 팬 OOO 올림（愛するファン 〇〇より）」という書き方も一般的です。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 621,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '読んでくれて',
    question: '「最後まで読んでくれてありがとう」は？',
    options: [
      '끝까지 읽어 주셔서 감사합니다',  // 정답
      '중간만 읽어 주세요',            // (오답: 途中だけ読んでください)
      '읽지 말고 버려 주세요',          // (오답: 読まずに捨ててください)
      '읽다가 주무세요'                // (오답: 読んでいて寝てください)
    ],
    correctAnswer: 0,
    explanation: '長い手紙を読んでくれたことへの感謝を伝えます。',
    detailedExplanation: '「긴 글 읽어 주셔서 감사합니다（長い文章を読んでくれて〜）」もよく使います。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 622,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: 'いつも感謝',
    question: '「私の力になってくれてありがとう」は？',
    options: [
      '제 힘이 되어 줘서 고마워요',     // 정답
      '제 짐이 되어 줘서 고마워요',     // (함정: 짐[荷物]になってくれて - ※迷惑)
      '저를 괴롭혀서 고마워요',         // (오답: 私をいじめてくれてありがとう)
      '아무것도 안 해서 고마워요'       // (오답: 何もしなくてありがとう)
    ],
    correctAnswer: 0,
    explanation: '「힘（力）」と「짐（荷物）」の発音が似ていることを利用したひっかけ問題です。',
    detailedExplanation: 'アイドルが存在するだけで力になる、という感謝を伝えます。',
    usage: 'closing',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 623,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: 'ずっと一緒に',
    question: '「いつまでも一緒にいましょう」は？',
    options: [
      '오래오래 함께해요',             // 정답
      '잠시만 함께해요',               // (오답: 少しの間だけ一緒にいましょう)
      '따로따로 살아요',               // (오답: 別々に暮らしましょう)
      '모르는 척해요'                  // (오답: 知らないふりをしましょう)
    ],
    correctAnswer: 0,
    explanation: '「오래오래（いつまでも/末長く）」という副詞を使います。',
    detailedExplanation: 'おとぎ話の結び言葉（幸せに暮らしました）などでも使われる、温かい表現です。',
    usage: 'closing',
    frequency: 'very_high',
    context: 'fan_letter',
    emotion: 'love'
  },
  {
    id: 624,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '返事はいらない',
    question: '「返事はいりません（負担に思わないで）」と気遣う表現は？',
    options: [
      '답장은 꼭 해주세요',             // (오답: 返事は必ずしてください)
      '답장은 괜찮아요',                // 정답
      '답장 안 하면 화낼 거예요',       // (오답: 返事しないと怒ります)
      '돈을 보내주세요'                 // (오답: お金を送ってください)
    ],
    correctAnswer: 1,
    explanation: '忙しいアイドルに負担をかけないよう、「답장은 괜찮아요（返事は大丈夫です）」と書くのがマナーです。',
    detailedExplanation: '「마음만 받을게요（気持ちだけ受け取ります）」という表現もあります。',
    usage: 'closing',
    frequency: 'medium',
    context: 'fan_letter'
  }
];