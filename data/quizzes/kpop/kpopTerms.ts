import { Question } from '../../../types';

export const kpopTermsQuestions: Question[] = [
  {
    id: 1000,
    category: 'kpopTerms',
    difficulty: 'beginner',
    questionJa: 'カムバック',
    question: '「컴백(カムバック)」の意味は？',
    options: [
      '新曲を出して活動再開すること',
      '戻ってくること',
      '再結成',
      'アンコール'
    ],
    correctAnswer: 0,
    explanation: '「컴백」は新曲をリリースして活動を再開することです。',
    detailedExplanation: 'K-POPでは新曲リリース＋プロモーション活動のことを「컴백」と呼びます。「컴백 준비 중(カムバック準備中)」「컴백 무대(カムバックステージ)」などと使います。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 1001,
    category: 'kpopTerms',
    difficulty: 'beginner',
    questionJa: 'デビュー',
    question: '「데뷔(デビュー)」の韓国語は？',
    options: [
      '데뷔',
      '처음',
      '시작',
      '입문'
    ],
    correctAnswer: 0,
    explanation: '「데뷔(debut)」がそのまま使われます。',
    detailedExplanation: 'アイドルグループやソロアーティストが初めて活動を始めることを「데뷔하다(デビューする)」と言います。「데뷔 무대(デビューステージ)」「데뷔곡(デビュー曲)」などと使います。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 1002,
    category: 'kpopTerms',
    difficulty: 'beginner',
    questionJa: 'ファンミーティング',
    question: '「팬미팅(ファンミーティング)」とは？',
    options: [
      'ファンとの交流イベント',
      'ファンクラブ会議',
      'SNS配信',
      'サイン会'
    ],
    correctAnswer: 0,
    explanation: '「팬미팅」はアイドルとファンの交流イベントです。',
    detailedExplanation: 'コンサートより小規模で、トーク、ゲーム、パフォーマンスなどでファンと交流します。「팬미팅 티켓팅(ファンミチケッティング)」は激戦。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 1003,
    category: 'kpopTerms',
    difficulty: 'intermediate',
    questionJa: '音楽番組',
    question: '「음방(ウムバン)」の意味は？',
    options: [
      '音楽番組',
      '音楽部屋',
      '音楽放送',
      'すべて正しい'
    ],
    correctAnswer: 3,
    explanation: '「음방」は「음악방송(音楽放送)」の略です。',
    detailedExplanation: 'Music Bank、Music Core、Inkigayoなどの音楽番組を指します。「음방 1위(音楽番組1位)」は大きな目標。「음방 출근길(音楽番組出勤路)」も話題になります。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 1004,
    category: 'kpopTerms',
    difficulty: 'intermediate',
    questionJa: 'サイン会',
    question: '「팬사인회(ファンサインフェ)」とは？',
    options: [
      'サイン会',
      'ファンレター会',
      'ファン感謝祭',
      'ハイタッチ会'
    ],
    correctAnswer: 0,
    explanation: '「팬사인회」はファンサイン会です。',
    detailedExplanation: 'アルバムを一定枚数購入した人が抽選で参加できるイベント。アイドルと1対1で話せる貴重な機会。「팬싸(ファンサ)」と略されることも。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 1005,
    category: 'kpopTerms',
    difficulty: 'intermediate',
    questionJa: 'トロフィー',
    question: '「트로피(トロピー)」とは？',
    options: [
      '音楽番組の1位トロフィー',
      '優勝カップ',
      '記念品',
      'すべて正しい'
    ],
    correctAnswer: 3,
    explanation: '「트로피」はトロフィー全般を指します。',
    detailedExplanation: 'K-POPでは特に音楽番組で1位を獲得した時にもらえるトロフィーを指すことが多いです。「트로피 들기(トロフィーを持つ=1位獲得)」は大きな目標。',
    usage: 'conversation',
    frequency: 'high',
    context: 'concert'
  },
  {
    id: 1006,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'ペンライト',
    question: '「응원봉(ウンウォンボン)」の意味は？',
    options: [
      '公式ペンライト',
      '応援旗',
      '応援歌',
      '応援団'
    ],
    correctAnswer: 0,
    explanation: '「응원봉」は公式ペンライト(応援棒)です。',
    detailedExplanation: 'グループごとにデザインが異なる公式ペンライト。「봉(棒)」から来ています。Bluetooth連動でコンサート中に色が変わるものも。別名「덕봉(オタク棒)」。',
    usage: 'conversation',
    frequency: 'high',
    context: 'concert'
  },
  {
    id: 1007,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'ファンサービス',
    question: '「팬서비스(ファンサービス)」を略すと？',
    options: [
      '팬서 / 팬싸',
      '팬사',
      '서비',
      '팬스'
    ],
    correctAnswer: 0,
    explanation: '「팬서」または「팬싸」と略します。',
    detailedExplanation: 'ファンに向けた特別なサービスやリアクション。カメラに手を振る、ハートを送る、ウインクするなど。「팬서 좋다(ファンサが良い)」はファン想いの意味。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 1008,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'アルバム販売',
    question: '「초동(チョドン)」の意味は？',
    options: [
      '初週販売枚数',
      '初回限定',
      '初日',
      '超動'
    ],
    correctAnswer: 0,
    explanation: '「초동」は「초기 동원(初期動員)」の略で初週販売枚数です。',
    detailedExplanation: 'アルバム発売後最初の1週間の販売枚数。「초동 100만장(初動100万枚)」は大記録。人気の指標として重要視されます。',
    usage: 'conversation',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 1009,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: '音源チャート',
    question: '「음원(ウモン)」の意味は？',
    options: [
      '音楽配信・ストリーミング',
      '音源',
      '音質',
      'すべて正しい'
    ],
    correctAnswer: 0,
    explanation: '「음원」はK-POPでは主にストリーミング配信を指します。',
    detailedExplanation: '本来は「音源」ですが、K-POPでは音楽配信サービスでの成績を意味することが多いです。「음원 강자(音源強者)」は配信で強いアーティスト。「음원 차트(音源チャート)」が重要指標。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  }
];
