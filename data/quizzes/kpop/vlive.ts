import { Question } from '../../../types';

export const vliveQuestions: Question[] = [
  // === BEGINNER: 超基本フレーズ (10問) ===
  
  {
    id: 300,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'V LIVE開始の定番挨拶',
    question: 'ほぼ全てのアイドルがV LIVE開始時に使う挨拶は？',
    options: [
      '안녕하십니까',              // 過度に丁寧・ニュースキャスター風
      '여러분 안녕하세요',         // ← 正解
      '하이 에브리바디',           // 英語混じり・不自然
      '안녕하세요만'               // 短すぎ・そっけない
    ],
    correctAnswer: 1,
    explanation: '「여러분 안녕하세요」が最も標準的で自然な配信開始の挨拶です。',
    detailedExplanation: 'BTS、BLACKPINK、NewJeans、Stray Kidsなど、ほぼ全グループが使う定番フレーズ。「여러분(皆さん)」で親しみを、「안녕하세요」で丁寧さを両立。',
    context: 'V LIVE',
    usage: 'greeting',
    frequency: 'extremely_high',
    formality: 'polite',
    realExample: 'BTS、BLACKPINK等の配信開始時'
  },

  {
    id: 301,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '久しぶりの配信',
    question: '2週間ぶりのV LIVEで最初に言う言葉は？',
    options: [
      '안녕하세요',                // 普通の挨拶・期間に言及なし
      '오랜만이에요',              // ← 正解
      '다시 왔어요',               // 「また来ました」だけで期間不明
      '오래간만입니다'             // 古風すぎ・時代劇風
    ],
    correctAnswer: 1,
    explanation: '「오랜만이에요」は「久しぶりです」の自然な表現です。',
    detailedExplanation: '오랜만(久しぶり)。より親しい関係なら「오랜만이야」、丁寧なら「오랜만입니다」。V LIVEでは「오랜만이에요」が最も一般的。',
    context: 'V LIVE',
    frequency: 'very_high',
    usage: 'greeting',
    formality: 'polite'
  },

  {
    id: 302,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '会いたかった気持ち',
    question: 'ツアーで1ヶ月会えなかった後、V LIVEで伝える言葉は？',
    options: [
      '보고 싶었어요',             // ← 正解
      '만나고 싶었어요',           // やや堅い
      '그리웠습니다',              // 文語的・スピーチ風
      '보고파요'                   // 赤ちゃん言葉・可愛こぶった表現
    ],
    correctAnswer: 0,
    explanation: '「보고 싶었어요」が最も自然で頻出の表現です。',
    detailedExplanation: '보고 싶다(会いたい)は「見たい」が原義。만나고 싶다より日常的。그립다は文学的。配信では「보고 싶었어요」が圧倒的多数。',
    context: 'V LIVE',
    emotion: 'longing',
    frequency: 'extremely_high',
    usage: 'greeting',
    realExample: '全アイドル共通・ツアー後の配信'
  },

  {
    id: 303,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'ファンの近況を聞く',
    question: 'V LIVEでファンに「元気だった？」と聞く最も自然な表現は？',
    options: [
      '건강했어요?',               // 健康状態を聞いてる・病院風
      '어떻게 지냈어요?',          // 「どう過ごした？」やや堅い
      '잘 지냈어요?',              // ← 正解
      '안녕했어요?'                // 不自然・韓国語として違和感
    ],
    correctAnswer: 2,
    explanation: '「잘 지냈어요?」は「元気だった？」の最も自然な表現です。',
    detailedExplanation: '잘 지내다(元気に過ごす)が最も一般的。건강하다は健康診断風、어떻게は少し距離感あり。V LIVEでは「잘 지냈어요?」が圧倒的。',
    context: 'V LIVE',
    usage: 'conversation',
    frequency: 'extremely_high',
    formality: 'polite'
  },

  {
    id: 304,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '食べ放送の開始',
    question: 'チキンを食べながらV LIVEを始める時の決まり文句は？',
    options: [
      '식사 시작합니다',           // フォーマルすぎ・ビジネス風
      '먹방 시작!',                // ← 正解
      '이제 먹어요',               // 普通すぎ・インパクトなし
      '음식을 먹겠습니다'          // 過度に丁寧・不自然
    ],
    correctAnswer: 1,
    explanation: '「먹방 시작!」は食べ放送の定番開始フレーズです。',
    detailedExplanation: '먹방(먹는 방송=食べる放送)は韓国YouTube/V LIVE文化の定番ジャンル。「먹방 시작!」はほぼ全アイドルが使う決まり文句。',
    context: 'V LIVE',
    usage: 'mukbang',
    frequency: 'very_high',
    realExample: 'BTS ジン、BLACKPINK ロゼ等の食べ配信'
  },

  {
    id: 305,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '最近の出来事を聞く',
    question: 'V LIVEでファンに「最近何してた？」と気軽に聞く表現は？',
    options: [
      '최근에 무엇을 하셨습니까?',  // 過度に丁寧・面接官風
      '요즘 뭐 했어요?',            // ← 正解
      '지금 뭐 해요?',              // 「今何してる？」現在形
      '무슨 일 있었어요?'           // 「何かあった？」心配してる
    ],
    correctAnswer: 1,
    explanation: '「요즘 뭐 했어요?」が最も自然な表現です。',
    detailedExplanation: '요즘(最近)、뭐(何)、하다(する)。지금は「今まさに」、무슨 일は「何か（悪いこと）」のニュアンス。「요즘 뭐 했어?」が最頻出。',
    context: 'V LIVE',
    usage: 'conversation',
    frequency: 'very_high',
    formality: 'casual'
  },

  {
    id: 306,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '深夜配信で眠い時',
    question: '午前2時のV LIVEで眠そうにしながら言う言葉は？',
    options: [
      '피곤합니다',                 // 「疲れてます」フォーマル
      '자고 싶어요',                // 「寝たい」直接的すぎ
      '졸려요',                     // ← 正解
      '수면이 필요해요'             // 「睡眠が必要」医学的
    ],
    correctAnswer: 2,
    explanation: '「졸려요」が「眠いです」の最も自然な表現です。',
    detailedExplanation: '졸리다(眠い・眠気がある)。피곤하다は「疲れた」、자고 싶다は「寝たい(でも寝ない)」。深夜配信では「졸려요」が定番。',
    context: 'V LIVE',
    frequency: 'high',
    usage: 'conversation',
    realExample: 'BTS、Stray Kids等の深夜配信'
  },

  {
    id: 307,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: 'お腹が空いた',
    question: '夕食前のV LIVEで「お腹空いた」と言う最も自然な表現は？',
    options: [
      '공복입니다',                 // 「空腹です」医学用語
      '배고파요',                   // ← 正解
      '식사가 필요해요',            // 「食事が必要」堅い
      '허기집니다'                  // 古語・文学的
    ],
    correctAnswer: 1,
    explanation: '「배고파요」が「お腹空いた」の基本表現です。',
    detailedExplanation: '배(お腹)、고프다(空く)。もっとカジュアルなら「배고파」、丁寧なら「배고픕니다」。V LIVEでは「배고파요」が最も一般的。',
    context: 'V LIVE',
    frequency: 'very_high',
    usage: 'conversation',
    formality: 'polite'
  },

  {
    id: 308,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '配信終了の感謝',
    question: 'V LIVE終了時、視聴者に言う最も一般的な言葉は？',
    options: [
      '시청 감사드립니다',         // フォーマルすぎ・ニュース風
      '봐주셔서 감사합니다',       // ← 正解
      '보아 주셔서 감사합니다',   // 文法的に不自然
      '관람해 주셔서 감사합니다'  // 「観覧」は映画館・美術館
    ],
    correctAnswer: 1,
    explanation: '「봐주셔서 감사합니다」が最も自然です。',
    detailedExplanation: '보다(見る)、주시다(くださる)、아서/어서(〜して)。「봐주셔서」は「見てくださって」の意。시청はニュース、관람は公式イベント。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    formality: 'polite',
    realExample: 'ほぼ全アイドル共通の終了挨拶'
  },

  {
    id: 309,
    category: 'vlive',
    difficulty: 'beginner',
    questionJa: '次回の配信予告',
    question: 'V LIVE終了時に「また配信するね」と言う表現は？',
    options: [
      '다시 방송하겠습니다',       // フォーマルすぎ
      '또 올게요',                 // ← 正解
      '재방송할게요',              // 「再放送」は録画配信
      '다음 번에 만나요'           // 「次回会いましょう」漠然
    ],
    correctAnswer: 1,
    explanation: '「또 올게요」は「また来ます」の意で最も自然です。',
    detailedExplanation: '또(また)、오다(来る)、ㄹ게요(〜します・約束)。配信は「来る」で表現。재방송は録画再放送。「또 올게요」が最頻出。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    formality: 'polite'
  },

  // === INTERMEDIATE: 文脈による使い分け (15問) ===

  {
    id: 310,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'コメントを読む意思表示',
    question: 'V LIVEでコメント欄を見ながら「コメントたくさん読むね」と言う時は？',
    options: [
      '댓글 전부 읽겠습니다',      // 「全部読みます」無理な約束
      '댓글 많이 읽을게요',        // ← 正解
      '코멘트 체크하겠습니다',     // ビジネス風
      '채팅 확인 중입니다'         // 業務報告風
    ],
    correctAnswer: 1,
    explanation: '「댓글 많이 읽을게요」が最も自然な表現です。',
    detailedExplanation: '댓글(コメント)が最も一般的。많이(たくさん)で「全部は無理だけど頑張る」ニュアンス。전부(全部)は現実的でない約束。',
    context: 'V LIVE',
    usage: 'interaction',
    frequency: 'very_high',
    formality: 'polite'
  },

  {
    id: 311,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'Q&Aコーナー開始',
    question: 'V LIVEでQ&Aを始める時、ファンに言う言葉は？',
    options: [
      '질문을 접수하겠습니다',     // 「受付します」事務的
      '질문에 답할게요',           // ← 正解  
      '질의응답 시간입니다',       // 「質疑応答」会議風
      '궁금증을 해소해 드리겠습니다' // 「疑問を解消」カスタマーサービス風
    ],
    correctAnswer: 1,
    explanation: '「질문에 답할게요」が最も自然です。',
    detailedExplanation: '질문(質問)、답하다(答える)、ㄹ게요(〜するね)。접수は「受付」で事務的、질의응답は会議。V LIVEは親しみが大切。',
    context: 'V LIVE',
    usage: 'QA',
    frequency: 'high',
    formality: 'polite'
  },

  {
    id: 312,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '視聴者のリクエストを聞く',
    question: 'V LIVEで「何が見たい？」とカジュアルに聞く表現は？',
    options: [
      '무엇을 보고 싶으십니까?',   // 過度に丁寧・アンケート風
      '뭐 보고 싶어요?',           // ← 正解
      '요청사항이 있으십니까?',   // 「ご要望」ホテル風
      '희망사항을 말씀해 주세요'  // フォーマルすぎ
    ],
    correctAnswer: 1,
    explanation: '「뭐 보고 싶어요?」が最も自然な表現です。',
    detailedExplanation: '뭐(何)、보다(見る)、고 싶다(〜したい)。무엇은は硬い、요청사항は業務用語。カジュアルに「뭐 보고 싶어?」も可。',
    context: 'V LIVE',
    usage: 'interaction',
    frequency: 'high',
    formality: 'polite'
  },

  {
    id: 313,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '配信内容の予告',
    question: 'V LIVE開始時に「今日はダンス練習を見せます」と言う時は？',
    options: [
      '오늘은 댄스 연습을 보여드리겠습니다', // やや堅い
      '오늘 댄스 연습 보여줄게요',  // ← 正解
      '금일 무용 연습을 공개하겠습니다', // 過度にフォーマル・ニュース風
      '오늘은 춤 연습할 거예요'     // 「練習します」見せるじゃない
    ],
    correctAnswer: 1,
    explanation: '「오늘 댄스 연습 보여줄게요」が最も自然です。',
    detailedExplanation: 'V LIVEでは簡潔でカジュアルな表現が好まれる。금일(今日)は新聞、무용(舞踊)は古典的。「보여줄게요」が最頻出。',
    context: 'V LIVE',
    usage: 'announcement',
    frequency: 'high',
    formality: 'casual'
  },

  {
    id: 314,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '久しぶりの理由説明',
    question: '3週間ぶりの配信で「最近忙しかった」と説明する時は？',
    options: [
      '최근 업무가 과중했습니다',  // 「業務過重」会社員風
      '요즘 바빴어요',             // ← 正解
      '근래에 다망했습니다',       // 文語的・古風
      '최근 시간이 없었습니다'     // 直訳調・不自然
    ],
    correctAnswer: 1,
    explanation: '「요즘 바빴어요」が最も自然な表現です。',
    detailedExplanation: '요즘(最近)、바쁘다(忙しい)。업무が 과중は会社の報告書、다망は古語。V LIVEでは「바빴어요」で十分。',
    context: 'V LIVE',
    usage: 'update',
    frequency: 'very_high',
    formality: 'polite'
  },

  {
    id: 315,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'カムバック準備中',
    question: 'V LIVEで「新曲準備してます」と伝える時、ファンが最も喜ぶ言い方は？',
    options: [
      '신곡 작업 중입니다',        // 業務報告風
      '새 노래 준비하고 있어요',   // 普通
      '곧 컴백해요',               // ← 正解・ファンが知りたい情報
      '음원 제작 중입니다'         // 業界用語・距離感
    ],
    correctAnswer: 2,
    explanation: '「곧 컴백해요」がファンの興味に最も直接的に答えます。',
    detailedExplanation: '곧(もうすぐ)、컴백(カムバック)。ファンは「いつ？」を最も知りたい。곧は期待感を高める。作業中より結果を伝える方が効果的。',
    context: 'V LIVE',
    usage: 'announcement',
    frequency: 'high',
    emotion: 'excited',
    realExample: 'カムバック前のティーザー的発言'
  },

  {
    id: 316,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: 'カムバック直前の告知',
    question: 'カムバック1週間前のV LIVEで発表する時の表現は？',
    options: [
      '다음 주에 활동 시작합니다',  // 「活動開始」事務的
      '곧 돌아와요',                // ← 正解
      '조만간 컴백 예정입니다',     // 「近日中」曖昧
      '1주일 후 컴백합니다'         // 直訳調
    ],
    correctAnswer: 1,
    explanation: '「곧 돌아와요」が最もドラマチックで期待感を高めます。',
    detailedExplanation: '곧(もうすぐ)、돌아오다(戻る)。「돌아와요」は「待っててくれたファンの元に戻る」情緒的表現。컴백より温かいニュアンス。',
    context: 'V LIVE',
    usage: 'announcement',
    frequency: 'high',
    emotion: 'excited'
  },

  {
    id: 317,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '健康心配への返答',
    question: 'ファンが体調を心配するコメントに対する適切な返答は？',
    options: [
      '의학적으로 문제없습니다',    // 「医学的に問題なし」病院風
      '건강해요, 걱정 마세요',      // ← 正解
      '건강 상태 양호합니다',       // 診断書風
      '아무 이상 없어요'            // 「異常なし」検査結果風
    ],
    correctAnswer: 1,
    explanation: '「건강해요, 걱정 마세요」が最も温かい返答です。',
    detailedExplanation: '건강하다(健康だ)、걱정하다(心配する)、마세요(〜しないで)。의학적、상태、이상は医療用語。ファンには温かく答える。',
    context: 'V LIVE',
    usage: 'reassurance',
    frequency: 'high',
    emotion: 'caring'
  },

  {
    id: 318,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '応援への感謝',
    question: 'V LIVE中、コメント欄の応援に対して言う言葉は？',
    options: [
      '응원에 감사드립니다',       // やや堅い
      '항상 응원해 줘서 고마워요',  // ← 正解
      '성원에 깊이 감사합니다',     // 「ご声援に深く」スピーチ風
      '지지해 주셔서 감사합니다'   // 「支持」政治家風
    ],
    correctAnswer: 1,
    explanation: '「항상 응원해 줘서 고마워요」が最も自然で温かい表現です。',
    detailedExplanation: '항상(いつも)、응원하다(応援する)、아/어 주다(〜してくれる)、고맙다(ありがたい)。성원、지지は距離感あり。',
    context: 'V LIVE',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'grateful',
    formality: 'polite'
  },

  {
    id: 319,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '配信時間が短い謝罪',
    question: '忙しくて30分しか配信できない時、ファンに言う言葉は？',
    options: [
      '시간 관계상 조기 종료합니다',  // 「時間の都合で早期終了」業務的
      '오래 못 해서 미안해요',        // ← 正解
      '방송 시간이 부족합니다',       // 「放送時間不足」事務的
      '짧게 끝내야 해서 죄송합니다'   // やや重すぎる謝罪
    ],
    correctAnswer: 1,
    explanation: '「오래 못 해서 미안해요」が最も自然な謝罪です。',
    detailedExplanation: '오래(長く)、못하다(できない)、미안하다(ごめん)。시간 관계상は会議、부족は業務報告。カジュアルに謝る方が親近感。',
    context: 'V LIVE',
    usage: 'apology',
    frequency: 'medium',
    formality: 'polite'
  },

  {
    id: 320,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '配信終了の予告',
    question: 'V LIVEを終える5分前に言う言葉は？',
    options: [
      '종료 시간이 다가옵니다',    // 「終了時間が迫る」アナウンス風
      '이제 끝낼게요',             // ← 正解
      '마감할 예정입니다',         // 「締め切り予定」業務風
      '방송을 종료하겠습니다'     // フォーマルすぎ
    ],
    correctAnswer: 1,
    explanation: '「이제 끝낼게요」が最も自然な終了予告です。',
    detailedExplanation: '이제(もう)、끝내다(終える)、ㄹ게요(〜するね)。종료、마감は業務用語。「이제 끝낼게요」が最頻出。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    formality: 'casual'
  },

  {
    id: 321,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '別れの挨拶',
    question: 'V LIVE終了時、最後に言う言葉として最も一般的なのは？',
    options: [
      '안녕히 계세요',             // 「さようなら」フォーマル
      '바이바이',                  // ← 正解
      '다음에 만나요',             // 「次会いましょう」やや長い
      '이만 실례하겠습니다'       // 「失礼します」ビジネス風
    ],
    correctAnswer: 1,
    explanation: '「바이바이」が最も一般的で親しみやすい別れの言葉です。',
    detailedExplanation: 'バイバイは韓国語に完全に定着。계세요は距離感、실례は過度に丁寧。ほぼ全アイドルが「바이바이」を使う。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    formality: 'casual',
    realExample: 'BTS、BLACKPINK、NewJeans等'
  },

  {
    id: 322,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '健康を願う言葉',
    question: 'V LIVE終了時、ファンの健康を気遣う言葉は？',
    options: [
      '건강 관리에 유의하시기 바랍니다', // 「健康管理に留意を」公文書風
      '건강 챙기세요',             // ← 正解
      '건강을 유지하시길 바랍니다',  // やや堅い
      '위생에 주의하세요'           // 「衛生に注意」保健所風
    ],
    correctAnswer: 1,
    explanation: '「건강 챙기세요」が最も自然な気遣い表現です。',
    detailedExplanation: '건강(健康)、챙기다(気を付ける・世話する)。유의하다、유지하다は公式文書、위생は保健指導。「챙기세요」が温かい。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'high',
    emotion: 'caring',
    formality: 'polite'
  },

  {
    id: 323,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '深夜配信のおやすみ',
    question: '深夜2時の配信終了時、ファンに言う言葉は？',
    options: [
      '안녕히 주무십시오',         // 過度に丁寧・時代劇風
      '잘 자요',                   // ← 正解
      '숙면하시기 바랍니다',       // 「熟睡を願います」公式風
      '취침하세요'                 // 「就寝してください」病院風
    ],
    correctAnswer: 1,
    explanation: '「잘 자요」が最も自然な「おやすみ」です。',
    detailedExplanation: '잘(よく)、자다(寝る)。주무시다は過度に丁寧、숙면・취침は医療用語。「잘 자요」「굿나잇」が最頻出。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'high',
    formality: 'polite',
    realExample: '深夜配信の定番フレーズ'
  },

  {
    id: 324,
    category: 'vlive',
    difficulty: 'intermediate',
    questionJa: '次回の約束',
    question: 'V LIVE終了時に「また会おうね」と言う最も温かい表現は？',
    options: [
      '다음 방송에서 뵙겠습니다',   // 「次回放送で」ビジネス風
      '또 만나요',                  // ← 正解
      '재회를 기약합니다',          // 「再会を期す」文学的
      '추후 접촉하겠습니다'         // 「後日接触」業務風
    ],
    correctAnswer: 1,
    explanation: '「또 만나요」が最も自然で温かい表現です。',
    detailedExplanation: '또(また)、만나다(会う)。뵙다は過度に丁寧、재회・접촉は距離感あり。「또 만나요」「또 봐요」が最頻出。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    formality: 'polite'
  },

  // === ADVANCED: ニュアンス・個性 (5問) ===

  {
    id: 325,
    category: 'vlive',
    difficulty: 'advanced',
    questionJa: '愛の告白（配信終了）',
    question: 'V LIVE終了時、最も感情がこもった「愛してる」の表現は？',
    options: [
      '사랑합니다',                 // 丁寧だが距離感あり
      '사랑해요',                   // 標準的
      '많이 사랑해요',              // ← 正解
      '애정합니다'                  // 「愛情します」不自然
    ],
    correctAnswer: 2,
    explanation: '「많이 사랑해요」が最も感情がこもった表現です。',
    detailedExplanation: '많이(たくさん)を付けることで愛情の大きさを強調。합니다は距離感、애정하다は不自然。「많이 사랑해요」が最頻出で最も温かい。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'extremely_high',
    emotion: 'love',
    formality: 'polite',
    realExample: 'ほぼ全アイドルが使う定番フレーズ'
  },

  {
    id: 326,
    category: 'vlive',
    difficulty: 'advanced',
    questionJa: '次回配信時期が未定',
    question: '「次いつ配信する？」と聞かれて、予定が分からない時の返答は？',
    options: [
      '미정입니다',                 // 「未定です」事務的
      '아직 모르겠어요',            // ← 正解
      '확정되지 않았습니다',        // 「確定してません」会社風
      '스케줄 조율 중입니다'        // 「スケジュール調整中」マネージャー風
    ],
    correctAnswer: 1,
    explanation: '「아직 모르겠어요」が最も自然で正直な表現です。',
    detailedExplanation: '아직(まだ)、모르다(分からない)、겠(謙遜・推量)。미정、확정は業務用語。「아직 모르겠어요」が親しみやすい。',
    context: 'V LIVE',
    usage: 'response',
    frequency: 'medium',
    formality: 'polite'
  },

  {
    id: 327,
    category: 'vlive',
    difficulty: 'advanced',
    questionJa: '忙しいけど配信',
    question: '忙しい中、ファンのために配信する気持ちを伝える表現は？',
    options: [
      '업무 중임에도 불구하고 방송합니다', // 「業務中にもかかわらず」会社員風
      '바쁜데 또 올게요',          // ← 正解
      '다망한 와중에 시간을 냈습니다', // 文語的・スピーチ風
      '스케줄을 조정해서 왔습니다'  // 「スケジュール調整」事務的
    ],
    correctAnswer: 1,
    explanation: '「바쁜데 또 올게요」が最も自然で温かい表現です。',
    detailedExplanation: '바쁘다(忙しい)、은데/ㄴ데(〜だけど)、오다(来る)。업무、다망は業務的。「바쁜데」は「忙しいけど君たちのために」のニュアンス。',
    context: 'V LIVE',
    usage: 'promise',
    frequency: 'medium',
    emotion: 'caring',
    formality: 'casual'
  },

  {
    id: 328,
    category: 'vlive',
    difficulty: 'advanced',
    questionJa: 'カムバックまで待って',
    question: 'カムバックまで2ヶ月、ファンに「待っててね」と言う時は？',
    options: [
      '대기해 주시기 바랍니다',    // 「待機を」空港アナウンス風
      '조금만 기다려요',           // ← 正解
      '인내심을 가져주세요',       // 「忍耐を」説教風
      '참고 기다려 주십시오'       // 「我慢して」過度に丁寧
    ],
    correctAnswer: 1,
    explanation: '「조금만 기다려요」が最も温かくて期待感を持たせます。',
    detailedExplanation: '조금만(ちょっとだけ)、기다리다(待つ)。대기、인내심は距離感あり。「조금만」で「もうすぐだよ」のニュアンス。',
    context: 'V LIVE',
    usage: 'request',
    frequency: 'high',
    emotion: 'caring',
    formality: 'polite',
    realExample: 'カムバック前のV LIVEで頻出'
  },

  {
    id: 329,
    category: 'vlive',
    difficulty: 'advanced',
    questionJa: '長期応援への感謝',
    question: 'デビュー5周年V LIVEで、長年のファンに伝える最も感動的な言葉は？',
    options: [
      '장기간 응원해 주셔서 감사합니다',  // 「長期間」事務的
      '앞으로도 잘 부탁합니다',    // ← 正解
      '지속적인 성원에 감사드립니다',     // 「継続的なご声援」公式風
      '5년간 응원 감사합니다'      // 普通
    ],
    correctAnswer: 1,
    explanation: '「앞으로도 잘 부탁합니다」が最も感情がこもり、将来への約束を含みます。',
    detailedExplanation: '앞으로도(これからも)、잘 부탁하다(よろしくお願いする)。過去の感謝だけでなく未来の約束を含む。장기간、지속적は距離感あり。',
    context: 'V LIVE',
    usage: 'closing',
    frequency: 'very_high',
    emotion: 'moved',
    formality: 'polite',
    realExample: '周年記念配信、重要イベント時'
  }
];