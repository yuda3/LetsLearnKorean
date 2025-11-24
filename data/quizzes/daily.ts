import { Question } from '../../types';

// daily - beginner level
export const dailyQuestions: Question[] = [
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
  }
];
