import { Question } from '../../../types';

export const kpopGratitudeQuestions: Question[] = [
  // === BEGINNER: 基本の感謝表現 (8問) ===
  
  {
    id: 400,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '基本の感謝',
    question: 'V LIVEでファンに「ありがとうございます」と言う最も一般的な表現は？',
    options: [
      '감사드립니다',              // 謙譲語・やや距離感
      '감사합니다',                // ← 正解
      '고맙습니다',                // 温かいが少し古風
      '땡큐'                       // 英語・カジュアルすぎ
    ],
    correctAnswer: 1,
    explanation: '「감사합니다」が最も標準的で自然な感謝表現です。',
    detailedExplanation: '감사하다(感謝する)。드리다は謙譲語で距離感、고맙다は温かいが少し古風。V LIVEでは「감사합니다」が最頻出。',
    context: 'V LIVE',
    usage: 'gratitude',
    frequency: 'extremely_high',
    formality: 'polite',
    realExample: 'ほぼ全アイドル共通'
  },

  {
    id: 401,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '強調の感謝',
    question: 'コンサート後、SNSで「本当にありがとうございました」と投稿する時は？',
    options: [
      '진심으로 감사합니다',       // 「心から」やや堅い
      '정말 감사합니다',           // ← 正解
      '대단히 감사합니다',         // 「大変」フォーマルすぎ
      '몹시 감사합니다'            // 古語的・不自然
    ],
    correctAnswer: 1,
    explanation: '「정말 감사합니다」が最も自然で頻繁に使われます。',
    detailedExplanation: '정말(本当に)は最も一般的な強調語。진심으로はやや堅い、대단히は過度にフォーマル、몹시は古語的。SNSでは「정말」が最頻出。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'grateful',
    context: 'SNS',
    formality: 'polite'
  },

  {
    id: 402,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '量を強調',
    question: 'ファンミーティングで「たくさんありがとうございます」と言う時は？',
    options: [
      '대량으로 감사합니다',       // 「大量に」物を数える表現
      '많이 감사합니다',           // ← 正解
      '다수 감사합니다',           // 「多数」ビジネス用語
      '무수히 감사합니다'          // 「無数に」詩的すぎ
    ],
    correctAnswer: 1,
    explanation: '「많이 감사합니다」が最も自然な表現です。',
    detailedExplanation: '많이(たくさん)は感謝の深さを表す。대량은物、다수はビジネス、무수히は文学的。ファンミで「많이 감사합니다」が定番。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'concert',
    formality: 'polite'
  },

  {
    id: 403,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '継続的な感謝',
    question: 'デビュー記念日のV LIVEで「いつもありがとうございます」と言う時は？',
    options: [
      '언제든지 감사합니다',       // 「いつでも」意味が違う
      '항상 감사합니다',           // ← 正解
      '매번 감사합니다',           // 「毎回」やや不自然
      '상시 감사합니다'            // 「常時」業務用語
    ],
    correctAnswer: 1,
    explanation: '「항상 감사합니다」が最も自然で温かい表現です。',
    detailedExplanation: '항상(いつも)は継続的な感謝を表す最適語。언제든지は「いつでもOK」、매번は「毎回」、상시は業務用語。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'V LIVE',
    formality: 'polite',
    realExample: 'デビュー記念日、周年記念'
  },

  {
    id: 404,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '心がいっぱい',
    question: '初めて1位を取った時、スピーチで感謝の気持ちを表現する言葉は？',
    options: [
      '감사의 마음이 충만합니다',  // 「充満」固すぎ
      '감사한 마음 가득해요',      // ← 正解
      '감사의 정이 넘칩니다',      // 「情が溢れる」古風
      '감사의 감정이 충전됐어요'   // 「充電された」機械的
    ],
    correctAnswer: 1,
    explanation: '「감사한 마음 가득해요」が最も自然で感情がこもっています。',
    detailedExplanation: '마음(心・気持ち)、가득하다(いっぱいだ)。充만・넘치다は文語的、충전は機械的。「가득해요」が最も温かい。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'award_speech',
    realExample: '音楽番組1位、授賞式'
  },

  {
    id: 405,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: 'おかげです',
    question: '音楽番組で1位を取った時、「皆さんのおかげです」と言う表現は？',
    options: [
      '여러분의 공로입니다',       // 「功労」会社の表彰式風
      '여러분 덕분입니다',         // ← 正解
      '여러분의 기여입니다',       // 「寄与」論文風
      '여러분의 은혜입니다'        // 「恩恵」宗教的
    ],
    correctAnswer: 1,
    explanation: '「여러분 덕분입니다」が最も自然で頻出の表現です。',
    detailedExplanation: '덕분(おかげ)は感謝を表す最適語。공로・기여はビジネス、은혜は宗教的。「덕분입니다」がK-POP業界の定番。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'award_speech',
    formality: 'formal',
    realExample: 'ほぼ全アイドルが使う定番フレーズ'
  },

  {
    id: 406,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '愛してます',
    question: 'コンサート終了時、「愛してます」と叫ぶ最も一般的な表現は？',
    options: [
      '애정합니다',                // 「愛情します」不自然
      '사랑합니다',                // やや堅い
      '사랑해요',                  // ← 正解
      '러브합니다'                 // 英語混じり・不自然
    ],
    correctAnswer: 2,
    explanation: '「사랑해요」が最も自然で頻繁に使われます。',
    detailedExplanation: '사랑하다(愛する)。애정하다は不自然、합니다はやや距離感、러브は不自然。コンサートでは「사랑해요」が定番。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    emotion: 'love',
    context: 'concert',
    formality: 'polite',
    realExample: 'コンサート終了時の定番'
  },

  {
    id: 407,
    category: 'kpop_gratitude',
    difficulty: 'beginner',
    questionJa: '簡潔な感謝',
    question: 'SNSでファンアートに対して一言お礼を言う時は？',
    options: [
      '감사의 뜻을 전합니다',      // 「感謝の意を伝える」公文書風
      '고마워요',                  // ← 正解
      '사의를 표합니다',           // 「謝意を表す」ビジネス風
      '감사 인사 드립니다'         // 「感謝の挨拶」冗長
    ],
    correctAnswer: 1,
    explanation: '「고마워요」が最も自然で親しみやすい表現です。',
    detailedExplanation: '고맙다(ありがたい)は温かいニュアンス。뜻을 전하다、사의를 표하다は公式文書。SNSには「고마워요」が最適。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'grateful',
    context: 'SNS',
    formality: 'casual'
  },

  // === INTERMEDIATE: シーンによる使い分け (12問) ===

  {
    id: 408,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '心から感謝',
    question: 'MAMA授賞式で大賞を受賞、心からの感謝を伝える最も適切な表現は？',
    options: [
      '깊이 감사드립니다',         // 「深く」やや堅い
      '진심으로 감사합니다',       // ← 正解
      '심심한 감사를 드립니다',    // 「深甚な」文語的
      '중심에서 감사합니다'        // 「中心から」不自然
    ],
    correctAnswer: 1,
    explanation: '「진심으로 감사합니다」が最も誠実で適切な表現です。',
    detailedExplanation: '진심(真心)、으로(で)。깊이は少し堅い、심심한は古語、중심은不自然。授賞式では「진심으로」が最頻出。',
    usage: 'gratitude',
    frequency: 'very_high',
    formality: 'formal',
    context: 'award_speech',
    realExample: 'MAMA、Golden Disc等の授賞式'
  },

  {
    id: 409,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '恩返しの約束',
    question: 'ファンミーティングで「恩返しします」と約束する時、最も自然な表現は？',
    options: [
      '은혜를 갚겠습니다',         // 「恩を返す」古典的
      '보답하겠습니다',            // ← 正解
      '반대급부를 제공하겠습니다', // 「対価を提供」契約書風
      '보상하겠습니다'             // 「補償」損害賠償風
    ],
    correctAnswer: 1,
    explanation: '「보답하겠습니다」が最も自然で温かい約束の表現です。',
    detailedExplanation: '보답하다(報いる)は感謝を行動で返す意。은혜を 갚다は古典的、반대급부はビジネス、보상は賠償。',
    usage: 'gratitude',
    frequency: 'high',
    context: 'concert',
    formality: 'formal',
    emotion: 'determined'
  },

  {
    id: 410,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '応援への感謝',
    question: 'カムバックショーで「応援ありがとうございます」と言う最も自然な表現は？',
    options: [
      '성원에 감사드립니다',       // 「ご声援」やや堅い
      '응원해 주셔서 감사합니다',   // ← 正解
      '지원에 감사합니다',         // 「支援」ビジネス風
      '후원해 주셔서 감사합니다'   // 「後援」スポンサー風
    ],
    correctAnswer: 1,
    explanation: '「응원해 주셔서 감사합니다」が最も自然で頻出の表現です。',
    detailedExplanation: '응원하다(応援する)、아/어 주시다(〜してくださる)。성원はやや堅い、지원・후원はビジネス。「응원해 주셔서」が最頻出。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert',
    formality: 'polite',
    realExample: 'カムバックショー、コンサート'
  },

  {
    id: 411,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '力をもらう',
    question: 'V LIVEで「皆さんから力をもらっています」と伝える最も自然な表現は？',
    options: [
      '여러분께서 힘을 부여하십니다',  // 「付与」ビジネス風
      '여러분 덕분에 힘이 나요',       // ← 正解
      '여러분이 에너지를 공급합니다',  // 「供給」機械的
      '여러분께 활력을 받습니다'       // 「活力」やや堅い
    ],
    correctAnswer: 1,
    explanation: '「여러분 덕분에 힘이 나요」が最も自然で温かい表現です。',
    detailedExplanation: '덕분에(おかげで)、힘이 나다(力が出る)。부여・공급は業務的、활力はやや堅い。「힘이 나요」が最も自然。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'grateful',
    context: 'V LIVE',
    formality: 'polite'
  },

  {
    id: 412,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '頑張れる理由',
    question: 'つらい時期を乗り越えた後、「皆さんがいるから頑張れました」と言う時は？',
    options: [
      '여러분이 계셔서 분발할 수 있었습니다',  // 「奮発」古語的
      '여러분 덕분에 힘낼 수 있었어요',       // ← 正解
      '여러분의 존재로 노력 가능했습니다',    // 「努力可能」不自然
      '여러분이 있어 동력을 얻었습니다'       // 「動力」機械的
    ],
    correctAnswer: 1,
    explanation: '「여러분 덕분에 힘낼 수 있었어요」が最も自然で感情がこもっています。',
    detailedExplanation: '덕분에(おかげで)、힘내다(頑張る)、ㄹ 수 있다(〜できる)。분발は古語、동력は機械的。「힘낼 수 있었어요」が最頻出。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE',
    emotion: 'moved',
    formality: 'polite',
    realExample: '困難な時期後のV LIVE'
  },

  {
    id: 413,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: 'エネルギー源',
    question: 'ファンレターで「皆さんが私のエネルギーです」と書く時は？',
    options: [
      '여러분이 제 동력원입니다',   // 「動力源」機械工学
      '여러분이 제 에너지예요',    // ← 正解
      '여러분이 제 활력소입니다',  // 「活力素」やや古風
      '여러분이 제 전원입니다'     // 「電源」電気機器
    ],
    correctAnswer: 1,
    explanation: '「여러분이 제 에너지예요」が最も自然でストレートな表現です。',
    detailedExplanation: '에너지(エネルギー)はそのまま使う。동력원・전원は工学用語、활력소は少し古い。シンプルが最適。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'love',
    context: 'fan_letter',
    formality: 'polite'
  },

  {
    id: 414,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '幸せの理由',
    question: 'コンサートで「皆さんのおかげで幸せです」と叫ぶ時は？',
    options: [
      '여러분으로 인해 행복합니다',  // 「により」文語的
      '여러분 덕분에 행복해요',     // ← 正解
      '여러분 때문에 행복합니다',   // 「せいで」若干ネガティブ
      '여러분의 영향으로 행복합니다' // 「影響で」研究論文風
    ],
    correctAnswer: 1,
    explanation: '「여러분 덕분에 행복해요」が最も自然で温かい表現です。',
    detailedExplanation: '덕분에(おかげで)はポジティブ。로 인해は文語、때문에は時にネガティブ、영향으로は学術的。「덕분에」が最適。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'happy',
    context: 'concert',
    formality: 'polite'
  },

  {
    id: 415,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '一緒にいてくれて',
    question: 'デビュー5周年V LIVEで「ずっと一緒にいてくれてありがとう」と言う時は？',
    options: [
      '계속 동반해 주셔서 감사합니다',    // 「同伴」ビジネス用語
      '쭉 함께해 줘서 고마워요',         // ← 正解
      '지속적으로 동행해 주셔서 감사합니다', // 「持続的に同行」旅行代理店風
      '줄곧 곁에 계셔서 감사합니다'       // 「ずっとそばに」やや文語的
    ],
    correctAnswer: 1,
    explanation: '「쭉 함께해 줘서 고마워요」が最も自然で感情がこもっています。',
    detailedExplanation: '쭉(ずっと)、함께하다(一緒にする)、아/어 주다(〜してくれる)。동반・동행はビジネス、줄곧は文語的。',
    usage: 'gratitude',
    frequency: 'very_high',
    emotion: 'moved',
    context: 'V LIVE',
    formality: 'polite',
    realExample: '周年記念V LIVE'
  },

  {
    id: 416,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '支え',
    question: '困難な時期を乗り越えた後、「皆さんが私の支えでした」と言う時は？',
    options: [
      '여러분이 제 지주였습니다',    // 「支柱」建築用語
      '여러분이 제 버팀목이었어요',  // ← 正解
      '여러분이 제 받침대였습니다',  // 「台座」物理的支え
      '여러분이 제 기둥이었습니다'   // 「柱」やや比喩的すぎ
    ],
    correctAnswer: 1,
    explanation: '「여러분이 제 버팀목이었어요」が最も自然で感情的な表現です。',
    detailedExplanation: '버팀목(支え)は精神的支えの定番語。지주は建築、받침대は物理的、기둥はやや比喩的。「버팀목」が最適。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'V LIVE',
    formality: 'polite',
    realExample: '困難な時期後の告白'
  },

  {
    id: 417,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '来場への感謝',
    question: 'コンサート開始時、「来てくれてありがとうございます」と言う時は？',
    options: [
      '방문해 주셔서 감사합니다',    // 「訪問」ビジネス風
      '와주셔서 감사합니다',         // ← 正解
      '참석해 주셔서 감사합니다',    // 「参席」会議風
      '출석해 주셔서 감사합니다'     // 「出席」学校風
    ],
    correctAnswer: 1,
    explanation: '「와주셔서 감사합니다」が最も自然でシンプルな表現です。',
    detailedExplanation: '오다(来る)、아/어 주시다(〜してくださる)。방문はビジネス、참석は会議、출석は学校。「와주셔서」が最頻出。',
    usage: 'gratitude',
    frequency: 'extremely_high',
    context: 'concert',
    formality: 'polite',
    realExample: 'コンサート開始時の定番'
  },

  {
    id: 418,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '聴いてくれて',
    question: '新曲リリース後のV LIVEで「たくさん聴いてくれてありがとう」と言う時は？',
    options: [
      '청취해 주셔서 감사합니다',    // 「聴取」ラジオ・統計用語
      '많이 들어 주셔서 감사해요',   // ← 正解
      '경청해 주셔서 감사합니다',    // 「傾聴」カウンセリング風
      '수신해 주셔서 감사합니다'     // 「受信」通信用語
    ],
    correctAnswer: 1,
    explanation: '「많이 들어 주셔서 감사해요」が最も自然な表現です。',
    detailedExplanation: '많이(たくさん)、듣다(聴く)、아/어 주시다(〜してくださる)。청취・경청・수신は専門用語。シンプルが最適。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE',
    formality: 'polite',
    realExample: 'カムバック後のV LIVE'
  },

  {
    id: 419,
    category: 'kpop_gratitude',
    difficulty: 'intermediate',
    questionJa: '待ってくれて',
    question: '兵役から戻った後、「待っててくれてありがとう」と言う時は？',
    options: [
      '대기해 주셔서 감사합니다',     // 「待機」空港アナウンス風
      '기다려 주셔서 감사합니다',     // ← 正解
      '대기 상태를 유지해 주셔서 감사합니다', // 「待機状態維持」軍隊用語
      '인내해 주셔서 감사합니다'      // 「忍耐」説教風
    ],
    correctAnswer: 1,
    explanation: '「기다려 주셔서 감사합니다」が最も自然で感情がこもっています。',
    detailedExplanation: '기다리다(待つ)、아/어 주시다(〜してくださる)。대기は業務的、인내は説教的。「기다려 주셔서」が最頻出。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'V LIVE',
    emotion: 'moved',
    formality: 'polite',
    realExample: '兵役復帰後、長期休止後'
  },

  // === ADVANCED: 深い感謝・特別な場面 (5問) ===

  {
    id: 420,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '言葉にできない感謝',
    question: 'MAMA大賞受賞スピーチで最も感動的な感謝表現は？',
    options: [
      '형언할 수 없을 만큼 감사합니다',       // 「形言」文語的
      '말로 표현할 수 없을 만큼 감사해요',    // ← 正解
      '언어로 묘사 불가능할 정도로 감사합니다', // 「言語で描写不可能」論文風
      '서술이 어려울 만큼 감사합니다'         // 「叙述困難」学術的
    ],
    correctAnswer: 1,
    explanation: '「말로 표현할 수 없을 만큼 감사해요」が最も自然で感情的です。',
    detailedExplanation: '말로 표현하다(言葉で表現する)、ㄹ 수 없다(できない)、만큼(〜ほど)。형언・묘사・서술は文語的すぎ。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'award_speech',
    formality: 'polite',
    realExample: 'MAMA、Golden Disc等の大賞受賞時'
  },

  {
    id: 421,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '変わらない愛への感謝',
    question: 'デビュー10周年コンサートで「変わらない愛をありがとう」と言う時は？',
    options: [
      '불변의 애정에 감사드립니다',           // 「不変の愛情」論文風
      '변함없는 사랑 감사해요',               // ← 正解
      '일관된 호의에 감사합니다',             // 「一貫した好意」ビジネス風
      '지속적 애착에 사의를 표합니다'         // 「持続的愛着」心理学用語
    ],
    correctAnswer: 1,
    explanation: '「변함없는 사랑 감사해요」が最も自然で感情がこもっています。',
    detailedExplanation: '변함없다(変わらない)、사랑(愛)。불변・일관は学術的、애착は心理学用語。シンプルが最も感動的。',
    usage: 'gratitude',
    frequency: 'high',
    emotion: 'moved',
    context: 'concert',
    formality: 'polite',
    realExample: '周年記念コンサート'
  },

  {
    id: 422,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '存在そのものへの感謝',
    question: 'つらい時期を乗り越えた後、ファンの存在に対する最も深い感謝表現は？',
    options: [
      '여러분의 존재 자체에 감사합니다',      // やや堅い
      '여러분이 있어서 살 수 있었어요',       // ← 正解
      '여러분의 실존에 감사를 표합니다',      // 「実存」哲学用語
      '여러분의 현존에 사의를 드립니다'       // 「現存」神学用語
    ],
    correctAnswer: 1,
    explanation: '「여러분이 있어서 살 수 있었어요」が最も感情的で深い表現です。',
    detailedExplanation: '있다(いる)、살다(生きる)、ㄹ 수 있다(〜できる)。「살 수 있었어요(生きられた)」が最も重い・深い感謝。',
    usage: 'gratitude',
    frequency: 'medium',
    emotion: 'moved',
    context: 'V LIVE',
    formality: 'polite',
    realExample: '深刻な困難後の告白'
  },

  {
    id: 423,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: 'もっと良い姿で',
    question: '受賞後、今後の抱負として「もっと良い姿でお返しします」と言う時は？',
    options: [
      '개선된 모습으로 보상하겠습니다',       // 「改善された姿で補償」ビジネス
      '더 좋은 모습으로 보답하겠습니다',      // ← 正解
      '향상된 이미지로 대가를 제공하겠습니다', // 「向上されたイメージで対価」契約書
      '진화한 형태로 반대급부하겠습니다'      // 「進化した形態で反対給付」法律用語
    ],
    correctAnswer: 1,
    explanation: '「더 좋은 모습으로 보답하겠습니다」が最も自然で温かい約束です。',
    detailedExplanation: '더 좋다(もっと良い)、모습(姿)、보답하다(報いる)。개선・보상・대가は業務的、반대급부は法律用語。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'award_speech',
    emotion: 'determined',
    formality: 'formal',
    realExample: '授賞式の定番締めくくり'
  },

  {
    id: 424,
    category: 'kpop_gratitude',
    difficulty: 'advanced',
    questionJa: '生涯の約束',
    question: 'デビュー10周年の感動的な場面で「これからもずっと一緒に」と約束する時は？',
    options: [
      '향후 지속적으로 동행하겠습니다',       // 「今後持続的に同行」旅行会社
      '앞으로도 쭉 함께할게요',               // ← 正解
      '미래에도 동반 관계를 유지하겠습니다',  // 「同伴関係維持」ビジネス契約
      '장래에도 결속하겠습니다'               // 「結束」政治用語
    ],
    correctAnswer: 1,
    explanation: '「앞으로도 쭉 함께할게요」が最も自然で感情がこもっています。',
    detailedExplanation: '앞으로도(これからも)、쭉(ずっと)、함께하다(一緒にする)、ㄹ게요(〜するね)。향후・동반・결속は業務的。',
    usage: 'gratitude',
    frequency: 'very_high',
    context: 'concert',
    emotion: 'love',
    formality: 'polite',
    realExample: '周年記念・重要な節目'
  }
];