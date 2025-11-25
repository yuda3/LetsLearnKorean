import { Question } from '../../../types';

export const fanLetterQuestions: Question[] = [
  // 書き出し (5問)
  {
    id: 600,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '手紙の書き出し',
    question: 'ファンレターで「こんにちは」は？',
    options: [
      '안녕하세요',
      '안녕하세요, [名前]님',
      '안녕하세요, 사랑하는 [名前]님',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて手紙の書き出しとして使えます。',
    detailedExplanation: '안녕하세요(こんにちは)、님(様)、사랑하는(愛する)。親密度に応じて選びます。',
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
    question: '「手紙を書きます」は？',
    options: [
      '편지를 써요',
      '편지 쓰고 있어요',
      '편지 드려요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて手紙を書くことを表します。',
    detailedExplanation: '편지(手紙)、쓰다(書く)、드리다(差し上げる・謙譲語)。手紙の冒頭でよく使います。',
    usage: 'greeting',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 602,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '初めて',
    question: '「初めて手紙を書きます」は？',
    options: [
      '처음으로 편지 써요',
      '처음 편지 드려요',
      '첫 편지예요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて初めての手紙であることを表します。',
    detailedExplanation: '처음(初めて)、첫(最初の)、으로(〜で・〜として)。初めてのファンレターで使う表現。',
    usage: 'greeting',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 603,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '勇気を出して',
    question: '「勇気を出して手紙を書きます」は？',
    options: [
      '용기를 내서 편지 써요',
      '용기 내어 편지 드려요',
      '용기를 내고 편지 쓰고 있어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて勇気を出すことを表します。',
    detailedExplanation: '용기(勇気)、내다(出す)、아서/어서(〜して)。恥ずかしがりながら書く時の表現。',
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
    question: '「これを伝えたくて手紙を書きます」は？',
    options: [
      '이 말을 전하고 싶어서 편지 써요',
      '이걸 전하려고 편지 드려요',
      '이 이야기를 하고 싶어서 편지해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて何かを伝えたい理由を表します。',
    detailedExplanation: '전하다(伝える)、고 싶다(〜したい)、려고(〜するために)。手紙の目的を示す表現。',
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
    question: '「応援しています」は？',
    options: [
      '응원하고 있어요',
      '응원해요',
      '응원할게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて応援を表す表現です。',
    detailedExplanation: '응원하다(応援する)、고 있다(〜している)、ㄹ게요(〜します・意志)。ファンレターの基本表現。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 606,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: 'ずっと応援',
    question: '「ずっと応援します」は？',
    options: [
      '계속 응원할게요',
      '쭉 응원해요',
      '영원히 응원합니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて継続的な応援を表します。',
    detailedExplanation: '계속(ずっと)、쭉(ずっと)、영원히(永遠に)。長期的な応援の約束を伝えます。',
    usage: 'cheering',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 607,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: 'ファンです',
    question: '「ファンです」は？',
    options: [
      '팬이에요',
      '팬입니다',
      '팬 중 한 명이에요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて自分がファンであることを表します。',
    detailedExplanation: '팬(ファン)、이다(〜だ)、중 한 명(のうちの一人)。自己紹介として使います。',
    usage: 'greeting',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 608,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '好きです',
    question: '「好きです」は？',
    options: [
      '좋아해요',
      '좋아합니다',
      '너무 좋아해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて好意を表す表現です。',
    detailedExplanation: '좋아하다(好きだ)、너무(とても)。丁寧さが異なりますが、すべてファンレターで使えます。',
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
    question: '「愛しています」は？',
    options: [
      '사랑해요',
      '사랑합니다',
      '많이 사랑해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて愛情を表す表現です。',
    detailedExplanation: '사랑하다(愛する)、많이(たくさん)。最も強い愛情表現。',
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
    question: '「誇りに思います」は？',
    options: [
      '자랑스러워요',
      '자랑스럽게 생각해요',
      '자부심을 느껴요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて誇りを表す表現です。',
    detailedExplanation: '자랑스럽다(誇らしい)、자부심(自負心)、느끼다(感じる)。アイドルの成功を喜ぶ表現。',
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
    question: '「憧れです」は？',
    options: [
      '동경해요',
      '존경해요',
      '롤모델이에요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて憧れや尊敬を表します。',
    detailedExplanation: '동경하다(憧れる)、존경하다(尊敬する)、롤모델(ロールモデル)。アイドルへの敬意を表す表現。',
    usage: 'cheering',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 612,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '勇気をもらう',
    question: '「勇気をもらっています」は？',
    options: [
      '용기를 받고 있어요',
      '용기를 얻어요',
      '용기를 주셔서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて勇気をもらうことを表します。',
    detailedExplanation: '용기(勇気)、받다(もらう)、얻다(得る)、주다(くれる)。アイドルの影響を伝える表現。',
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
    question: '「あなたは私の希望です」は？',
    options: [
      '제 희망이에요',
      '저에게 희망을 줘요',
      '저의 희망입니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて希望を表す表現です。',
    detailedExplanation: '희망(希望)、이다(〜だ)、주다(くれる)。深い愛情と感謝を込めた表現。',
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
    question: '「生きる理由をくれてありがとう」は？',
    options: [
      '살아갈 이유를 주셔서 감사해요',
      '살 이유를 만들어 줘서 고마워요',
      '삶의 이유를 주셔서 감사합니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて生きる意味を与えてくれたことへの感謝です。',
    detailedExplanation: '살다(生きる)、이유(理由)、주다(くれる)、삶(人生)。最も深い感謝と愛情の表現。',
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
    question: '「健康でいてください」は？',
    options: [
      '건강하세요',
      '건강 챙기세요',
      '몸 조심하세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて健康を願う表現です。',
    detailedExplanation: '건강(健康)、챙기다(気を付ける)、몸(体)、조심하다(気を付ける)。ファンレターの定番フレーズ。',
    usage: 'request',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 616,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '無理しないで',
    question: '「無理しないでください」は？',
    options: [
      '무리하지 마세요',
      '무리 마세요',
      '너무 무리하지 않았으면 좋겠어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて無理をしないよう願う表現です。',
    detailedExplanation: '무리하다(無理する)、지 마세요(〜しないでください)、으면 좋겠다(〜してほしい)。心配する気持ちを伝えます。',
    usage: 'request',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 617,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '幸せであってほしい',
    question: '「幸せでいてください」は？',
    options: [
      '행복하세요',
      '행복했으면 좋겠어요',
      '행복하시길 바래요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて幸せを願う表現です。',
    detailedExplanation: '행복하다(幸せだ)、으면 좋겠다(〜してほしい)、시길 바라다(〜することを願う)。',
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
    question: '「ゆっくり休んでください」は？',
    options: [
      '푹 쉬세요',
      '충분히 쉬세요',
      '잘 쉬셨으면 좋겠어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて休息を願う表現です。',
    detailedExplanation: '푹(ゆっくり)、충분히(十分に)、쉬다(休む)。忙しいアイドルを気遣う表現。',
    usage: 'request',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 619,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '自分を大切に',
    question: '「自分を大切にしてください」は？',
    options: [
      '자신을 아끼세요',
      '자기 자신을 사랑하세요',
      '스스로를 돌보세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて自分を大切にすることを願う表現です。',
    detailedExplanation: '자신(自身)、아끼다(大切にする)、사랑하다(愛する)、돌보다(世話する)。心からの気遣いを伝えます。',
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
    question: '「これからも応援します」は？',
    options: [
      '앞으로도 응원할게요',
      '계속 응원하겠습니다',
      '쭉 응원해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて今後の応援を約束する表現です。',
    detailedExplanation: '앞으로도(これからも)、계속(ずっと)、쭉(ずっと)、응援하다(応援する)。手紙の締めくくりの定番。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 621,
    category: 'fanLetter',
    difficulty: 'beginner',
    questionJa: '読んでくれて',
    question: '「読んでくれてありがとう」は？',
    options: [
      '읽어 주셔서 감사해요',
      '읽어 줘서 고마워요',
      '읽어 주셔서 감사합니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて読んでくれたことへの感謝です。',
    detailedExplanation: '읽다(読む)、주다(くれる)、아서/어서(〜して)。手紙の最後によく使います。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'fan_letter'
  },
  {
    id: 622,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: 'いつも感謝',
    question: '「いつも感謝しています」は？',
    options: [
      '항상 감사해요',
      '늘 감사합니다',
      '언제나 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて継続的な感謝を表します。',
    detailedExplanation: '항상/늘/언제나(いつも)、감사하다(感謝する)、고맙다(ありがたい)。締めの定番表現。',
    usage: 'closing',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 623,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: 'ずっと一緒に',
    question: '「ずっと一緒にいます」は？',
    options: [
      '계속 함께할게요',
      '쭉 곁에 있을게요',
      '영원히 함께 있겠어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて永続的な同伴を約束する表現です。',
    detailedExplanation: '계속(ずっと)、쭉(ずっと)、영원히(永遠に)、함께(一緒に)、곁(そば)。強い決意を伝えます。',
    usage: 'closing',
    frequency: 'very_high',
    context: 'fan_letter',
    emotion: 'love'
  },
  {
    id: 624,
    category: 'fanLetter',
    difficulty: 'intermediate',
    questionJa: '長い手紙',
    question: '「長い手紙ですみません」は？',
    options: [
      '긴 편지 죄송해요',
      '너무 길어서 미안해요',
      '긴 편지 읽어 주셔서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて長い手紙について言及する表現です。',
    detailedExplanation: '길다(長い)、편지(手紙)、죄송하다(申し訳ない)、미안하다(すまない)。謙遜や感謝を込めて使います。',
    usage: 'closing',
    frequency: 'medium',
    context: 'fan_letter'
  }
];
