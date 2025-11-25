import { vliveQuestions } from './vlive';
import { kpopGratitudeQuestions } from './gratitude';
import { reactionsQuestions } from './reactions';
import { fanLetterQuestions } from './fanLetter';
import { snsQuestions } from './sns';
import { concertQuestions } from './concert';
import { slangQuestions } from './slang';
import { kpopTermsQuestions } from './kpopTerms';
import { Question } from '../../../types';

export const kpopQuestions: Question[] = [
  ...vliveQuestions,           // 30問
  ...kpopGratitudeQuestions,   // 25問
  ...reactionsQuestions,       // 20問
  ...fanLetterQuestions,       // 25問
  ...snsQuestions,             // 15問
  ...concertQuestions,         // 15問
  ...slangQuestions,           // 10問
  ...kpopTermsQuestions        // 10問
  // 合計: 150問
];

export {
  vliveQuestions,
  kpopGratitudeQuestions,
  reactionsQuestions,
  fanLetterQuestions,
  snsQuestions,
  concertQuestions,
  slangQuestions,
  kpopTermsQuestions
};
