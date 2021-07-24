import React from 'react';

function Slides({slides}) {

  const [step, setStep] = React.useState(0);
  const allSlides = slides;
  const totalSlides = slides.length - 1;

  console.log(totalSlides);

  const onNext = () => {
    const newStep = step + 1;
    setStep(newStep);
  }

  const onPrev = () => {
    const newStep = step - 1;

    if (step > 0)
      setStep(newStep);
  }

  const onRestart = () => {
    setStep(0);
  }

  const getContent = () => {
    const data = allSlides[step];

    return <div id="slide" className="card text-center">
                  <h1 data-testid="title">{data.title}</h1>
                  <p data-testid="text">{data.text}</p>
            </div>
  
  }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={() => onRestart()} disabled={step === 0} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={() => onPrev()} disabled={step === 0} data-testid="button-prev" className="small">Prev</button>
                <button onClick={() => onNext()} disabled={step >= totalSlides} data-testid="button-next" className="small">Next</button>
            </div>
          {getContent()}
        </div>
    );

}

export default Slides;
