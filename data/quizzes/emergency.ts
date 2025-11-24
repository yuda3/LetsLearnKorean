import { Question } from '../../types';

// emergency - advanced level
export const emergencyQuestions: Question[] = [
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
  }
];
