import { Question } from '../types';

export const quizQuestions: Question[] = [
  // 旅行会話 (travel)
  {
    id: 1,
    category: 'travel',
    questionJa: 'レストランで食べ物を注文するとき',
    question: '「これをください」は韓国語で？',
    options: [
      '이것 주세요',
      '저것 주세요',
      '그것 주세요',
      '다 주세요',
    ],
    correctAnswer: 0,
    explanation: '「이것(これ)+ 주세요(ください)」で「これをください」という意味になります。',
    detailedExplanation:
      '韓国語の指示代名詞は3種類あります：이것(これ・近くのもの)、그것(それ・相手の近くのもの)、저것(あれ・遠くのもの)。レストランでメニューを指して注文する時は「이것 주세요」が最も自然です。',
  },
  {
    id: 2,
    category: 'travel',
    questionJa: '道を尋ねるとき',
    question: '「トイレはどこですか？」は韓国語で？',
    options: [
      '화장실이 어디예요?',
      '화장실이 뭐예요?',
      '화장실이 누구예요?',
      '화장실이 언제예요?',
    ],
    correctAnswer: 0,
    explanation: '「화장실(トイレ)+ 어디예요?(どこですか?)」で場所を尋ねます。',
    detailedExplanation:
      '疑問詞の使い分け：어디(どこ)、뭐/무엇(何)、누구(誰)、언제(いつ)、왜(なぜ)、어떻게(どのように)。場所を聞く時は必ず「어디」を使います。',
  },
  {
    id: 3,
    category: 'travel',
    questionJa: 'カフェでの注文',
    question: '「アイスアメリカーノ一つください」は？',
    options: [
      '아이스 아메리카노 한 잔 주세요',
      '아이스 아메리카노 두 잔 주세요',
      '아이스 아메리카노 세 잔 주세요',
      '뜨거운 아메리카노 주세요',
    ],
    correctAnswer: 0,
    explanation: '한 잔(一杯)は「ひとつ」という意味の数え方です。',
    detailedExplanation:
      '飲み物を数える時は「잔(杯)」を使います：한 잔(1杯)、두 잔(2杯)、세 잔(3杯)。아이스(アイス)と뜨거운(ホット)も覚えておくと便利です。',
  },
  {
    id: 4,
    category: 'travel',
    questionJa: 'ホテルでのチェックイン',
    question: '「予約しています」は韓国語で？',
    options: [
      '예약했어요',
      '예약할게요',
      '예약했습니다',
      '예약하고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「예약했어요」は丁寧な過去形で「予約しました」という意味です。',
    detailedExplanation:
      '예약하다(予約する)の活用：예약해요(予約します)、예약했어요(予約しました)、예약할게요(予約します・意志)、예약하고 싶어요(予約したいです)。',
  },
  {
    id: 21,
    category: 'travel',
    questionJa: 'タクシーで目的地を伝える',
    question: '「明洞まで行ってください」は？',
    options: [
      '명동까지 가주세요',
      '명동에서 가주세요',
      '명동으로 가주세요',
      '명동까지 왔어요',
    ],
    correctAnswer: 0,
    explanation: '「까지」は「まで」、「가주세요」は「行ってください」です。',
    detailedExplanation:
      '助詞の使い分け：까지(まで・到着点)、에서(で・場所)、으로/로(へ・方向)。タクシーでは「場所 + 까지 + 가주세요」が自然です。',
  },
  {
    id: 22,
    category: 'travel',
    questionJa: '写真を撮ってもらうとき',
    question: '「写真を撮ってもらえますか？」は？',
    options: [
      '사진 찍어 주시겠어요?',
      '사진 찍었어요',
      '사진 찍을래요',
      '사진 찍으세요',
    ],
    correctAnswer: 0,
    explanation: '「찍어 주시겠어요?」は「撮っていただけますか?」の丁寧な依頼表現です。',
    detailedExplanation:
      '사진(写真)、찍다(撮る)、주시겠어요?(いただけますか?)。観光地で使える重要フレーズです。',
  },
  {
    id: 23,
    category: 'travel',
    questionJa: '地下鉄の切符を買うとき',
    question: '「江南駅まで2枚ください」は？',
    options: [
      '강남역까지 두 장 주세요',
      '강남역까지 두 개 주세요',
      '강남역까지 이 장 주세요',
      '강남역에 두 장 주세요',
    ],
    correctAnswer: 0,
    explanation: '「두 장」は「2枚」、切符を数える時は「장(枚)」を使います。',
    detailedExplanation:
      '固有数詞：하나(1)、둘(2)、셋(3)。切符やチケットは「장」で数えます：한 장(1枚)、두 장(2枚)。',
  },
  {
    id: 24,
    category: 'travel',
    questionJa: '空港で荷物について',
    question: '「スーツケースを預けたいです」は？',
    options: [
      '캐리어를 맡기고 싶어요',
      '캐리어를 찾고 싶어요',
      '캐리어를 사고 싶어요',
      '캐리어가 있어요',
    ],
    correctAnswer: 0,
    explanation: '「맡기다」は「預ける」、「고 싶어요」は「したいです」です。',
    detailedExplanation:
      '캐리어(スーツケース)、맡기다(預ける)、찾다(探す・受け取る)、사다(買う)。ホテルやロッカーで使えます。',
  },
  {
    id: 25,
    category: 'travel',
    questionJa: 'Wi-Fiについて尋ねる',
    question: '「Wi-Fiのパスワードは何ですか？」は？',
    options: [
      '와이파이 비밀번호가 뭐예요?',
      '와이파이가 어디예요?',
      '와이파이가 언제예요?',
      '와이파이가 얼마예요?',
    ],
    correctAnswer: 0,
    explanation: '「비밀번호」はパスワード、「뭐예요?」は「何ですか?」です。',
    detailedExplanation:
      '와이파이(Wi-Fi)、비밀번호(パスワード)、뭐/무엇(何)。カフェやホテルで必須のフレーズです。',
  },
  {
    id: 26,
    category: 'travel',
    questionJa: 'バスの乗り方を尋ねる',
    question: '「このバスは明洞に行きますか？」は？',
    options: [
      '이 버스 명동 가요?',
      '저 버스 명동 가요?',
      '그 버스 명동 가요?',
      '버스가 명동이에요?',
    ],
    correctAnswer: 0,
    explanation: '「이 버스」は「このバス」、「가요?」は「行きますか?」です。',
    detailedExplanation:
      '指示代名詞：이(この・近く)、그(その・相手の近く)、저(あの・遠く)。バスに乗る前に確認する時に使います。',
  },
  {
    id: 27,
    category: 'travel',
    questionJa: '観光案内所で',
    question: '「地図をもらえますか？」は？',
    options: [
      '지도 받을 수 있어요?',
      '지도 줄 수 있어요?',
      '지도 가르쳐 주세요',
      '지도가 어디예요?',
    ],
    correctAnswer: 0,
    explanation: '「받을 수 있어요?」は「もらえますか?」という可能の表現です。',
    detailedExplanation:
      '지도(地図)、받다(もらう)、주다(あげる)、을/를 수 있다(できる・可能)。より丁寧には「지도 좀 주시겠어요?」も使えます。',
  },
  {
    id: 28,
    category: 'travel',
    questionJa: 'ホテルで問題を報告',
    question: '「お湯が出ません」は？',
    options: [
      '뜨거운 물이 안 나와요',
      '차가운 물이 안 나와요',
      '물이 뜨거워요',
      '물이 많아요',
    ],
    correctAnswer: 0,
    explanation: '「뜨거운 물」は「お湯」、「안 나와요」は「出ません」です。',
    detailedExplanation:
      '뜨겁다(熱い)、차갑다(冷たい)、물(水)、안(〜ない)、나오다(出る)。ホテルでのトラブル時に使えます。',
  },

  // 日常会話 (daily)
  {
    id: 5,
    category: 'daily',
    questionJa: '挨拶の基本',
    question: '「おはようございます」は韓国語で？',
    options: [
      '안녕하세요',
      '잘 자요',
      '안녕히 가세요',
      '반갑습니다',
    ],
    correctAnswer: 0,
    explanation: '「안녕하세요」は時間帯に関係なく使える基本的な挨拶です。',
    detailedExplanation:
      '韓国語では日本語と違い、朝昼晩で挨拶を変えません。「안녕하세요」がいつでも使える万能な挨拶表現です。より親しい関係なら「안녕」だけでもOKです。',
  },
  {
    id: 6,
    category: 'daily',
    questionJa: '別れの挨拶',
    question: '去る人に対して「さようなら」は？',
    options: [
      '안녕히 가세요',
      '안녕히 계세요',
      '또 만나요',
      '잘 가',
    ],
    correctAnswer: 0,
    explanation: '「안녕히 가세요」は去る人に対して使う丁寧な別れの挨拶です。',
    detailedExplanation:
      '韓国語の別れの挨拶は2種類：안녕히 가세요(去る人に)、안녕히 계세요(残る人に)。友達同士なら「또 만나요(また会いましょう)」や「잘 가(じゃあね)」も使えます。',
  },
  {
    id: 7,
    category: 'daily',
    questionJa: '自己紹介',
    question: '「私は田中です」は韓国語で？',
    options: [
      '저는 다나카예요',
      '나는 다나카예요',
      '제가 다나카예요',
      '저의 다나카예요',
    ],
    correctAnswer: 0,
    explanation: '「저는(私は)+ 名前 + 예요」で丁寧な自己紹介ができます。',
    detailedExplanation:
      '一人称：저(私・謙譲)、나(私・カジュアル)。助詞：는/은(は)、가/이(が)。丁寧な場面では「저는」を使います。',
  },
  {
    id: 29,
    category: 'daily',
    questionJa: '天気の話題',
    question: '「今日は天気がいいですね」は？',
    options: [
      '오늘 날씨가 좋네요',
      '오늘 날씨가 나빠요',
      '내일 날씨가 좋아요',
      '어제 날씨가 좋았어요',
    ],
    correctAnswer: 0,
    explanation: '「날씨가 좋네요」は「天気がいいですね」という感嘆表現です。',
    detailedExplanation:
      '오늘(今日)、내일(明日)、어제(昨日)、날씨(天気)、좋다(良い)、나쁘다(悪い)。「네요」は感嘆・確認の語尾です。',
  },
  {
    id: 30,
    category: 'daily',
    questionJa: '体調を尋ねる',
    question: '「お元気ですか？」は韓国語で？',
    options: [
      '잘 지내세요?',
      '잘 먹었어요?',
      '잘 했어요?',
      '잘 자요?',
    ],
    correctAnswer: 0,
    explanation: '「잘 지내세요?」は「お元気ですか?」「元気に過ごしていますか?」の意味です。',
    detailedExplanation:
      '잘(よく)、지내다(過ごす)、먹다(食べる)、하다(する)、자다(寝る)。久しぶりの挨拶でよく使います。',
  },
  {
    id: 31,
    category: 'daily',
    questionJa: '予定を尋ねる',
    question: '「今週末は何をしますか？」は？',
    options: [
      '이번 주말에 뭐 해요?',
      '지난 주말에 뭐 했어요?',
      '다음 주말에 뭐 할 거예요?',
      '주말이 뭐예요?',
    ],
    correctAnswer: 0,
    explanation: '「이번 주말」は「今週末」、「뭐 해요?」は「何をしますか?」です。',
    detailedExplanation:
      '이번(今回)、지난(先)、다음(次)、주말(週末)、뭐(何)、하다(する)。時制：해요(現在)、했어요(過去)、할 거예요(未来)。',
  },
  {
    id: 32,
    category: 'daily',
    questionJa: '趣味について',
    question: '「趣味は何ですか？」は韓国語で？',
    options: [
      '취미가 뭐예요?',
      '취미를 해요?',
      '취미가 좋아요?',
      '취미에 가요?',
    ],
    correctAnswer: 0,
    explanation: '「취미」は趣味、「뭐예요?」は「何ですか?」です。',
    detailedExplanation:
      '취미(趣味)、뭐/무엇(何)。答え方：제 취미는 영화 보기예요(私の趣味は映画鑑賞です)。',
  },
  {
    id: 33,
    category: 'daily',
    questionJa: '電話での対応',
    question: '「もしもし」は韓国語で？',
    options: [
      '여보세요',
      '안녕하세요',
      '저기요',
      '잠깐만요',
    ],
    correctAnswer: 0,
    explanation: '「여보세요」は電話に出る時の「もしもし」です。',
    detailedExplanation:
      '여보세요(もしもし・電話専用)、안녕하세요(こんにちは・対面)、저기요(すみません・呼びかけ)、잠깐만요(ちょっと待って)。',
  },
  {
    id: 34,
    category: 'daily',
    questionJa: '時間を尋ねる',
    question: '「今何時ですか？」は？',
    options: [
      '지금 몇 시예요?',
      '지금 몇 월이에요?',
      '지금 몇 일이에요?',
      '지금 뭐예요?',
    ],
    correctAnswer: 0,
    explanation: '「몇 시예요?」は「何時ですか?」という意味です。',
    detailedExplanation:
      '지금(今)、몇(何・数)、시(時)、월(月)、일(日)。몇は数を尋ねる疑問詞です。',
  },
  {
    id: 35,
    category: 'daily',
    questionJa: '久しぶりの挨拶',
    question: '「久しぶりです」は韓国語で？',
    options: [
      '오랜만이에요',
      '처음 뵙겠습니다',
      '또 만나요',
      '잘 지냈어요',
    ],
    correctAnswer: 0,
    explanation: '「오랜만이에요」は「久しぶりです」という意味です。',
    detailedExplanation:
      '오랜만(久しぶり)、처음(初めて)、또(また)、뵙다(お会いする・謙譲語)、만나다(会う)。',
  },
  {
    id: 36,
    category: 'daily',
    questionJa: '同意を示す',
    question: '「そうですね」「そうです」は？',
    options: [
      '그렇네요 / 맞아요',
      '아니에요',
      '몰라요',
      '틀려요',
    ],
    correctAnswer: 0,
    explanation: '「그렇네요」「맞아요」はどちらも同意を示す表現です。',
    detailedExplanation:
      '그렇다(そうだ)、맞다(正しい・合う)、아니다(違う)、모르다(知らない)、틀리다(間違う)。相槌でよく使います。',
  },

  // 感謝の表現 (gratitude)
  {
    id: 8,
    category: 'gratitude',
    questionJa: '感謝を表現するとき',
    question: '「ありがとうございます」のより丁寧な表現は？',
    options: [
      '고마워',
      '감사합니다',
      '괜찮아요',
      '미안해요',
    ],
    correctAnswer: 1,
    explanation: '「감사합니다」は「ありがとうございます」の最も丁寧な表現です。',
    detailedExplanation:
      '感謝の表現レベル：고마워(カジュアル・友達間)< 고마워요(丁寧)< 고맙습니다(より丁寧)< 감사합니다(最も丁寧・ビジネスや目上の人に)。初対面や公式な場面では「감사합니다」が安全です。',
  },
  {
    id: 9,
    category: 'gratitude',
    questionJa: '感謝への返答',
    question: '「どういたしまして」は韓国語で？',
    options: [
      '천만에요',
      '아니에요',
      '괜찮아요',
      '모두 정답',
    ],
    correctAnswer: 3,
    explanation: 'すべて「どういたしまして」の意味で使えます。',
    detailedExplanation:
      '천만에요(どういたしまして・やや古風)、아니에요(いいえ・謙遜)、괜찮아요(大丈夫です)はすべて感謝への返答として使えます。カジュアルには「아니야」もよく使われます。',
  },
  {
    id: 37,
    category: 'gratitude',
    questionJa: 'お礼を言う（カジュアル）',
    question: '友達に「ありがとう」と言うときは？',
    options: [
      '고마워',
      '감사합니다',
      '죄송합니다',
      '괜찮아요',
    ],
    correctAnswer: 0,
    explanation: '「고마워」は友達同士で使うカジュアルな「ありがとう」です。',
    detailedExplanation:
      '고마워(ありがとう・カジュアル)、고마워요(ありがとう・丁寧)、감사합니다(ありがとうございます・最も丁寧)。親しい間柄では「고마워」が自然です。',
  },
  {
    id: 38,
    category: 'gratitude',
    questionJa: '親切への感謝',
    question: '「親切にしてくださってありがとうございます」は？',
    options: [
      '친절하게 해주셔서 감사합니다',
      '친절해요',
      '잘 해요',
      '고마워요',
    ],
    correctAnswer: 0,
    explanation: '「친절하게 해주셔서」は「親切にしてくださって」の丁寧な表現です。',
    detailedExplanation:
      '친절하다(親切だ)、하다(する)、주시다(くださる・謙譲)、아서/어서(〜て)、감사하다(感謝する)。長い感謝表現の構造を覚えましょう。',
  },
  {
    id: 39,
    category: 'gratitude',
    questionJa: '助けてもらったとき',
    question: '「助けてくれてありがとう」は？',
    options: [
      '도와줘서 고마워',
      '도와주세요',
      '도와줄게요',
      '도와주고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「도와줘서 고마워」は「助けてくれてありがとう」です。',
    detailedExplanation:
      '돕다(助ける)、주다(くれる)、아서/어서(〜て)、고맙다(ありがたい)。より丁寧には「도와주셔서 감사합니다」を使います。',
  },
  {
    id: 40,
    category: 'gratitude',
    questionJa: '待ってくれたことへの感謝',
    question: '「待ってくれてありがとう」は？',
    options: [
      '기다려줘서 고마워',
      '기다릴게요',
      '기다려 주세요',
      '기다렸어요',
    ],
    correctAnswer: 0,
    explanation: '「기다려줘서 고마워」は「待ってくれてありがとう」という意味です。',
    detailedExplanation:
      '기다리다(待つ)、주다(くれる)、아서/어서(〜て)、고맙다(ありがたい)。基本パターン：動詞 + 아/어 줘서 고마워/감사합니다。',
  },
  {
    id: 41,
    category: 'gratitude',
    questionJa: '招待への感謝',
    question: '「招待してくださってありがとうございます」は？',
    options: [
      '초대해 주셔서 감사합니다',
      '초대할게요',
      '초대하고 싶어요',
      '초대했어요',
    ],
    correctAnswer: 0,
    explanation: '「초대해 주셔서 감사합니다」は丁寧な感謝の表現です。',
    detailedExplanation:
      '초대하다(招待する)、주시다(くださる・尊敬)、아서/어서(〜て)、감사하다(感謝する)。パーティーや食事の招待に使います。',
  },
  {
    id: 42,
    category: 'gratitude',
    questionJa: 'プレゼントへの感謝',
    question: '「素敵なプレゼントありがとう」は？',
    options: [
      '멋진 선물 고마워',
      '선물을 주세요',
      '선물을 받았어요',
      '선물이 있어요',
    ],
    correctAnswer: 0,
    explanation: '「멋진 선물 고마워」は「素敵なプレゼントありがとう」です。',
    detailedExplanation:
      '멋지다(素敵だ)、선물(プレゼント)、고맙다(ありがたい)。より丁寧には「멋진 선물 감사합니다」も使えます。',
  },
  {
    id: 43,
    category: 'gratitude',
    questionJa: 'いつもの感謝',
    question: '「いつもありがとうございます」は？',
    options: [
      '항상 감사합니다',
      '가끔 감사합니다',
      '한 번 감사합니다',
      '내일 감사합니다',
    ],
    correctAnswer: 0,
    explanation: '「항상」は「いつも」、「감사합니다」は「ありがとうございます」です。',
    detailedExplanation:
      '항상(いつも・常に)、가끔(時々)、한 번(一度)、매일(毎日)。頻度を表す副詞と一緒に使える表現です。',
  },

  // 基本フレーズ (basic)
  {
    id: 10,
    category: 'basic',
    questionJa: '謝罪の表現',
    question: '「すみません」「ごめんなさい」は？',
    options: [
      '죄송합니다',
      '감사합니다',
      '안녕하세요',
      '잘 먹겠습니다',
    ],
    correctAnswer: 0,
    explanation: '「죄송합니다」は丁寧な謝罪の表現です。',
    detailedExplanation:
      '謝罪のレベル：미안해(カジュアル)< 미안해요(丁寧)< 미안합니다(より丁寧)< 죄송합니다(最も丁寧)。ビジネスや目上の人には「죄송합니다」を使います。',
  },
  {
    id: 11,
    category: 'basic',
    questionJa: '食事の前に',
    question: '「いただきます」は韓国語で？',
    options: [
      '잘 먹겠습니다',
      '잘 먹었습니다',
      '맛있어요',
      '배불러요',
    ],
    correctAnswer: 0,
    explanation: '「잘 먹겠습니다」は食事の前に言う挨拶です。',
    detailedExplanation:
      '食事の挨拶：잘 먹겠습니다(いただきます・before)、잘 먹었습니다(ごちそうさまでした・after)。レストランなどでは省略されることも多いです。',
  },
  {
    id: 12,
    category: 'basic',
    questionJa: '質問をするとき',
    question: '「すみません、質問があります」は？',
    options: [
      '저기요, 질문 있어요',
      '여기요, 대답 있어요',
      '안녕하세요, 물어요',
      '죄송해요, 말해요',
    ],
    correctAnswer: 0,
    explanation: '「저기요」は人を呼ぶ時、「질문 있어요」は「質問があります」です。',
    detailedExplanation:
      '저기요(すみません・人を呼ぶ)、질문(質問)、있어요(あります)。レストランで店員を呼ぶ時も「저기요」を使います。',
  },
  {
    id: 44,
    category: 'basic',
    questionJa: '理解を示す',
    question: '「わかりました」は韓国語で？',
    options: [
      '알겠어요',
      '모르겠어요',
      '물어요',
      '몰라요',
    ],
    correctAnswer: 0,
    explanation: '「알겠어요」は「わかりました」「了解しました」という意味です。',
    detailedExplanation:
      '알다(知る・わかる)、모르다(知らない・わからない)、겠(意志・推測)、어요(丁寧語尾)。カジュアルには「알았어」も使います。',
  },
  {
    id: 45,
    category: 'basic',
    questionJa: 'お願いするとき',
    question: '「お願いします」は韓国語で？',
    options: [
      '부탁해요',
      '부탁드려요',
      '부탁합니다',
      '모두 정답',
    ],
    correctAnswer: 3,
    explanation: 'すべて「お願いします」の意味で、丁寧さのレベルが異なります。',
    detailedExplanation:
      '부탁하다(お願いする)。부탁해요(お願いします・普通)、부탁드려요(お願いします・謙譲)、부탁합니다(お願いします・フォーマル)。',
  },
  {
    id: 46,
    category: 'basic',
    questionJa: '許可を求める',
    question: '「〜してもいいですか？」は？',
    options: [
      '〜해도 돼요?',
      '〜해야 돼요?',
      '〜하면 안 돼요?',
      '〜할 수 없어요?',
    ],
    correctAnswer: 0,
    explanation: '「해도 돼요?」は「〜してもいいですか?」という許可を求める表現です。',
    detailedExplanation:
      '아도/어도 되다(〜してもよい)、아야/어야 되다(〜しなければならない)、으면/면 안 되다(〜してはいけない)、을/를 수 없다(〜できない)。',
  },
  {
    id: 47,
    category: 'basic',
    questionJa: '禁止を伝える',
    question: '「〜してはいけません」は？',
    options: [
      '〜하면 안 돼요',
      '〜해도 돼요',
      '〜할 수 있어요',
      '〜하고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「하면 안 돼요」は「〜してはいけません」という禁止表現です。',
    detailedExplanation:
      '으면/면 안 되다(〜してはいけない)、아도/어도 되다(〜してもよい)、을/를 수 있다(〜できる)、고 싶다(〜したい)。',
  },
  {
    id: 48,
    category: 'basic',
    questionJa: 'ちょっと待って',
    question: '「ちょっと待ってください」は？',
    options: [
      '잠깐만요',
      '잠시만요',
      '잠시만 기다려 주세요',
      '모두 정답',
    ],
    correctAnswer: 3,
    explanation: 'すべて「ちょっと待ってください」の意味で使えます。',
    detailedExplanation:
      '잠깐(ちょっと・短い時間)、잠시(少しの間)、기다리다(待つ)、주세요(ください)。잠깐만요と잠시만요は略された形で、最も自然によく使われます。',
  },
  {
    id: 49,
    category: 'basic',
    questionJa: '体調が悪いとき',
    question: '「気分が悪いです」は韓国語で？',
    options: [
      '기분이 안 좋아요',
      '몸이 안 좋아요',
      '아파요',
      '모두 正解（ニュアンス違い）',
    ],
    correctAnswer: 3,
    explanation: 'すべて体調不良を表しますが、ニュアンスが異なります。',
    detailedExplanation:
      '기분이 안 좋아요(気分が悪い・心理的)、몸이 안 좋아요(体調が悪い)、아파요(痛い・病気)。状況に応じて使い分けます。',
  },
  {
    id: 50,
    category: 'basic',
    questionJa: '好きを伝える',
    question: '「〜が好きです」は韓国語で？',
    options: [
      '〜을/를 좋아해요',
      '〜이/가 싫어요',
      '〜을/를 사랑해요',
      '〜이/가 좋아요',
    ],
    correctAnswer: 0,
    explanation: '「좋아하다」は「好きだ」という意味の動詞です。',
    detailedExplanation:
      '좋아하다(好きだ・動詞)、싫어하다(嫌いだ)、사랑하다(愛する)。「좋다」(良い・形容詞)との違いに注意：이/가 좋아요(〜が良い)。',
  },
  {
    id: 51,
    category: 'basic',
    questionJa: '確認をする',
    question: '「本当ですか？」は韓国語で？',
    options: [
      '정말이에요?',
      '진짜예요?',
      '정말요?',
      'すべて正解',
    ],
    correctAnswer: 3,
    explanation: 'すべて「本当ですか？」の意味で使えます。',
    detailedExplanation:
      '정말(本当に・やや正式)、진짜(本当に・口語)、정말요?(本当ですか?・丁寧)、진짜?(マジで?・カジュアル)。',
  },

  // ショッピング (shopping)
  {
    id: 13,
    category: 'shopping',
    questionJa: '値段を聞くとき',
    question: '「これはいくらですか？」は韓国語で？',
    options: [
      '이거 얼마예요?',
      '이거 뭐예요?',
      '이거 어디예요?',
      '이거 언제예요?',
    ],
    correctAnswer: 0,
    explanation: '「얼마예요?」は「いくらですか?」という意味です。',
    detailedExplanation:
      '이거(これ・口語)、얼마(いくら)、예요(です)。「이것(これ・書き言葉)」より「이거」の方が自然な会話表現です。',
  },
  {
    id: 14,
    category: 'shopping',
    questionJa: 'サイズを確認するとき',
    question: '「もっと大きいサイズはありますか？」は？',
    options: [
      '더 큰 사이즈 있어요?',
      '더 작은 사이즈 있어요?',
      '같은 사이즈 있어요?',
      '다른 색 있어요?',
    ],
    correctAnswer: 0,
    explanation: '「더 큰」は「もっと大きい」、「사이즈」はサイズです。',
    detailedExplanation:
      '더(もっと)、큰(大きい)、작은(小さい)、같은(同じ)、다른(違う)、색(色)。「있어요?」は「ありますか?」の意味です。',
  },
  {
    id: 52,
    category: 'shopping',
    questionJa: '試着したいとき',
    question: '「試着してもいいですか？」は？',
    options: [
      '입어 봐도 돼요?',
      '사도 돼요?',
      '입을게요',
      '입었어요',
    ],
    correctAnswer: 0,
    explanation: '「입어 봐도 돼요?」は「着てみてもいいですか?」という意味です。',
    detailedExplanation:
      '입다(着る)、보다(みる・試す)、아/어 보다(〜してみる)、아도/어도 되다(〜してもよい)。',
  },
  {
    id: 53,
    category: 'shopping',
    questionJa: '値引き交渉',
    question: '「もう少し安くなりませんか？」は？',
    options: [
      '좀 더 싸게 안 돼요?',
      '너무 비싸요',
      '할인해 주세요',
      '모두 使える',
    ],
    correctAnswer: 3,
    explanation: 'すべて値引き交渉で使える表現です。',
    detailedExplanation:
      '좀 더 싸게 안 돼요?(もう少し安くなりませんか?)、너무 비싸요(高すぎます)、할인해 주세요(割引してください)。市場などで使えます。',
  },
  {
    id: 54,
    category: 'shopping',
    questionJa: '色を尋ねる',
    question: '「他の色はありますか？」は？',
    options: [
      '다른 색 있어요?',
      '같은 색 있어요?',
      '무슨 색이에요?',
      '색이 좋아요',
    ],
    correctAnswer: 0,
    explanation: '「다른 색」は「他の色」、「있어요?」は「ありますか?」です。',
    detailedExplanation:
      '다른(他の・違う)、같은(同じ)、무슨(何の)、색(色)。색の名前：빨강(赤)、파랑(青)、노랑(黄色)、검정(黒)、하양(白)。',
  },
  {
    id: 55,
    category: 'shopping',
    questionJa: '支払い方法',
    question: '「カードで支払えますか？」は？',
    options: [
      '카드로 결제할 수 있어요?',
      '현금으로 내요',
      '카드가 있어요',
      '결제했어요',
    ],
    correctAnswer: 0,
    explanation: '「카드로」は「カードで」、「결제하다」は「決済する」です。',
    detailedExplanation:
      '카드(カード)、현금(現金)、로/으로(で・手段)、결제하다(決済する)、내다(払う)、을/를 수 있다(〜できる)。',
  },
  {
    id: 56,
    category: 'shopping',
    questionJa: 'レシートについて',
    question: '「レシートください」は？',
    options: [
      '영수증 주세요',
      '계산서 주세요',
      '영수증 있어요?',
      '영수증이 필요해요',
    ],
    correctAnswer: 0,
    explanation: '「영수증」はレシート、「주세요」は「ください」です。',
    detailedExplanation:
      '영수증(レシート・領収書)、계산서(お会計・伝票)、주세요(ください)、필요하다(必要だ)。',
  },
  {
    id: 57,
    category: 'shopping',
    questionJa: '返品・交換',
    question: '「交換できますか？」は？',
    options: [
      '교환할 수 있어요?',
      '환불할 수 있어요?',
      '바꿀 수 있어요?',
      '교환과 바꾸다は同じ',
    ],
    correctAnswer: 3,
    explanation: '「교환하다」と「바꾸다」は両方とも「交換する」の意味です。',
    detailedExplanation:
      '교환하다(交換する・フォーマル)、바꾸다(交換する・一般)、환불하다(返金する)、을/를 수 있다(〜できる)。',
  },
  {
    id: 58,
    category: 'shopping',
    questionJa: 'ポイントカード',
    question: '「ポイントカードありますか？」は？',
    options: [
      '포인트 카드 있으세요?',
      '포인트 카드 주세요',
      '포인트가 많아요',
      '카드로 내요',
    ],
    correctAnswer: 0,
    explanation: '「있으세요?」は「お持ちですか?」という尊敬語です。',
    detailedExplanation:
      '포인트(ポイント)、카드(カード)、있으세요?(お持ちですか?・尊敬)、주세요(ください)、많다(多い)。',
  },

  // レストラン (restaurant)
  {
    id: 15,
    category: 'restaurant',
    questionJa: 'メニューを頼むとき',
    question: '「メニューを見せてください」は？',
    options: [
      '메뉴판 좀 주세요',
      '물 좀 주세요',
      '계산서 주세요',
      '영수증 주세요',
    ],
    correctAnswer: 0,
    explanation: '「메뉴판」はメニュー、「좀」は少し(丁寧さを加える)です。',
    detailedExplanation:
      '메뉴판(メニュー表)、물(水)、계산서(お会計)、영수증(レシート)、좀(少し・依頼を柔らかくする)。',
  },
  {
    id: 16,
    category: 'restaurant',
    questionJa: 'おすすめを聞くとき',
    question: '「おすすめは何ですか？」は韓国語で？',
    options: [
      '추천 메뉴가 뭐예요?',
      '주문할게요',
      '계산할게요',
      '포장해 주세요',
    ],
    correctAnswer: 0,
    explanation: '「추천 메뉴」はおすすめメニューという意味です。',
    detailedExplanation:
      '추천(推薦・おすすめ)、메뉴(メニュー)、주문(注文)、계산(会計)、포장(包装・持ち帰り)。',
  },
  {
    id: 59,
    category: 'restaurant',
    questionJa: '注文するとき',
    question: '「これ2つください」は？',
    options: [
      '이거 두 개 주세요',
      '이거 두 명 주세요',
      '이거 두 잔 주세요',
      '저거 두 개 주세요',
    ],
    correctAnswer: 0,
    explanation: '「두 개」は「2つ」、物を数える時の単位です。',
    detailedExplanation:
      '이거(これ)、저거(あれ)、개(個・一般的な数え方)、잔(杯・飲み物)、명(名・人)。固有数詞：하나、둘、셋...',
  },
  {
    id: 60,
    category: 'restaurant',
    questionJa: '辛さを調整',
    question: '「辛くないのはありますか？」は？',
    options: [
      '안 매운 거 있어요?',
      '매운 거 있어요?',
      '맛있는 거 있어요?',
      '짠 거 있어요?',
    ],
    correctAnswer: 0,
    explanation: '「안 매운 거」は「辛くないもの」という意味です。',
    detailedExplanation:
      '맵다(辛い)、안(〜ない)、맛있다(美味しい)、짜다(塩辛い)、달다(甘い)、시다(酸っぱい)、쓰다(苦い)。',
  },
  {
    id: 61,
    category: 'restaurant',
    questionJa: '水を頼む',
    question: '「お水ください」は韓国語で？',
    options: [
      '물 주세요',
      '물 좀 주세요',
      '물 한 잔 주세요',
      'すべて正解',
    ],
    correctAnswer: 3,
    explanation: 'すべて「お水ください」の意味で使えます。',
    detailedExplanation:
      '물(水)、주세요(ください)、좀(少し・丁寧さを加える)、한 잔(1杯)。韓国のレストランでは水は無料が一般的です。',
  },
  {
    id: 62,
    category: 'restaurant',
    questionJa: '追加注文',
    question: '「追加で注文したいです」は？',
    options: [
      '추가로 주문하고 싶어요',
      '더 주문할게요',
      '추가요',
      'すべて使える',
    ],
    correctAnswer: 3,
    explanation: 'すべて追加注文で使える表現です。',
    detailedExplanation:
      '추가(追加)、더(もっと)、주문하다(注文する)、고 싶다(〜したい)、ㄹ/을게요(〜します・意志)。',
  },
  {
    id: 63,
    category: 'restaurant',
    questionJa: '持ち帰り',
    question: '「持ち帰りできますか？」は？',
    options: [
      '포장 돼요?',
      '포장해 주세요',
      '테이크아웃 돼요?',
      '포장とテイクアウト両方OK',
    ],
    correctAnswer: 3,
    explanation: '「포장」も「테이크아웃」も持ち帰りの意味で使えます。',
    detailedExplanation:
      '포장(包装・持ち帰り)、테이크아웃(テイクアウト)、돼요?(できますか?)、해 주세요(してください)。',
  },
  {
    id: 64,
    category: 'restaurant',
    questionJa: 'お会計',
    question: '「お会計お願いします」は？',
    options: [
      '계산해 주세요',
      '계산서 주세요',
      '여기요, 계산이요',
      'すべて使える',
    ],
    correctAnswer: 3,
    explanation: 'すべてお会計の際に使える表現です。',
    detailedExplanation:
      '계산(会計)、하다(する)、주세요(ください)、계산서(伝票)、여기요/저기요(すみません)。',
  },
  {
    id: 65,
    category: 'restaurant',
    questionJa: '別々に支払う',
    question: '「別々に会計できますか？」は？',
    options: [
      '따로따로 계산할 수 있어요?',
      '같이 계산할게요',
      '한 번에 내요',
      '카드로 내요',
    ],
    correctAnswer: 0,
    explanation: '「따로따로」は「別々に」という意味です。',
    detailedExplanation:
      '따로따로(別々に)、같이(一緒に)、한 번에(一度に)、계산하다(会計する)、을/를 수 있다(〜できる)。',
  },
  {
    id: 66,
    category: 'restaurant',
    questionJa: 'アレルギー確認',
    question: '「これに何が入っていますか？」は？',
    options: [
      '이거에 뭐가 들어 있어요?',
      '이거 뭐예요?',
      '이거 맛있어요?',
      '이거 얼마예요?',
    ],
    correctAnswer: 0,
    explanation: '「뭐가 들어 있어요?」は「何が入っていますか?」です。',
    detailedExplanation:
      '들어가다(入る)、있다(ある)、뭐(何)、이거(これ)。アレルギーがある場合は「〜 알레르기가 있어요」と伝えましょう。',
  },
  {
    id: 67,
    category: 'restaurant',
    questionJa: '予約について',
    question: '「予約は必要ですか？」は？',
    options: [
      '예약이 필요해요?',
      '예약했어요',
      '예약할게요',
      '예약하고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「필요하다」は「必要だ」という意味です。',
    detailedExplanation:
      '예약(予約)、필요하다(必要だ)、하다(する)、했어요(しました・過去)、할게요(します・意志)、고 싶다(〜したい)。',
  },

  // 緊急時 (emergency)
  {
    id: 17,
    category: 'emergency',
    questionJa: '助けを求めるとき',
    question: '「助けてください」は韓国語で？',
    options: [
      '도와주세요',
      '괜찮아요',
      '알겠어요',
      '감사합니다',
    ],
    correctAnswer: 0,
    explanation: '「도와주세요」は「助けてください」という意味です。',
    detailedExplanation:
      '도와주세요(助けてください)、살려주세요(助けて・緊急)。より緊急の場合は「살려주세요!」を使います。',
  },
  {
    id: 18,
    category: 'emergency',
    questionJa: '病院に行きたいとき',
    question: '「病院に行きたいです」は？',
    options: [
      '병원에 가고 싶어요',
      '약국에 가고 싶어요',
      '집에 가고 싶어요',
      '공항에 가고 싶어요',
    ],
    correctAnswer: 0,
    explanation: '「병원」は病院、「가고 싶어요」は「行きたいです」です。',
    detailedExplanation:
      '병원(病院)、약국(薬局)、집(家)、공항(空港)、가고 싶어요(行きたいです)。',
  },
  {
    id: 68,
    category: 'emergency',
    questionJa: '警察を呼ぶ',
    question: '「警察を呼んでください」は？',
    options: [
      '경찰을 불러 주세요',
      '경찰이에요',
      '경찰서 어디예요?',
      '112에 전화해 주세요',
    ],
    correctAnswer: 0,
    explanation: '「불러 주세요」は「呼んでください」という意味です。',
    detailedExplanation:
      '경찰(警察)、부르다(呼ぶ)、주세요(ください)、경찰서(警察署)、112(韓国の警察番号)、전화하다(電話する)。',
  },
  {
    id: 69,
    category: 'emergency',
    questionJa: '救急車',
    question: '「救急車を呼んでください」は？',
    options: [
      '구급차를 불러 주세요',
      '119에 전화해 주세요',
      '응급실로 가 주세요',
      'すべて使える',
    ],
    correctAnswer: 3,
    explanation: 'すべて救急時に使える表現です。',
    detailedExplanation:
      '구급차(救急車)、119(韓国の救急・消防番号)、응급실(救急室)、부르다(呼ぶ)、전화하다(電話する)、가다(行く)。',
  },
  {
    id: 70,
    category: 'emergency',
    questionJa: '痛みを伝える',
    question: '「ここが痛いです」は韓国語で？',
    options: [
      '여기가 아파요',
      '여기 좋아요',
      '아픈 거 있어요',
      '병원이에요',
    ],
    correctAnswer: 0,
    explanation: '「여기가 아파요」は「ここが痛いです」です。',
    detailedExplanation:
      '여기(ここ)、아프다(痛い)、아파요(痛いです)、배가 아파요(お腹が痛い)、머리가 아파요(頭が痛い)。',
  },
  {
    id: 71,
    category: 'emergency',
    questionJa: '紛失物',
    question: '「財布を失くしました」は？',
    options: [
      '지갑을 잃어버렸어요',
      '지갑이 없어요',
      '지갑을 찾아요',
      '지갑과 없어요は同じ',
    ],
    correctAnswer: 0,
    explanation: '「잃어버리다」は「失くす」という動詞です。',
    detailedExplanation:
      '지갑(財布)、잃어버리다(失くす)、없다(ない)、찾다(探す・見つける)。「없어요」は状態、「잃어버렸어요」は行為を表します。',
  },
  {
    id: 72,
    category: 'emergency',
    questionJa: '薬が必要',
    question: '「薬をください」は韓国語で？',
    options: [
      '약을 주세요',
      '약국 어디예요?',
      '약을 먹었어요',
      '약이 있어요',
    ],
    correctAnswer: 0,
    explanation: '「약을 주세요」は「薬をください」です。',
    detailedExplanation:
      '약(薬)、주세요(ください)、약국(薬局)、먹다(飲む・食べる)、있다(ある)。薬は「먹다(食べる)」を使います。',
  },
  {
    id: 73,
    category: 'emergency',
    questionJa: '道に迷った',
    question: '「道に迷いました」は？',
    options: [
      '길을 잃었어요',
      '길을 몰라요',
      '여기가 어디예요?',
      'すべて使える',
    ],
    correctAnswer: 3,
    explanation: 'すべて道に迷った時に使える表現です。',
    detailedExplanation:
      '길(道)、잃다(失う)、모르다(わからない)、여기(ここ)、어디(どこ)。状況に応じて使い分けます。',
  },
  {
    id: 74,
    category: 'emergency',
    questionJa: '盗難被害',
    question: '「盗まれました」は韓国語で？',
    options: [
      '도난당했어요',
      '도둑맞았어요',
      '훔쳐갔어요',
      '도난とタオドゥㇰは同じ',
    ],
    correctAnswer: 3,
    explanation: '「도난당하다」と「도둑맞다」は両方とも「盗まれる」の意味です。',
    detailedExplanation:
      '도난(盗難)、당하다(被る)、도둑(泥棒)、맞다(受ける・被る)、훔치다(盗む)。警察に届ける時に使います。',
  },
  {
    id: 75,
    category: 'emergency',
    questionJa: '大使館に連絡',
    question: '「大使館の電話番号を教えてください」は？',
    options: [
      '대사관 전화번호 좀 가르쳐 주세요',
      '대사관 어디예요?',
      '전화해 주세요',
      '전화번호가 뭐예요?',
    ],
    correctAnswer: 0,
    explanation: '「가르쳐 주세요」は「教えてください」という意味です。',
    detailedExplanation:
      '대사관(大使館)、전화번호(電話番号)、가르치다(教える)、주세요(ください)、좀(少し・丁寧さを加える)。',
  },

  // 数字 (numbers)
  {
    id: 19,
    category: 'numbers',
    questionJa: '韓国語の数字',
    question: '「1, 2, 3」の固有数詞は？',
    options: [
      '하나, 둘, 셋',
      '일, 이, 삼',
      '한, 두, 세',
      '일, 둘, 삼',
    ],
    correctAnswer: 0,
    explanation: '固有数詞は「하나, 둘, 셋」です。',
    detailedExplanation:
      '韓国語には2つの数詞システムがあります：固有数詞(하나, 둘, 셋...)と漢数詞(일, 이, 삼...)。物を数える時は固有数詞を使います。',
  },
  {
    id: 20,
    category: 'numbers',
    questionJa: '時間を言うとき',
    question: '「3時」は韓国語で？',
    options: [
      '세 시',
      '삼 시',
      '셋 시',
      '석 시',
    ],
    correctAnswer: 0,
    explanation: '時間の「時」には固有数詞を使い、「세 시」となります。',
    detailedExplanation:
      '時間表現：時(시)には固有数詞、分(분)には漢数詞を使います。例：3時30分 = 세 시 삼십 분。',
  },
  {
    id: 76,
    category: 'numbers',
    questionJa: '漢数詞の基本',
    question: '「10, 20, 30」の漢数詞は？',
    options: [
      '십, 이십, 삼십',
      '열, 스물, 서른',
      '일, 이, 삼',
      '하나, 둘, 셋',
    ],
    correctAnswer: 0,
    explanation: '漢数詞は「십(10)、이십(20)、삼십(30)」です。',
    detailedExplanation:
      '漢数詞：일(1)、이(2)、삼(3)、사(4)、오(5)、육(6)、칠(7)、팔(8)、구(9)、십(10)。お金や電話番号に使います。',
  },
  {
    id: 77,
    category: 'numbers',
    questionJa: '固有数詞の応用',
    question: '「4個、5個、6個」は韓国語で？',
    options: [
      '네 개, 다섯 개, 여섯 개',
      '사 개, 오 개, 육 개',
      '넷 개, 다섯 개, 여섯 개',
      '네 명, 다섯 명, 여섯 명',
    ],
    correctAnswer: 0,
    explanation: '固有数詞 + 개(個)で物を数えます。「네 개」が正しい形です。',
    detailedExplanation:
      '固有数詞：하나(1)、둘(2)、셋(3)、넷(4)、다섯(5)、여섯(6)。単位と一緒に使う時：한、두、세、네に変化します。',
  },
  {
    id: 78,
    category: 'numbers',
    questionJa: '年齢を言う',
    question: '「20歳です」は韓国語で？',
    options: [
      '스무 살이에요',
      '이십 살이에요',
      '스물 살이에요',
      'スムとスムルは同じ',
    ],
    correctAnswer: 3,
    explanation: '「스무 살」と「스물 살」は両方とも使えます。',
    detailedExplanation:
      '年齢には固有数詞を使用：한 살(1歳)、두 살(2歳)...스무 살/스물 살(20歳)、서른 살(30歳)。歳は「살」を使います。',
  },
  {
    id: 79,
    category: 'numbers',
    questionJa: 'お金の言い方',
    question: '「5000ウォン」は韓国語で？',
    options: [
      '오천 원',
      '다섯천 원',
      '오천천 원',
      '다섯 원',
    ],
    correctAnswer: 0,
    explanation: 'お金には漢数詞を使います。「오천(5000) 원(ウォン)」です。',
    detailedExplanation:
      '漢数詞でお金を数える：백(100)、천(1000)、만(10000)。例：삼천 원(3000ウォン)、만 원(10000ウォン)。',
  },
  {
    id: 80,
    category: 'numbers',
    questionJa: '日付の言い方',
    question: '「3月15日」は韓国語で？',
    options: [
      '삼월 십오일',
      '세월 열다섯일',
      '삼월 열다섯일',
      '세월 십오일',
    ],
    correctAnswer: 0,
    explanation: '月と日には漢数詞を使います。「삼월(3月) 십오일(15日)」です。',
    detailedExplanation:
      '日付は漢数詞：일월(1月)、이월(2月)、삼월(3月)...십이월(12月)。일(日)も漢数詞：일일(1日)、이일(2日)...삼십일일(31日)。',
  },
  {
    id: 81,
    category: 'numbers',
    questionJa: '人数を数える',
    question: '「3人です」は韓国語で？',
    options: [
      '세 명이에요',
      '삼 명이에요',
      '셋 명이에요',
      '석 명이에요',
    ],
    correctAnswer: 0,
    explanation: '人数には固有数詞を使い、「세 명」となります。',
    detailedExplanation:
      '人数：한 명(1人)、두 명(2人)、세 명(3人)、네 명(4人)...명(名)は人を数える単位です。',
  },
  {
    id: 82,
    category: 'numbers',
    questionJa: '電話番号',
    question: '電話番号「010-1234-5678」はどう読む？',
    options: [
      '공일공 일이삼사 오육칠팔',
      '영일영 하나둘셋넷 다섯여섯일곱여덟',
      '零一零 一二三四 五六七八',
      '공일공の공はゼロ',
    ],
    correctAnswer: 0,
    explanation: '電話番号は漢数詞で読み、0は「공(ゼロ)」と読みます。',
    detailedExplanation:
      '電話番号には漢数詞使用。0は「공」または「영」。공(コン)の方が一般的。例：010(공일공)、119(일일구)。',
  },
  {
    id: 83,
    category: 'numbers',
    questionJa: '何時何分',
    question: '「7時30分」は韓国語で？',
    options: [
      '일곱 시 삼십 분',
      '칠 시 삼십 분',
      '일곱 시 서른 분',
      '칠 시 서른 분',
    ],
    correctAnswer: 0,
    explanation: '時(시)は固有数詞、分(분)は漢数詞を使います。',
    detailedExplanation:
      '時間：한 시(1時)、두 시(2時)...열두 시(12時)。分：일 분(1分)、이 분(2分)...육십 분(60分)。半：삼십 분 = 반。',
  },
  {
    id: 84,
    category: 'numbers',
    questionJa: '階数を言う',
    question: '「2階」は韓国語で？',
    options: [
      '이 층',
      '두 층',
      '이층 어느쪽も使える',
      '二階',
    ],
    correctAnswer: 0,
    explanation: '階数には漢数詞を使い、「이 층(2階)」となります。',
    detailedExplanation:
      '階数：일 층(1階)、이 층(2階)、삼 층(3階)...層(층)。地下は지하(地下)：지하 일 층(地下1階)。',
  },
  {
    id: 85,
    category: 'numbers',
    questionJa: '回数を数える',
    question: '「2回、3回」は韓国語で？',
    options: [
      '두 번, 세 번',
      '이 번, 삼 번',
      '둘 번, 셋 번',
      '두 회, 세 회',
    ],
    correctAnswer: 0,
    explanation: '回数には固有数詞を使い、単位は「번(回)」です。',
    detailedExplanation:
      '回数：한 번(1回)、두 번(2回)、세 번(3回)...번(回・度)。「회(回)」も使えますが、口語では「번」が一般的です。',
  },
  {
    id: 86,
    category: 'numbers',
    questionJa: 'パーセント',
    question: '「50パーセント」は韓国語で？',
    options: [
      '오십 퍼센트',
      '쉰 퍼센트',
      '오십 프로',
      '오십퍼센트と프로両方使える',
    ],
    correctAnswer: 3,
    explanation: '「퍼센트」と「프로」は両方とも使えます。',
    detailedExplanation:
      'パーセント：퍼센트(パーセント)、프로(%)。両方とも一般的。漢数詞で数を表します：십 프로(10%)、백 프로(100%)。',
  },
];

// カテゴリー別にクイズを取得する関数（ランダムにシャッフル）
export const getQuizzesByCategory = (category: string): Question[] => {
  const filtered = quizQuestions.filter((q) => q.category === category);
  // 同じ問題が続けて出ないようにランダムにシャッフル
  return [...filtered].sort(() => 0.5 - Math.random());
};

// ランダムなクイズを取得する関数
export const getRandomQuizzes = (count: number): Question[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// カテゴリー情報
export const categoryInfo = {
  travel: { name: '旅行会話', icon: '🗺️', color: '#9AC4B3' },
  daily: { name: '日常会話', icon: '💬', color: '#85C9B7' },
  gratitude: { name: '感謝の表現', icon: '💝', color: '#F99B85' },
  basic: { name: '基本フレーズ', icon: '✨', color: '#7DB49E' },
  shopping: { name: 'ショッピング', icon: '🛍️', color: '#B8D4C8' },
  restaurant: { name: 'レストラン', icon: '🍜', color: '#D4E4DD' },
  emergency: { name: '緊急時', icon: '🚨', color: '#FBB8A8' },
  numbers: { name: '数字', icon: '🔢', color: '#A8D9CC' },
};
