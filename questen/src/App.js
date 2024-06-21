import './app.css';
import { useState } from "react";

const questions = [
  { 
    title: 'React це',
    variants: ['бібліотека','фреймворк','програма'],
    correct: 0,
  },
  {
    title: 'Компонент це',
    variants: ['програма','частина програми','стан'],
    correct: 1,
  },
  {
    title: 'JSX це',
    variants: ['функція','простий html','стан'],
    correct: 1,
  },
  {
    title: 'React це',
    variants: ['бібліотека','фреймворк','стан'],
    correct: 0,
  },
];

function Result({ correct, onRetry }) {
  return (
    <div className="result">
     <div className='iten'>   
     <h1>Ви відгадали {correct} із {questions.length}</h1>
<img src={`${process.env.PUBLIC_URL}/result.png`} alt="Result" />

     <button onClick={onRetry}>Спробувати ще раз</button>
     </div>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const progress = Math.round((step / questions.length) * 100);

  return (
    <div className="game">
      <div className="content">
        <div className="content2">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  const onRetry = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="App">
      {step < questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} onRetry={onRetry} />
      )}
    </div>
  );
}

export default App;