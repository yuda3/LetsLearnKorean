import { Question } from '../../../types';

export const concertQuestions: Question[] = [
  // 開演・挨拶 (5問)
  {
    id: 800,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: 'コンサート開始の挨拶',
    question: 'コンサート開始で「こんにちは」は？',
    options: [
      '안녕하세요',
      '여러분 안녕하세요',
      '다들 안녕',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてコンサート開始の挨拶として使えます。',
    detailedExplanation: '안녕하세요(こんにちは)、여러분(皆さん)、다들(みんな)。会場の雰囲気で使い分けます。',
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
    question: 'コンサートで「会いたかったです」は？',
    options: [
      '보고 싶었어요',
      '너무 보고 싶었어요',
      '정말 보고 싶었습니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて会いたかった気持ちを表します。',
    detailedExplanation: '보고 싶다(会いたい)、너무(とても)、정말(本当に)。ツアーや久しぶりのコンサートで使う定番フレーズ。',
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
    question: '「来てくれてありがとうございます」は？',
    options: [
      '와주셔서 감사합니다',
      '와줘서 고마워요',
      '찾아와 주셔서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて来場への感謝を表します。',
    detailedExplanation: '오다(来る)、주다(くれる)、찾아오다(訪ねてくる)、아서/어서(〜して)。コンサート開始時の定番。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert'
  },
  {
    id: 803,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '待たせてごめん',
    question: '「待たせてすみません」は？',
    options: [
      '기다리게 해서 미안해요',
      '오래 기다리셨죠',
      '기다려 주셔서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて待たせたことに言及する表現です。',
    detailedExplanation: '기다리다(待つ)、게 하다(〜させる)、미안하다(すまない)、오래(長く)。開演遅延や久々のコンサート時に使います。',
    usage: 'apology',
    frequency: 'high',
    context: 'concert'
  },
  {
    id: 804,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '夢みたい',
    question: '「夢のようです」は？',
    options: [
      '꿈만 같아요',
      '꿈 같아요',
      '믿을 수 없어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて夢のような気持ちを表します。',
    detailedExplanation: '꿈(夢)、같다(〜のようだ)、믿다(信じる)。大きな会場でのコンサート時によく使う表現。',
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
    question: '「ファイト！」は韓国語で？',
    options: [
      '화이팅!',
      '파이팅!',
      '힘내!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて応援の掛け声として使えます。',
    detailedExplanation: '화이팅/파이팅(ファイト)、힘내다(頑張る)。コンサートで最もよく聞く掛け声。',
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
    question: 'コンサートで「かっこいい！」は？',
    options: [
      '멋있어!',
      '멋지다!',
      '최고!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて賞賛の声として使えます。',
    detailedExplanation: '멋있다/멋지다(かっこいい)、최고(最高)。パフォーマンス中のファンの声援。',
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
    question: 'コンサートで「愛してる！」は？',
    options: [
      '사랑해!',
      '사랑해요!',
      '사랑합니다!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて愛情表現として使えます。',
    detailedExplanation: '사랑하다(愛する)。丁寧さが異なりますが、コンサートではすべて使われます。',
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
    question: '「声援よろしくお願いします」は？',
    options: [
      '응원 부탁드려요',
      '함성 부탁해요',
      '큰 소리로 불러 주세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて声援をお願いする表現です。',
    detailedExplanation: '응원(応援)、함성(歓声)、큰 소리(大きな声)、부탁하다(お願いする)。盛り上げる時に使います。',
    usage: 'request',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 809,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: '一緒に歌おう',
    question: '「一緒に歌いましょう」は？',
    options: [
      '같이 불러요',
      '함께 불러 주세요',
      '따라 불러 주세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて一緒に歌うことを促す表現です。',
    detailedExplanation: '같이/함께(一緒に)、따라(付いて)、부르다(歌う)、주다(くれる)。合唱パートでよく使います。',
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
    question: '「楽しかったです」は？',
    options: [
      '즐거웠어요',
      '재밌었어요',
      '행복했어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてコンサートが楽しかったことを表します。',
    detailedExplanation: '즐겁다(楽しい)、재밌다(面白い・楽しい)、행복하다(幸せだ)。コンサート終了時の感想。',
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
    question: '「また会いましょう」は？',
    options: [
      '또 만나요',
      '다시 만나요',
      '또 봐요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて再会を約束する表現です。',
    detailedExplanation: '또(また)、다시(再び)、만나다(会う)、보다(見る)。コンサート終了時の定番フレーズ。',
    usage: 'closing',
    frequency: 'extremely_high',
    context: 'concert'
  },
  {
    id: 812,
    category: 'concert',
    difficulty: 'beginner',
    questionJa: '気をつけて帰って',
    question: '「気をつけて帰ってください」は？',
    options: [
      '조심히 가세요',
      '안전하게 돌아가세요',
      '잘 들어가세요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて帰路の安全を気遣う表現です。',
    detailedExplanation: '조심히(気をつけて)、안전하게(安全に)、잘(うまく・ちゃんと)、가다(行く)、돌아가다(帰る)、들어가다(入る・帰る)。',
    usage: 'closing',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 813,
    category: 'concert',
    difficulty: 'intermediate',
    questionJa: 'おかげで',
    question: '「皆さんのおかげで最高のコンサートでした」は？',
    options: [
      '여러분 덕분에 최고의 콘서트였어요',
      '여러분 덕분에 최고였어요',
      '여러분이 있어서 최고였습니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンへの感謝を表します。',
    detailedExplanation: '덕분(おかげ)、최고(最高)、콘서트(コンサート)、있다(いる)。終了時の定番感謝表現。',
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
    question: '「今日のこと忘れません」は？',
    options: [
      '오늘 잊지 않을게요',
      '오늘 기억할게요',
      '평생 기억할 거예요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて記憶に残すことを約束する表現です。',
    detailedExplanation: '잊다(忘れる)、기억하다(記憶する)、평생(一生)、ㄹ게요(〜します)、ㄹ 거예요(〜するつもり)。感動的な終了時に使います。',
    usage: 'closing',
    frequency: 'high',
    context: 'concert',
    emotion: 'moved'
  }
];
