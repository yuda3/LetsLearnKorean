import { Question } from '../../../types';

export const reactionsQuestions: Question[] = [
  // 驚き・感動 (7問)
  {
    id: 500,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '驚いた時',
    question: '「えっ！」「びっくり！」は韓国語で？',
    options: [
      '헐!',
      '대박!',
      '깜짝이야!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて驚きを表す表現です。',
    detailedExplanation: '헐(えっ)、대박(やばい・すごい)、깜짝이야(びっくり)。アイドルがよく使うリアクション。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 501,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'すごい',
    question: '「すごい！」は韓国語で？',
    options: [
      '대박!',
      '와!',
      '짱이다!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて感嘆を表す表現です。',
    detailedExplanation: '대박(すごい・やばい)、와(わあ)、짱(最高)。驚きや感動を表す頻出表現。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 502,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '感動した',
    question: '「感動しました」は？',
    options: [
      '감동했어요',
      '감동이에요',
      '눈물 나요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて感動を表す表現です。',
    detailedExplanation: '감동하다(感動する)、눈물(涙)、나다(出る)。ファンレターやプレゼントへの反応でよく使います。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'moved'
  },
  {
    id: 503,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '可愛い',
    question: '「可愛い！」は韓国語で？',
    options: [
      '귀여워!',
      '귀엽다!',
      '너무 귀여워요!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「可愛い」を表します。',
    detailedExplanation: '귀엽다(可愛い)。語尾で丁寧さが変わります：귀여워(カジュアル)、귀여워요(丁寧)。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 504,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'かっこいい',
    question: '「かっこいい！」は？',
    options: [
      '멋있어!',
      '멋지다!',
      '멋져요!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「かっこいい」を表します。',
    detailedExplanation: '멋있다/멋지다(かっこいい)。同じ意味の別表現。ファンがアイドルを褒める時の定番。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 505,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '泣きそう',
    question: '「泣きそうです」は？',
    options: [
      '울 것 같아요',
      '눈물 날 것 같아요',
      '울컥해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて涙が出そうな状態を表します。',
    detailedExplanation: '울다(泣く)、눈물(涙)、울컥하다(込み上げる)、ㄹ 것 같다(〜しそう)。感動した時の表現。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 506,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '心が温かい',
    question: '「心が温かくなります」は？',
    options: [
      '마음이 따뜻해져요',
      '마음이 훈훈해요',
      '가슴이 따뜻해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて心温まる気持ちを表します。',
    detailedExplanation: '마음(心)、가슴(胸)、따뜻하다(温かい)、훈훈하다(ほのぼのする)。ファンの愛情に対する反応。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },

  // 喜び・興奮 (7問)
  {
    id: 507,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '嬉しい',
    question: '「嬉しいです」は？',
    options: [
      '기뻐요',
      '좋아요',
      '행복해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて喜びを表す表現です。',
    detailedExplanation: '기쁘다(嬉しい)、좋다(良い・好き)、행복하다(幸せだ)。ニュアンスが少し違いますが、すべて使えます。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 508,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '幸せ',
    question: '「幸せです」は？',
    options: [
      '행복해요',
      '행복합니다',
      '너무 행복해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて幸せを表します。',
    detailedExplanation: '행복하다(幸せだ)。ファンとの交流で最も頻繁に使う感情表現の一つ。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 509,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '楽しい',
    question: '「楽しいです」は？',
    options: [
      '즐거워요',
      '재밌어요',
      '신나요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて楽しさを表します。',
    detailedExplanation: '즐겁다(楽しい)、재밌다(面白い・楽しい)、신나다(ワクワクする)。配信やイベントでよく使います。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 510,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '最高',
    question: '「最高です！」は？',
    options: [
      '최고예요!',
      '최고다!',
      '완전 최고!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「最高」を表します。',
    detailedExplanation: '최고(最高)、완전(完全に・超)。興奮や喜びを表す定番表現。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 511,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '夢みたい',
    question: '「夢みたいです」は？',
    options: [
      '꿈만 같아요',
      '꿈 같아요',
      '믿을 수 없어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて夢のような気持ちを表します。',
    detailedExplanation: '꿈(夢)、같다(〜のようだ)、믿다(信じる)。受賞や大きな成功時に使う表現。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'surprise'
  },
  {
    id: 512,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '信じられない',
    question: '「信じられません」は？',
    options: [
      '믿을 수 없어요',
      '믿기지 않아요',
      '진짜예요?',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて信じられない気持ちを表します。',
    detailedExplanation: '믿다(信じる)、ㄹ 수 없다(できない)、기지다(〜される)、진짜(本当)。良いニュースへの反応。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'surprise'
  },
  {
    id: 513,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '鳥肌が立つ',
    question: '「鳥肌が立ちました」は？',
    options: [
      '소름 돋았어요',
      '소름이 끼쳤어요',
      '온몸에 전율이 왔어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて鳥肌が立つ感覚を表します。',
    detailedExplanation: '소름(鳥肌)、돋다(立つ)、끼치다(覆う)、전율(戦慄)。感動やすごいパフォーマンスへの反応。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'surprise'
  },

  // その他のリアクション (6問)
  {
    id: 514,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '本当に？',
    question: '「本当ですか？」は？',
    options: [
      '정말이에요?',
      '진짜예요?',
      '정말요?',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「本当？」と確認する表現です。',
    detailedExplanation: '정말(本当に)、진짜(マジで・本当に)。驚きや疑問を表す基本表現。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 515,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'やばい',
    question: '「やばい！」は韓国語で？',
    options: [
      '대박!',
      '헐!',
      '미쳤다!',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「やばい」のニュアンスを持ちます。',
    detailedExplanation: '대박(やばい・すごい)、헐(えっ)、미치다(狂う→すごい)。若者言葉として頻出。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 516,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '笑った',
    question: '「笑いました」は？',
    options: [
      '웃었어요',
      '웃겨요',
      '재밌어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて笑いを表す表現です。',
    detailedExplanation: '웃다(笑う)、웃기다(笑わせる・面白い)、재밌다(面白い)。面白いコメントへの反応。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'happy'
  },
  {
    id: 517,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '胸がいっぱい',
    question: '「胸がいっぱいです」は？',
    options: [
      '벅차올라요',
      '가슴이 벅차요',
      '마음이 가득해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて胸がいっぱいの感情を表します。',
    detailedExplanation: '벅차다(胸がいっぱいだ)、벅차오르다(込み上げる)、가득하다(いっぱいだ)。感動的な場面で使います。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 518,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '心に響く',
    question: '「心に響きました」は？',
    options: [
      '마음에 와 닿았어요',
      '가슴에 와 닿았어요',
      '마음에 울림이 있어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて心に響くことを表します。',
    detailedExplanation: '와 닿다(響く・届く)、울림(響き)。ファンの言葉やプレゼントへの反応。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 519,
    category: 'reactions',
    difficulty: 'advanced',
    questionJa: '言葉を失う',
    question: '「言葉を失いました」は？',
    options: [
      '할 말을 잃었어요',
      '말문이 막혔어요',
      '말이 안 나와요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて言葉が出ない状態を表します。',
    detailedExplanation: '할 말을 잃다(言うべき言葉を失う)、말문이 막히다(言葉が詰まる)、말이 안 나오다(言葉が出ない)。深い感動の表現。',
    usage: 'reaction',
    frequency: 'medium',
    emotion: 'moved'
  }
];
