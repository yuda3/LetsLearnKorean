import { Question } from '../../../types';

export const kpopGratitudeQuestions: Question[] = [
  // 基本的な感謝表現 (10問)
  {
    id: 400,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '基本の感謝',
    question: 'ファンに「ありがとうございます」は？',
    options: [
      '감사합니다',
      '고맙습니다',
      '고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて感謝を表す表現です。',
    detailedExplanation: '감사합니다(最も丁寧)、고맙습니다(丁寧)、고마워요(やや親しみ)。シーンに応じて使い分けます。',
    context: 'V LIVE',
    usage: 'gratitude',
    frequency: 'extremely_high',
    formality: 'polite'
  },
  {
    id: 401,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '本当にありがとう',
    question: '「本当にありがとうございます」は？',
    options: [
      '정말 감사합니다',
      '진짜 고마워요',
      '너무 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて強い感謝を表します。',
    detailedExplanation: '정말(本当に)、진짜(マジで)、너무(とても)。感謝を強調する副詞として使います。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 402,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: 'たくさんありがとう',
    question: '「たくさんありがとうございます」は？',
    options: [
      '많이 감사합니다',
      '너무 고마워요',
      '정말 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて深い感謝を表現できます。',
    detailedExplanation: '많이(たくさん)、너무(とても)、정말(本当に)。量や程度を強調して感謝を伝えます。',
    usage: 'gratitude',
    frequency: 'very_high'
  },
  {
    id: 403,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: 'いつもありがとう',
    question: '「いつもありがとうございます」は？',
    options: [
      '항상 감사합니다',
      '늘 고마워요',
      '언제나 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて継続的な感謝を表します。',
    detailedExplanation: '항상(いつも)、늘(いつも)、언제나(いつも)。継続的な応援への感謝を伝える定番表現。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'V LIVE'
  },
  {
    id: 404,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '感謝の気持ち',
    question: '「感謝の気持ちでいっぱいです」は？',
    options: [
      '감사한 마음 가득해요',
      '감사한 마음뿐이에요',
      '감사함으로 가득 차 있어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて感謝の気持ちが溢れている表現です。',
    detailedExplanation: '마음(心・気持ち)、가득(いっぱい)、뿐(〜だけ)。授賞式などで使う表現。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 405,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: 'おかげで',
    question: '「皆さんのおかげです」は？',
    options: [
      '여러분 덕분이에요',
      '팬 분들 덕분입니다',
      '여러분 덕분에 가능했어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「おかげで」を表現しています。',
    detailedExplanation: '덕분(おかげ)、여러분(皆さん)、팬 분들(ファンの方々)。受賞や成功時の定番表現。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert'
  },
  {
    id: 406,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '愛してます',
    question: '「ファンの皆さん、愛してます」は？',
    options: [
      '팬 여러분, 사랑해요',
      '팬 분들, 사랑합니다',
      '여러분 사랑해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて愛情表現として使えます。',
    detailedExplanation: '팬 여러분(ファンの皆さん)、팬 분들(ファンの方々)、사랑하다(愛する)。感謝と愛情を同時に伝える表現。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'love'
  },
  {
    id: 407,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '言葉で表せない',
    question: '「言葉で表せないほど感謝しています」は？',
    options: [
      '말로 표현할 수 없을 만큼 감사해요',
      '말로 다 할 수 없을 정도로 고마워요',
      '말로 못할 만큼 감사합니다',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて言葉にできない感謝を表します。',
    detailedExplanation: '말로 표현하다(言葉で表現する)、다 하다(すべて言う)、ㄹ 수 없다(できない)、만큼(〜ほど)。深い感謝を伝える表現。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 408,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '心から',
    question: '「心から感謝します」は？',
    options: [
      '진심으로 감사합니다',
      '마음에서 우러나오는 감사를 드립니다',
      '진심 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて心からの感謝を表します。',
    detailedExplanation: '진심으로(真心で)、마음에서 우러나오다(心から湧き出る)、진심(真心)。誠実な感謝を伝えます。',
    usage: 'gratitude',
    frequency: 'very_high',
    formality: 'polite'
  },
  {
    id: 409,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '恩返し',
    question: '「恩返しします」は？',
    options: [
      '보답할게요',
      '보답하겠습니다',
      '은혜를 갚겠어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて恩返しを表す表現です。',
    detailedExplanation: '보답하다(報いる)、은혜를 갚다(恩を返す)。ファンへの感謝とともに決意を表します。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'concert'
  },

  // 応援への感謝 (8問)
  {
    id: 410,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '応援ありがとう',
    question: '「応援ありがとうございます」は？',
    options: [
      '응원해 주셔서 감사합니다',
      '응원 감사합니다',
      '응원해 줘서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて応援への感謝を表します。',
    detailedExplanation: '응원하다(応援する)、주다(くれる)、아서/어서(〜して)。最も頻繁に使う感謝表現の一つ。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'V LIVE'
  },
  {
    id: 411,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '力をもらう',
    question: '「皆さんから力をもらっています」は？',
    options: [
      '여러분께 힘을 받고 있어요',
      '여러분 덕분에 힘이 나요',
      '여러분이 저에게 힘이 돼요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンから力をもらうことを表します。',
    detailedExplanation: '힘(力)、받다(もらう)、나다(出る)、되다(なる)。ファンへの感謝を込めた表現。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'happy'
  },
  {
    id: 412,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '頑張れる理由',
    question: '「皆さんがいるから頑張れます」は？',
    options: [
      '여러분이 있어서 힘이 나요',
      '여러분 덕분에 힘낼 수 있어요',
      '여러분이 계셔서 열심히 할 수 있어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンの存在が力になることを表します。',
    detailedExplanation: '있다(いる)、계시다(いらっしゃる・敬語)、힘내다(頑張る)、열심히 하다(一生懸命する)。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 413,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: 'エネルギー',
    question: '「皆さんがエネルギーです」は？',
    options: [
      '여러분이 제 에너지예요',
      '여러분이 저의 힘이에요',
      '여러분 덕분에 에너지가 생겨요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンがエネルギー源であることを表します。',
    detailedExplanation: '에너지(エネルギー)、힘(力)、생기다(生まれる)。ファンへの愛情と感謝を込めた表現。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'happy'
  },
  {
    id: 414,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '幸せ',
    question: '「皆さんのおかげで幸せです」は？',
    options: [
      '여러분 덕분에 행복해요',
      '여러분 때문에 행복합니다',
      '여러분이 있어서 행복해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて幸せを伝える表現です。',
    detailedExplanation: '덕분에(おかげで)、때문에(〜のせいで・おかげで)、있다(いる)、행복하다(幸せだ)。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'happy'
  },
  {
    id: 415,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '一緒に',
    question: '「一緒にいてくれてありがとう」は？',
    options: [
      '함께 해줘서 고마워요',
      '같이 있어 줘서 감사해요',
      '곁에 있어 줘서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて一緒にいることへの感謝です。',
    detailedExplanation: '함께(一緒に)、같이(一緒に)、곁(そば)、있다(いる)。ファンとの絆を表現します。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'love'
  },
  {
    id: 416,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '支え',
    question: '「皆さんが私の支えです」は？',
    options: [
      '여러분이 제 버팀목이에요',
      '여러분이 저를 지탱해 주세요',
      '여러분 덕분에 버틸 수 있어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンが支えであることを表します。',
    detailedExplanation: '버팀목(支え)、지탱하다(支える)、버티다(耐える・頑張る)。深い感謝を伝える表現。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 417,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '存在',
    question: '「皆さんの存在が私の全てです」は？',
    options: [
      '여러분의 존재가 제 전부예요',
      '여러분이 제게 전부입니다',
      '여러분이 있어서 제가 있어요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンの重要性を表します。',
    detailedExplanation: '존재(存在)、전부(全部)、있다(いる・ある)。最大級の感謝と愛情表現。',
    usage: 'gratitude',
    frequency: 'medium',
    emotion: 'moved'
  },

  // 特定の行動への感謝 (7問)
  {
    id: 418,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '来てくれて',
    question: 'コンサートで「来てくれてありがとう」は？',
    options: [
      '와주셔서 감사합니다',
      '와줘서 고마워요',
      '오셔서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて来場への感謝を表します。',
    detailedExplanation: '오다(来る)、주다(くれる)、아서/어서(〜して)。コンサート開始・終了時の定番。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert'
  },
  {
    id: 419,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '聴いてくれて',
    question: '「聴いてくれてありがとう」は？',
    options: [
      '들어 주셔서 감사합니다',
      '들어 줘서 고마워요',
      '들어 주셔서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて音楽を聴くことへの感謝です。',
    detailedExplanation: '듣다(聴く)、주다(くれる)。新曲リリース時や音楽番組で使う表現。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE'
  },
  {
    id: 420,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '待ってくれて',
    question: '「待ってくれてありがとう」は？',
    options: [
      '기다려 주셔서 감사합니다',
      '기다려 줘서 고마워요',
      '기다려 주셔서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて待つことへの感謝です。',
    detailedExplanation: '기다리다(待つ)、주다(くれる)。カムバックやイベント時の定番表現。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE'
  },
  {
    id: 421,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: 'プレゼント',
    question: '「プレゼントありがとうございます」は？',
    options: [
      '선물 감사합니다',
      '선물 고마워요',
      '선물 주셔서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてプレゼントへの感謝です。',
    detailedExplanation: '선물(プレゼント)、주다(くれる)。ファンミーティングやイベントでよく使います。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 422,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '手紙',
    question: '「手紙ありがとうございます」は？',
    options: [
      '편지 감사합니다',
      '편지 고마워요',
      '편지 써줘서 감사해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて手紙への感謝を表します。',
    detailedExplanation: '편지(手紙)、쓰다(書く)、주다(くれる)。ファンレターへの返事でよく使います。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'fan_letter'
  },
  {
    id: 423,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '投票',
    question: '「投票してくれてありがとう」は？',
    options: [
      '투표해 주셔서 감사합니다',
      '투표 감사해요',
      '투표해 줘서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて投票への感謝です。',
    detailedExplanation: '투표하다(投票する)、주다(くれる)。音楽番組やアワードの投票時に使います。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 424,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: 'ストリーミング',
    question: '「たくさん聴いてくれてありがとう」は？',
    options: [
      '많이 들어 주셔서 감사합니다',
      '스트리밍 감사해요',
      '많이 들어 줘서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてストリーミングへの感謝です。',
    detailedExplanation: '많이(たくさん)、듣다(聴く)、스트리밍(ストリーミング)。音源成績への感謝表現。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'SNS'
  }
];
