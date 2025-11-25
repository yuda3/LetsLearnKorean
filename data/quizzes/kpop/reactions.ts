import { Question } from '../../../types';

export const reactionsQuestions: Question[] = [
  // 驚き・感動 (7問)
  {
    id: 500,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '驚いた時',
    question: '予想外のことに驚いて「えっ...」と言葉を失う時の感嘆詞は？',
    options: [
      '참...',                   // 呆れた時、残念な時
      '헐...',                   // ← 正解 (驚き、呆れ、感嘆)
      '어머...',                 // おやまあ（少し女性的・年配）
      '저런...'                  // おやまあ（同情）
    ],
    correctAnswer: 1,
    explanation: '「헐(Hul)」は驚きや呆れを表す最も代表的なスラングです。',
    detailedExplanation: '良い意味でも悪い意味でも、予想外のことが起きた時に反射的に出ます。若者やアイドルが最もよく使います。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 501,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'すごい',
    question: '「すごい！」「やばい！」と感嘆する時の定番フレーズは？',
    options: [
      '대성공!',                 // 「大成功」ビジネス・企画
      '대박!',                   // ← 正解
      '거대!',                   // 「巨大」サイズが大きい
      '위대!'                    // 「偉大」偉人など
    ],
    correctAnswer: 1,
    explanation: '「대박(テバッ)」は「すごい、やばい、大当たり」を意味する必須単語です。',
    detailedExplanation: '元々は「大当たり」という意味ですが、今は良いこと全般に対する感嘆詞として定着しています。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 502,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '感動した',
    question: 'ファンのイベントなどに感動して「感動しました」と言う時は？',
    options: [
      '감동받았어요',             // ← 正解
      '감격스럽습니다',           // 「感激であります」受賞スピーチ風
      '감정했습니다',             // 「鑑定しました」
      '인상했습니다'              // 「引き上げました（料金など）」
    ],
    correctAnswer: 0,
    explanation: '「감동받았어요(感動を受けました)」が最も自然な表現です。',
    detailedExplanation: '감격(感激)はより格式高い場や、涙が出るほど大きな出来事に使います。日常的な感動は감동받았어요がベスト。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'moved'
  },
  {
    id: 503,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '可愛い',
    question: '愛嬌を見て「可愛すぎる！」と叫ぶ時の表現は？',
    options: [
      '귀여움!',                 // 名詞「可愛さ」
      '귀여워!',                 // ← 正解
      '가련해!',                 // 「可憐だ/哀れだ」古い・同情
      '유아적이야!'              // 「幼児的だ」分析・批判
    ],
    correctAnswer: 1,
    explanation: '「귀여워!(キヨウォ)」が最も一般的です。',
    detailedExplanation: '独り言のように「아 진짜 귀여워(あーマジで可愛い)」と言うのが定番です。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 504,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'かっこいい',
    question: 'パフォーマンスを見て「かっこいい！」と言う時は？',
    options: [
      '미남이시네요',             // 「イケメンですね」ドラマタイトル風
      '멋져요!',                 // ← 正解
      '잘생김!',                 // 名詞「イケメンさ」
      '용감해요!'                // 「勇敢です」ヒーロー
    ],
    correctAnswer: 1,
    explanation: '「멋져요(モッチョヨ)」が外見や行動を褒める最高の言葉です。',
    detailedExplanation: '멋있다/멋지다は、顔だけでなくダンスや振る舞い、服装など全てが「イケてる」時に使えます。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 505,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '泣きそう',
    question: '感情が込み上げて「泣きそう（グッとくる）」という表現は？',
    options: [
      '통곡해요',                 // 「痛哭（号泣）します」葬式など
      '울컥해요',                 // ← 正解 (感情が喉元まで上がる)
      '오열해요',                 // 「嗚咽します」激しく泣く
      '비통해요'                  // 「悲痛です」
    ],
    correctAnswer: 1,
    explanation: '「울컥해요(ウルコケヨ)」は、急に涙が出そうになる瞬間を表します。',
    detailedExplanation: '実際に泣く前の「グッとくる」「こみ上げる」というニュアンスで、感動的な場面で頻繁に使われます。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 506,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '心が温かい',
    question: '「心が温かくなります（ほっこりする）」という表現は？',
    options: [
      '마음이 뜨거워요',           // 「心が熱い（情熱的）」
      '마음이 훈훈해요',           // ← 正解 (ほのぼの、ほっこり)
      '마음이 미지근해요',         // 「心がぬるい」中途半端
      '심장이 발열해요'            // 「心臓が発熱します」医学的
    ],
    correctAnswer: 1,
    explanation: '「훈훈하다(フヌナダ)」が「ほのぼのする、温かい」というニュアンスです。',
    detailedExplanation: '優しいエピソードやファンの善行を聞いた時に使います。뜨겁다(熱い)は情熱や怒りに近いです。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },

  // 喜び・興奮 (7問)
  {
    id: 507,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'すごく嬉しい',
    question: '「空を飛ぶほど嬉しい」という意味の慣用表現は？',
    options: [
      '날아가고 싶어요',           // 「飛んでいきたいです」
      '날아갈 것 같아요',          // ← 正解 (飛んでいきそう)
      '비행 중이에요',             // 「飛行中です」
      '공중부양해요'               // 「空中浮遊します」オカルト
    ],
    correctAnswer: 1,
    explanation: '「날아갈 것 같아요(ナラガル コッ カタヨ)」は嬉しさのあまり体が軽くなる様子を表します。',
    detailedExplanation: '「기분이 날아갈 것 같아(気分が飛んでいきそう＝最高だ)」の形でよく使われます。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'happy'
  },
  {
    id: 508,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '幸せ',
    question: '「とても幸せです」の強調表現として自然なのは？',
    options: [
      '너무 행복해요',             // ← 正解
      '과도하게 행복해요',         // 「過度に幸せです」不自然
      '지극히 행복해요',           // 「至極幸せです」文語的
      '행복함이 발생했어요'        // 「幸福感が発生しました」事務的
    ],
    correctAnswer: 0,
    explanation: '「너무(ノム)」を付けるのが最も一般的です。',
    detailedExplanation: '「너무너무 행복해요」のように重ねて使うことも多いです。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 509,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '楽しい！',
    question: 'テンションが上がって「楽しい！ノリノリだ！」という時は？',
    options: [
      '신나요!',                 // ← 正解
      '유쾌해요!',               // 「愉快です」やや堅い
      '흥미로워요!',             // 「興味深いです」知的
      '웃겨요!'                  // 「笑えます/面白いです」
    ],
    correctAnswer: 0,
    explanation: '「신나요!(シンナヨ)」はワクワクして体が動くような楽しさを表します。',
    detailedExplanation: 'コンサートや楽しいゲームの最中に使います。재밌어요は「面白い」、신나요は「ハイテンション」なニュアンス。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 510,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '最高',
    question: '親指を立てながら「最高！」と言う時の表現は？',
    options: [
      '최상!',                   // 「最上」等級など
      '최고!',                   // ← 正解
      '정상!',                   // 「頂上」山など
      '일등!'                    // 「一等」順位
    ],
    correctAnswer: 1,
    explanation: '「최고(チェゴ)」が最も一般的です。',
    detailedExplanation: '「우리 아미 최고!(ウリARMY最高！)」のように、ファンやメンバーを称える時に使います。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'happy'
  },
  {
    id: 511,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '夢みたい',
    question: '良いことがあって「夢みたいです」と言う時は？',
    options: [
      '수면 중 같아요',            // 「睡眠中のようです」
      '꿈만 같아요',               // ← 正解
      '환각 같아요',               // 「幻覚のようです」危険
      '악몽 같아요'                // 「悪夢のようです」悪い意味
    ],
    correctAnswer: 1,
    explanation: '「꿈만 같아요(クムマン カタヨ)」は「ただ夢のようだ」という感極まった表現です。',
    detailedExplanation: '1位を獲った時や、大きな会場でコンサートをした時などに使われます。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'surprise'
  },
  {
    id: 512,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '信じられない',
    question: '「信じられません（信じたくありません）」という強い否定ではなく、驚きを表す表現は？',
    options: [
      '불신합니다',               // 「不信します」疑う
      '믿기지 않아요',             // ← 正解 (信じられないほどすごい)
      '신용할 수 없어요',          // 「信用できません」金銭・ビジネス
      '사기 같아요'                // 「詐欺みたいです」犯罪
    ],
    correctAnswer: 1,
    explanation: '「믿기지 않아요(ミッキジ アナヨ)」は、現実だと思えないほど驚いているニュアンスです。',
    detailedExplanation: '「믿을 수 없어요」も使えますが、「믿기지 않아요」の方が「実感が湧かない」というニュアンスが強いです。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'surprise'
  },
  {
    id: 513,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '鳥肌',
    question: '歌が上手すぎて「鳥肌が立った」と言う時は？',
    options: [
      '닭살 돋았어요',             // 恋愛の甘い雰囲気で使うことが多い
      '소름 돋았어요',             // ← 正解 (感動・恐怖・驚き)
      '오한이 들어요',             // 「悪寒がします」風邪
      '피부가 일어났어요'          // 「皮膚が起きました」文字通りすぎる
    ],
    correctAnswer: 1,
    explanation: '「소름(ソルム)」が圧倒的な実力や感動に対する「鳥肌」です。',
    detailedExplanation: '닭살(鳥肌)は、カップルのイチャイチャを見て「うわ〜寒い」となる時によく使います。感動の場合は「소름」が適切です。',
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
    question: '驚いて「本当に？（マジで？）」と聞くカジュアルな表現は？',
    options: [
      '실화냐?',                  // ← 正解 (ネットスラング的な「マジ？」)
      '사실입니까?',              // 「事実ですか？」尋問
      '진상입니까?',              // 「真相ですか？」事件
      '참말이오?'                 // 「誠か？」時代劇・老人
    ],
    correctAnswer: 0,
    explanation: '「실화냐?(シラニャ？)」は「これ実話？＝マジ？」というニュアンスの流行語です。',
    detailedExplanation: '「이거 실화냐?(これマジ？)」はバラエティやSNSで非常によく使われます。丁寧に言うなら「진짜예요?」です。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'surprise'
  },
  {
    id: 515,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: 'やばい・狂ってる',
    question: 'かっこよすぎて「おかしくなりそう（やばい）」というスラングは？',
    options: [
      '미쳤다',                   // ← 正解
      '돌았다',                   // 「頭が回った」悪い意味が強い
      '정신 나갔다',               // 「精神が出た」悪口
      '환자다'                    // 「患者だ」
    ],
    correctAnswer: 0,
    explanation: '「미쳤다(ミチョッタ)」は直訳すると「狂った」ですが、今は「最高・やばい」の意味で褒め言葉として使います。',
    detailedExplanation: '「미모 미쳤다(美貌がやばい)」「노래 미쳤다(歌がやばい)」のように使います。',
    usage: 'reaction',
    frequency: 'extremely_high',
    emotion: 'surprise'
  },
  {
    id: 516,
    category: 'reactions',
    difficulty: 'beginner',
    questionJa: '面白い',
    question: '相手が面白いことをして「ウケる（笑える）」と言う時は？',
    options: [
      '우습다',                   // 「滑稽だ・みすぼらしい」嘲笑
      '웃기다',                   // ← 正解
      '가소롭다',                 // 「片腹痛い」見下す
      '흥미롭다'                  // 「興味深い」学術的
    ],
    correctAnswer: 1,
    explanation: '「웃기다(ウッキダ)」は人を笑わせる面白さを指します。',
    detailedExplanation: '우습다は「バカにしている」ニュアンスが含まれることがあるので注意が必要です。「진짜 웃겨(マジウケる)」のように使います。',
    usage: 'reaction',
    frequency: 'very_high',
    emotion: 'happy'
  },
  {
    id: 517,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '胸がいっぱい',
    question: '感動で「胸がいっぱいです（あふれそうです）」は？',
    options: [
      '벅차올라요',               // ← 正解
      '체했어요',                 // 「胃もたれしました」
      '숨이 막혀요',              // 「息が詰まります」苦しい
      '답답해요'                  // 「もどかしい・息苦しい」
    ],
    correctAnswer: 0,
    explanation: '「벅차오르다(ポッチャオルダ)」は感動が内側から湧き上がってくる様子です。',
    detailedExplanation: '숨이 막히다は物理的に息苦しいか、雰囲気が気まずい時に使います。感動の場合は벅차올라요。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 518,
    category: 'reactions',
    difficulty: 'intermediate',
    questionJa: '心に響く',
    question: '歌詞や言葉が「心に響きました（届きました）」は？',
    options: [
      '마음에 도착했어요',         // 「心に到着しました」不自然
      '마음에 와 닿았어요',        // ← 正解
      '심장을 때렸어요',           // 「心臓を殴りました」物理的・痛そう
      '가슴을 찔렀어요'            // 「胸を刺しました」図星をつかれた時
    ],
    correctAnswer: 1,
    explanation: '「와 닿다(来て触れる＝届く)」が心に響くという表現です。',
    detailedExplanation: '「가사가 마음에 와 닿았어요(歌詞が心に響きました)」は感想を伝える時の定番フレーズです。',
    usage: 'reaction',
    frequency: 'high',
    emotion: 'moved'
  },
  {
    id: 519,
    category: 'reactions',
    difficulty: 'advanced',
    questionJa: '言葉が出ない',
    question: 'あまりの感動や驚きで「言葉が出ない（言葉に詰まる）」は？',
    options: [
      '묵비권을 행사합니다',       // 「黙秘権を行使します」警察
      '말문이 막혀요',             // ← 正解
      '음소거 됐어요',             // 「ミュートになりました」機械
      '입을 봉인했어요'            // 「口を封印しました」
    ],
    correctAnswer: 1,
    explanation: '「말문이 막히다(言葉の門が塞がる)」は、言葉が出てこない状態を表す慣用句です。',
    detailedExplanation: '「너무 좋아서 말문이 막혀요(良すぎて言葉が出ません)」のように使います。',
    usage: 'reaction',
    frequency: 'medium',
    emotion: 'moved'
  }
];