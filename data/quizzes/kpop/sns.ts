import { Question } from '../../../types';

export const snsQuestions: Question[] = [
  // 投稿・更新 (5問)
  {
    id: 700,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'SNS投稿の挨拶',
    question: 'SNSで「みんな〜」と呼びかける時は？',
    options: [
      '여러분~',
      '다들~',
      '얘들아~',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてファンへの呼びかけとして使えます。',
    detailedExplanation: '여러분(皆さん・丁寧)、다들(みんな・カジュアル)、얘들아(お前ら・親しみ)。親密度で使い分けます。',
    usage: 'greeting',
    frequency: 'extremely_high',
    context: 'SNS',
    formality: 'casual'
  },
  {
    id: 701,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '今何してる',
    question: 'SNSで「今何してる？」は？',
    options: [
      '지금 뭐 해?',
      '뭐 해?',
      '지금 뭐 하고 있어?',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて現在の状況を聞く表現です。',
    detailedExplanation: '지금(今)、뭐(何)、하다(する)、고 있다(〜している)。ファンとの気軽な会話で使います。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 702,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '写真アップ',
    question: '「写真アップします」は？',
    options: [
      '사진 올려요',
      '사진 올릴게요',
      '사진 업로드해요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて写真を投稿することを表します。',
    detailedExplanation: '사진(写真)、올리다(上げる・アップする)、업로드(アップロード)。SNSの基本表現。',
    usage: 'announcement',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 703,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '久しぶりの投稿',
    question: '「久しぶりの投稿」は？',
    options: [
      '오랜만의 게시물',
      '오랜만에 올려요',
      '오랜만이에요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて久しぶりを表す表現です。',
    detailedExplanation: '오랜만(久しぶり)、게시물(投稿)、올리다(上げる)。しばらく投稿がなかった時に使います。',
    usage: 'greeting',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 704,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'セルカ',
    question: '「セルカ撮りました」は？',
    options: [
      '셀카 찍었어요',
      '셀카 올려요',
      '셀카 한 장',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてセルフィーに関する表現です。',
    detailedExplanation: '셀카(セルフィー・セルカ)、찍다(撮る)、올리다(上げる)、한 장(一枚)。SNSで最もよく使う表現。',
    usage: 'announcement',
    frequency: 'extremely_high',
    context: 'SNS'
  },

  // コメント・リアクション (5問)
  {
    id: 705,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'コメント読んでる',
    question: '「コメント読んでます」は？',
    options: [
      '댓글 읽고 있어요',
      '댓글 보고 있어요',
      '댓글 다 봐요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてコメントを見ていることを表します。',
    detailedExplanation: '댓글(コメント)、읽다(読む)、보다(見る)、다(全部)。ファンとの交流を示す表現。',
    usage: 'interaction',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 706,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'いいね',
    question: '「いいねありがとう」は？',
    options: [
      '좋아요 감사해요',
      '하트 고마워요',
      '좋아요 눌러 줘서 고마워요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて「いいね」への感謝です。',
    detailedExplanation: '좋아요(いいね)、하트(ハート)、눌러 주다(押してくれる)。SNSでの感謝表現。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 707,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '面白いコメント',
    question: '「コメント面白いです」は？',
    options: [
      '댓글 재밌어요',
      '댓글 웃겨요',
      '댓글이 다 웃겨요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべてコメントが面白いことを表します。',
    detailedExplanation: '댓글(コメント)、재밌다(面白い)、웃기다(笑える)、다(全部)。ファンのコメントへの反応。',
    usage: 'reaction',
    frequency: 'high',
    context: 'SNS',
    emotion: 'happy'
  },
  {
    id: 708,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'リプライ',
    question: '「返信します」は？',
    options: [
      '답장할게요',
      '답글 달게요',
      '댓글 달아요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて返信することを表します。',
    detailedExplanation: '답장(返信)、답글(返信コメント)、댓글(コメント)、달다(付ける)。コメントへの返事の表現。',
    usage: 'interaction',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 709,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'たくさん見てね',
    question: '「たくさん見てください」は？',
    options: [
      '많이 봐주세요',
      '많이 봐줘요',
      '많관부(많은 관심 부탁)',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて視聴をお願いする表現です。',
    detailedExplanation: '많이(たくさん)、보다(見る)、많관부(たくさんの関心をお願い・略語)。SNSでよく使う略語も含みます。',
    usage: 'request',
    frequency: 'extremely_high',
    context: 'SNS'
  },

  // 日常・近況報告 (5問)
  {
    id: 710,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '練習中',
    question: '「練習中です」は？',
    options: [
      '연습 중이에요',
      '연습하고 있어요',
      '연습 중',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて練習していることを表します。',
    detailedExplanation: '연습(練習)、중(〜中)、하고 있다(〜している)。活動中の近況報告でよく使います。',
    usage: 'update',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 711,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: 'お腹すいた',
    question: 'SNSで「お腹すいた」は？',
    options: [
      '배고파',
      '배고프다',
      '배고파요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて空腹を表す表現です。',
    detailedExplanation: '배고프다(お腹が空く)。語尾で丁寧さが変わります：배고파(カジュアル)、배고파요(丁寧)、배고프다(独り言風)。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 712,
    category: 'sns',
    difficulty: 'beginner',
    questionJa: '眠い',
    question: 'SNSで「眠い」は？',
    options: [
      '졸려',
      '졸리다',
      '졸려요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて眠気を表す表現です。',
    detailedExplanation: '졸리다(眠い)。深夜のSNS投稿でよく見る表現。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'SNS'
  },
  {
    id: 713,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: 'おやすみ投稿',
    question: 'SNSで「おやすみ」は？',
    options: [
      '잘자요',
      '굿나잇',
      '자야지',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて就寝前の挨拶です。',
    detailedExplanation: '잘 자다(よく寝る)、굿나잇(グッドナイト)、자야지(寝なきゃ)。深夜のSNS投稿の締めくくり。',
    usage: 'closing',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 714,
    category: 'sns',
    difficulty: 'intermediate',
    questionJa: '今日も頑張る',
    question: '「今日も頑張ります」は？',
    options: [
      '오늘도 화이팅',
      '오늘도 힘내요',
      '오늘도 열심히 할게요',
      'すべて使える'
    ],
    correctAnswer: 3,
    explanation: 'すべて今日の意気込みを表します。',
    detailedExplanation: '오늘도(今日も)、화이팅(ファイト)、힘내다(頑張る)、열심히(一生懸命)。朝の投稿でよく使います。',
    usage: 'cheering',
    frequency: 'very_high',
    context: 'SNS'
  }
];
