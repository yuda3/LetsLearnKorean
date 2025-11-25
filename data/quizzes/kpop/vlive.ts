import { Question } from '../../../types';

export const vliveQuestions: Question[] = [
  // 挨拶・開始 (10問)
  {
    id: 300,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'V LIVE開始の挨拶',
    question: '配信開始で「皆さんこんにちは」は？',
    options: [
      '여러분 안녕하세요',
      '여러분 감사합니다',
      '팬 여러분 사랑해요',
      '안녕하세요だけ使う'
    ],
    correctAnswer: 0,
    explanation: '「여러분(皆さん) + 안녕하세요(こんにちは)」が基本パターンです。',
    detailedExplanation: 'ほぼすべてのアイドルが配信開始時に使う定番フレーズ。「여러분」でファン全体に呼びかけます。例: BTS、BLACKPINK、NewJeansなど。',
    context: 'V LIVE',
    usage: 'greeting',
    frequency: 'extremely_high'
  },
  {
    id: 301,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '久しぶりの配信',
    question: '「久しぶりです」は韓国語で？',
    options: [
      '오랜만이에요',
      '처음이에요',
      '다시 만나요',
      '또 봐요'
    ],
    correctAnswer: 0,
    explanation: '「오랜만」は「久しぶり」という意味です。',
    detailedExplanation: '配信が久しぶりの時の定番表現。よりカジュアルには「오랜만이야」、丁寧には「오랜만입니다」も使います。',
    context: 'V LIVE',
    frequency: 'very_high'
  },
  {
    id: 302,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '会いたかった',
    question: 'ファンに「会いたかったです」は？',
    options: [
      '보고 싶었어요',
      '만나고 싶었어요',
      '그리웠어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「会いたかった」の意味で使えます。',
    detailedExplanation: '보고 싶다(会いたい)、만나고 싶다(会いたい)、그립다(恋しい)。ニュアンスは少し違いますが、V LIVEではすべて使われます。「보고 싶었어요」が最も一般的。',
    context: 'V LIVE',
    emotion: 'longing',
    frequency: 'extremely_high'
  },
  {
    id: 303,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '元気でしたか',
    question: '「元気でしたか？」は？',
    options: [
      '잘 지냈어요?',
      '어떻게 지냈어요?',
      '건강했어요?',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて相手の近況を尋ねる表現です。',
    detailedExplanation: '잘 지내다(元気に過ごす)、어떻게 지내다(どう過ごす)、건강하다(健康だ)。「잘 지냈어요?」が最も自然でよく使われます。',
    context: 'V LIVE',
    usage: 'greeting'
  },
  {
    id: 304,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '食事配信',
    question: '「食べ放送スタート！」は？',
    options: [
      '먹방 시작!',
      '식사 시작!',
      '음식 먹어요!',
      '배고파요!'
    ],
    correctAnswer: 0,
    explanation: '「먹방(食べ放送) + 시작(スタート)」です。',
    detailedExplanation: '먹방は「먹는 방송(食べる放送)」の略。K-POPアイドルの配信でも超頻出。食べながら配信する時の決まり文句。',
    context: 'V LIVE',
    usage: 'mukbang',
    frequency: 'very_high'
  },
  {
    id: 305,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '何してた？',
    question: '「最近何してましたか？」は？',
    options: [
      '요즘 뭐 했어요?',
      '지금 뭐 해요?',
      '오늘 뭐 했어요?',
      '어제 뭐 했어요?'
    ],
    correctAnswer: 0,
    explanation: '「요즘(最近) + 뭐 했어요?(何してました?)」',
    detailedExplanation: '요즘(最近)、지금(今)、오늘(今日)、어제(昨日)。配信で視聴者に聞く定番の質問。',
    context: 'V LIVE',
    usage: 'conversation'
  },
  {
    id: 306,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '眠い時',
    question: '「眠いです」は韓国語で？',
    options: [
      '졸려요',
      '피곤해요',
      '자고 싶어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「眠い」を表現できます。',
    detailedExplanation: '졸리다(眠い)、피곤하다(疲れている)、자고 싶다(寝たい)。深夜配信でよく聞く表現。「졸려요」が最も直接的。',
    context: 'V LIVE',
    frequency: 'high'
  },
  {
    id: 307,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'お腹空いた',
    question: '「お腹空きました」は？',
    options: [
      '배고파요',
      '배불러요',
      '먹고 싶어요',
      '맛있어요'
    ],
    correctAnswer: 0,
    explanation: '「배고프다」は「お腹が空く」という意味です。',
    detailedExplanation: '배고프다(お腹が空く)、배부르다(お腹いっぱい)、먹고 싶다(食べたい)。配信中によく言う表現。',
    context: 'V LIVE',
    frequency: 'very_high'
  },
  {
    id: 308,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '見てくれてありがとう',
    question: '配信終了で「見てくれてありがとう」は？',
    options: [
      '봐주셔서 감사합니다',
      '와주셔서 감사합니다',
      '시청해 주셔서 감사합니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて視聴への感謝を表します。',
    detailedExplanation: '보다(見る)、오다(来る)、시청하다(視聴する)。「봐주셔서」が最もカジュアルで自然。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high'
  },
  {
    id: 309,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '次回の配信',
    question: '「また配信します」は？',
    options: [
      '또 방송할게요',
      '다시 올게요',
      '곧 올게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「また来ます」の意味で使えます。',
    detailedExplanation: '방송하다(放送する)、오다(来る)、곧(すぐに)。配信終了時の定番フレーズ。',
    context: 'V LIVE',
    usage: 'closing'
  },

  // コメント読み (10問)
  {
    id: 310,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'コメントを読む',
    question: '「コメントたくさん読みますね」は？',
    options: [
      '댓글 많이 읽을게요',
      '코멘트 많이 볼게요',
      '채팅 많이 볼게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてコメントを読むという意味です。',
    detailedExplanation: '댓글(コメント)、코멘트(コメント)、채팅(チャット)。「댓글」が最も一般的。많이(たくさん)、읽다(読む)、보다(見る)。',
    context: 'V LIVE',
    usage: 'interaction'
  },
  {
    id: 311,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '質問に答える',
    question: '「質問に答えます」は？',
    options: [
      '질문에 답할게요',
      '질문 받아요',
      '궁금한 거 말해주세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてQ&Aセッションで使える表現です。',
    detailedExplanation: '질문(質問)、답하다(答える)、받다(受ける)、궁금하다(気になる)。V LIVEのQ&Aコーナーで頻出。',
    context: 'V LIVE',
    usage: 'QA'
  },
  {
    id: 312,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'リクエストを聞く',
    question: '「何が見たいですか？」は？',
    options: [
      '뭐 보고 싶어요?',
      '뭐 하고 싶어요?',
      '뭘 원해요?',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて視聴者の希望を聞く表現です。',
    detailedExplanation: '보다(見る)、하다(する)、원하다(望む)、고 싶다(〜したい)。視聴者に何をしてほしいか聞く時に使います。',
    context: 'V LIVE',
    usage: 'interaction'
  },
  {
    id: 313,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '今日のテーマ',
    question: '「今日は〜をします」は？',
    options: [
      '오늘은 [~]를 할 거예요',
      '오늘 [~] 해요',
      '오늘은 [~]할게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて今日の予定を伝える表現です。',
    detailedExplanation: 'ㄹ 거예요(〜するつもり・予定)、해요(します・現在)、ㄹ게요(〜します・意志)。配信のテーマを紹介する時に使います。',
    context: 'V LIVE',
    usage: 'announcement'
  },
  {
    id: 314,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '近況報告',
    question: '「最近忙しかったです」は？',
    options: [
      '요즘 바빴어요',
      '요즘 많이 바빴어요',
      '최근에 바빴어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「最近忙しかった」を表現できます。',
    detailedExplanation: '요즘(最近)、최근에(最近)、바쁘다(忙しい)、많이(とても)。久しぶりの配信で近況を伝える定番表現。',
    context: 'V LIVE',
    usage: 'update'
  },
  {
    id: 315,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '新曲について',
    question: '「新曲を準備しています」は？',
    options: [
      '신곡을 준비하고 있어요',
      '새 노래를 만들어요',
      '곡 작업 중이에요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて新曲制作を伝える表現です。',
    detailedExplanation: '신곡(新曲)、준비하다(準備する)、새 노래(新しい歌)、만들다(作る)、곡 작업(曲作業)。カムバック前によく使う表現。',
    context: 'V LIVE',
    usage: 'announcement',
    frequency: 'high'
  },
  {
    id: 316,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'カムバック予告',
    question: '「もうすぐカムバックします」は？',
    options: [
      '곧 컴백해요',
      '곧 돌아와요',
      '곧 활동해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてカムバックを伝える表現です。',
    detailedExplanation: '컴백(カムバック)、돌아오다(戻る)、활동하다(活動する)、곧(もうすぐ)。ファンが最も待つアナウンス。',
    context: 'V LIVE',
    usage: 'announcement',
    frequency: 'high'
  },
  {
    id: 317,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '体調を聞かれて',
    question: '「健康です、心配しないでください」は？',
    options: [
      '건강해요, 걱정 마세요',
      '괜찮아요, 걱정하지 마세요',
      '건강하니까 걱정 안 해도 돼요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて健康を伝え、心配しないよう言う表現です。',
    detailedExplanation: '건강하다(健康だ)、괜찮다(大丈夫だ)、걱정하다(心配する)、마세요(〜しないでください)。ファンが心配している時の定番返答。',
    context: 'V LIVE',
    usage: 'reassurance'
  },
  {
    id: 318,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '応援へのお礼',
    question: '「いつも応援ありがとう」は？',
    options: [
      '항상 응원해 주셔서 감사해요',
      '늘 응원 감사합니다',
      '언제나 응원해 줘서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて応援への感謝を表します。',
    detailedExplanation: '항상/늘/언제나(いつも)、응원하다(応援する)、감사하다(感謝する)、고맙다(ありがたい)。丁寧さが異なります。',
    context: 'V LIVE',
    usage: 'gratitude',
    frequency: 'extremely_high'
  },
  {
    id: 319,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '配信時間',
    question: '「長く配信できなくてすみません」は？',
    options: [
      '오래 방송 못해서 미안해요',
      '길게 못해서 죄송해요',
      '많이 못 해줘서 미안해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて謝罪の表現です。',
    detailedExplanation: '오래(長く)、길게(長く)、많이(たくさん)、못하다(できない)、미안하다(すまない)、죄송하다(申し訳ない)。忙しい時によく聞く表現。',
    context: 'V LIVE',
    usage: 'apology'
  },

  // 終了・別れ (10問)
  {
    id: 320,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '配信終了',
    question: '「そろそろ終わります」は？',
    options: [
      '이제 끝낼게요',
      '슬슬 끝날 시간이에요',
      '이만 끝낼게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて配信終了を伝える表現です。',
    detailedExplanation: '이제(もう)、슬슬(そろそろ)、이만(これで)、끝내다(終える)。終了前の定番フレーズ。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high'
  },
  {
    id: 321,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'さようなら',
    question: '「バイバイ」は韓国語で？',
    options: [
      '바이바이',
      '안녕',
      '잘 가',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて別れの挨拶として使えます。',
    detailedExplanation: '바이바이(バイバイ)、안녕(アンニョン)、잘 가(じゃあね)。カジュアルな別れの言葉。配信終了時によく使います。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high'
  },
  {
    id: 322,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '健康でいてね',
    question: '「健康でいてください」は？',
    options: [
      '건강하세요',
      '건강 챙기세요',
      '몸 조심하세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて健康を気遣う表現です。',
    detailedExplanation: '건강하다(健康だ)、챙기다(気を付ける)、몸(体)、조심하다(気を付ける)。別れ際の気遣い表現。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'high'
  },
  {
    id: 323,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'おやすみ',
    question: '深夜配信で「おやすみなさい」は？',
    options: [
      '잘 자요',
      '안녕히 주무세요',
      '굿나잇',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「おやすみ」の意味です。',
    detailedExplanation: '잘 자다(よく寝る)、안녕히 주무시다(お休みになる・敬語)、굿나잇(グッドナイト)。深夜配信の終わりによく使います。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'high'
  },
  {
    id: 324,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'またね',
    question: '「また会いましょう」は？',
    options: [
      '또 만나요',
      '다음에 봐요',
      '다시 만나요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「また会いましょう」の意味です。',
    detailedExplanation: '또(また)、다음에(次に)、다시(再び)、만나다(会う)、보다(見る)。配信終了の定番表現。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high'
  },
  {
    id: 325,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '愛してる（終了時）',
    question: '配信終了で「愛してます」は？',
    options: [
      '사랑해요',
      '사랑합니다',
      '많이 사랑해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて愛情表現として使えます。',
    detailedExplanation: '사랑하다(愛する)。丁寧さ: 사랑해(カジュアル)< 사랑해요(丁寧)< 사랑합니다(最も丁寧)。많이(たくさん)を付けるとより強調。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    emotion: 'love'
  },
  {
    id: 326,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '次の配信予告',
    question: '「次はいつ配信しますか？」と聞かれて「分かりません」は？',
    options: [
      '모르겠어요',
      '아직 모르겠어요',
      '잘 모르겠어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「分かりません」の意味です。',
    detailedExplanation: '모르다(分からない)、겠(推量・謙遜)、아직(まだ)、잘(よく)。スケジュールが未定の時の定番返答。',
    context: 'V LIVE',
    usage: 'response'
  },
  {
    id: 327,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '忙しいけど',
    question: '「忙しいけど、また来ます」は？',
    options: [
      '바쁘지만 또 올게요',
      '바빠도 또 방송할게요',
      '바쁜데 또 올게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「忙しいけど」の逆接表現です。',
    detailedExplanation: '바쁘다(忙しい)、지만(〜けど)、아도/어도(〜でも)、은데/ㄴ데(〜けど)。オダ(来る)、방송하다(放送する)。',
    context: 'V LIVE',
    usage: 'promise'
  },
  {
    id: 328,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '待っててね',
    question: '「待っててください」は？',
    options: [
      '기다려 주세요',
      '기다려 줘요',
      '조금만 기다려요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「待ってください」の意味です。',
    detailedExplanation: '기다리다(待つ)、주세요(ください)、줘요(ちょうだい・やや親しみ)、조금만(ちょっとだけ)。カムバック前によく使う表現。',
    context: 'V LIVE',
    usage: 'request',
    frequency: 'high'
  },
  {
    id: 329,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '応援よろしく',
    question: '「これからも応援よろしくお願いします」は？',
    options: [
      '앞으로도 응원 부탁드려요',
      '계속 응원해 주세요',
      '앞으로도 잘 부탁합니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて今後の応援をお願いする表現です。',
    detailedExplanation: '앞으로(これから)、계속(ずっと)、응원(応援)、부탁하다(お願いする)、잘 부탁하다(よろしくお願いする)。配信終了時の定番。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'very_high'
  }
];
