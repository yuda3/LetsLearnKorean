import { Question } from '../../../types';

export const kpopTermsQuestions: Question[] = [
  {
    id: 1000,
    category: 'kpopTerms',
    difficulty: 'beginner',
    questionJa: 'カムバック',
    question: 'K-POPで「컴백(カムバック)」が意味するものは？',
    options: [
      '引退からの復帰',             // 日本の芸能界のイメージ
      '新曲発表と活動開始',         // ← 正解
      '解散コンサート',             // 逆の意味
      '海外ツアーからの帰国'        // 空港用語
    ],
    correctAnswer: 1,
    explanation: '「컴백」は新曲リリースとプロモーション活動の開始を指します。',
    detailedExplanation: '単に活動に戻るだけでなく、新しいアルバムや曲を出してテレビ出演などを始める一連の期間を指します。「컴백 무대(カムバックステージ)」が活動の始まりです。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 1001,
    category: 'kpopTerms',
    difficulty: 'beginner',
    questionJa: '末っ子メンバー',
    question: 'グループの最年少メンバーを指す用語は？',
    options: [
      '리더(リーダー)',
      '센터(センター)',
      '막내(マンネ)',               // ← 正解
      '선배(先輩)'
    ],
    correctAnswer: 2,
    explanation: '「막내(マンネ)」は最年少メンバーのことです。',
    detailedExplanation: 'K-POPグループでは年齢による上下関係と役割が重要です。最年少は可愛がられる存在で「황금막내(黄金マンネ)」などの愛称もよく使われます。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 1002,
    category: 'kpopTerms',
    difficulty: 'beginner',
    questionJa: 'ファンミーティング',
    question: '「팬미팅(ファンミーティング)」の主な内容は？',
    options: [
      '新曲のレコーディング見学',
      'トークやゲーム中心の交流',    // ← 正解
      '激しいダンスのみの公演',      // これはコンサート
      'ファン同士の討論会'           // 会議
    ],
    correctAnswer: 1,
    explanation: '「팬미팅」はコンサートよりもトークやゲームなど、ファンとの交流がメインのイベントです。',
    detailedExplanation: '略して「팬미(ペンミ)」とも呼ばれます。歌も歌いますが、アイドルの素顔が見られるコーナーが多いのが特徴です。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 1003,
    category: 'kpopTerms',
    difficulty: 'intermediate',
    questionJa: '音楽番組',
    question: '「음방(ウムバン)」は何の略語？',
    options: [
      '음악 방송 (音楽放送)',       // ← 正解
      '음악 방 (音楽ルーム)',       // 音楽室
      '음식 방송 (食事放送)',       // モッパン
      '음원 방문 (音源訪問)'        // 造語
    ],
    correctAnswer: 0,
    explanation: '「음방」は「음악 방송(Music Broadcast)」の略です。',
    detailedExplanation: 'Music Bank, Inkigayoなどの歌番組を総称して「음방」と言います。「음방 1위(音番1位)」は歌手にとって大きな名誉です。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  },
  {
    id: 1004,
    category: 'kpopTerms',
    difficulty: 'intermediate',
    questionJa: 'ファンサイン会',
    question: '「팬사인회(ファンサイン会)」の一般的な略語は？',
    options: [
      '팬회 (ペネ)',
      '팬싸 (ペンサ)',             // ← 正解 (重要！)
      '사인 (サイン)',
      '인회 (イネ)'
    ],
    correctAnswer: 1,
    explanation: 'ファンサイン会は一般的に「팬싸(ペンサ)」と略されます。',
    detailedExplanation: '【注意】「팬서비스(ファンサービス)」の略ではありません。会話で「팬싸 응모했어?(ペンサ応募した？)」のように使います。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'fan_letter'
  },
  {
    id: 1005,
    category: 'kpopTerms',
    difficulty: 'intermediate',
    questionJa: 'エンディング妖精',
    question: '歌の最後にカメラに抜かれるメンバーを指す言葉は？',
    options: [
      '마지막 사람 (最後の人)',
      '엔딩 요정 (エンディング妖精)', // ← 正解
      '클로징 멤버 (クロージングメンバー)',
      '끝판왕 (ラスボス)'
    ],
    correctAnswer: 1,
    explanation: '「엔딩 요정(エンディングヨジョン)」は曲の終わりにカメラでクローズアップされるメンバーのことです。',
    detailedExplanation: '激しいダンスの後に息を切らしながらカメラを見つめる姿や、愛嬌を見せる姿が話題になります。',
    usage: 'conversation',
    frequency: 'high',
    context: 'concert'
  },
  {
    id: 1006,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'ペンライト',
    question: '公式ペンライトの通称「응원봉(ウンウォンボン)」の「봉」の意味は？',
    options: [
      'Ball (ボール)',
      'Bone (骨)',
      'Bong (棒)',                // ← 正解
      'Bomb (爆弾)'
    ],
    correctAnswer: 2,
    explanation: '「응원봉」は「応援(응원)＋棒(봉)」という意味です。',
    detailedExplanation: 'グループごとに「アミボム(BTS)」「カラット棒(SEVENTEEN)」などの固有名称がありますが、総称して응원봉と呼びます。',
    usage: 'conversation',
    frequency: 'high',
    context: 'concert'
  },
  {
    id: 1007,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'チケッティング',
    question: '血が飛び散るほど激しいチケット争奪戦を指す言葉は？',
    options: [
      '블러드 티켓 (Blood Ticket)',
      '피켓팅 (ピケッティング)',     // ← 正解 (血+チケッティング)
      '전쟁팅 (戦争ティング)',
      '헬켓팅 (ヘルケッティング)'
    ],
    correctAnswer: 1,
    explanation: '「피켓팅」は「피(血)」と「티켓팅(チケッティング)」の合成語です。',
    detailedExplanation: '人気アイドルのコンサートチケットを取るのが、戦争のように激しく難しいことを表すスラングです。',
    usage: 'conversation',
    frequency: 'very_high',
    context: 'concert'
  },
  {
    id: 1008,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'アルバム記録',
    question: 'アルバム発売後「最初の1週間」の販売量を指す重要単語は？',
    options: [
      '초동 (初動)',               // ← 正解
      '초반 (序盤)',
      '시작 (開始)',
      '일주 (一周)'
    ],
    correctAnswer: 0,
    explanation: '「초동(チョドン)」はファンの火力を測る最も重要な指標の一つです。',
    detailedExplanation: '正式には「초기 동원(初期動員)」の略と言われます。「초동 하프 밀리언(初動ハーフミリオン)」のように使われます。',
    usage: 'conversation',
    frequency: 'high',
    context: 'SNS'
  },
  {
    id: 1009,
    category: 'kpopTerms',
    difficulty: 'advanced',
    questionJa: 'スミング',
    question: '「스밍(スミン)」とは何をする行為？',
    options: [
      'スマイルの練習',
      'ストリーミング再生',         // ← 正解
      'スケジュールの管理',
      'スマートなミーティング'
    ],
    correctAnswer: 1,
    explanation: '「스밍」は「스트리밍(ストリーミング)」の略です。',
    detailedExplanation: '音源サイトでアイドルの曲を繰り返し再生し、ランキングを上げる応援活動のこと。「스밍 인증(スミン認証)」をSNSに上げたりします。',
    usage: 'conversation',
    frequency: 'extremely_high',
    context: 'SNS'
  }
];