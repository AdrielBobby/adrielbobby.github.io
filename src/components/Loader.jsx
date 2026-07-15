import { useEffect, useRef, useState } from 'react';

const COMMAND         = 'C:\\Users\\Adriel> load portfolio';
const START_DELAY     = 300;
const CHAR_DELAY      = 50;
const POST_TYPING_WAIT = 300;

const FRAGMENTS = [
  // Top Left zone
  { clip: 'polygon(0% 0%, 54% 0%, 48% 22%, 22% 27%, 0% 23%)', tx: '-20vw', ty: '-130vh', rot: '-15deg', delay: '10ms' },
  { clip: 'polygon(54% 0%, 72% 0%, 78% 28%, 48% 22%)', tx: '15vw', ty: '-140vh', rot: '22deg', delay: '0ms' },
  { clip: 'polygon(72% 0%, 100% 0%, 100% 24%, 78% 28%)', tx: '40vw', ty: '-120vh', rot: '40deg', delay: '20ms' },
  // Mid-Top zone
  { clip: 'polygon(0% 23%, 22% 27%, 27% 51%, 0% 48%)', tx: '-110vw', ty: '-10vh', rot: '-30deg', delay: '30ms' },
  { clip: 'polygon(22% 27%, 48% 22%, 52% 46%, 27% 51%)', tx: '-40vw', ty: '-80vh', rot: '15deg', delay: '5ms' },
  { clip: 'polygon(48% 22%, 78% 28%, 76% 53%, 52% 46%)', tx: '50vw', ty: '-70vh', rot: '-25deg', delay: '15ms' },
  { clip: 'polygon(78% 28%, 100% 24%, 100% 47%, 76% 53%)', tx: '120vw', ty: '-5vh', rot: '35deg', delay: '40ms' },
  // Mid-Bottom zone
  { clip: 'polygon(0% 48%, 27% 51%, 24% 72%, 0% 77%)', tx: '-125vw', ty: '15vh', rot: '-10deg', delay: '25ms' },
  { clip: 'polygon(27% 51%, 52% 46%, 47% 78%, 24% 72%)', tx: '-30vw', ty: '60vh', rot: '-40deg', delay: '10ms' },
  { clip: 'polygon(52% 46%, 76% 53%, 73% 74%, 47% 78%)', tx: '40vw', ty: '55vh', rot: '20deg', delay: '20ms' },
  { clip: 'polygon(76% 53%, 100% 47%, 100% 76%, 73% 74%)', tx: '115vw', ty: '25vh', rot: '-25deg', delay: '35ms' },
  // Bottom zone
  { clip: 'polygon(0% 77%, 24% 72%, 28% 100%, 0% 100%)', tx: '-40vw', ty: '110vh', rot: '30deg', delay: '50ms' },
  { clip: 'polygon(24% 72%, 47% 78%, 54% 100%, 28% 100%)', tx: '-10vw', ty: '120vh', rot: '-15deg', delay: '15ms' },
  { clip: 'polygon(47% 78%, 73% 74%, 100% 76%, 100% 100%, 54% 100%)', tx: '30vw', ty: '130vh', rot: '45deg', delay: '0ms' }
];

export default function Loader({ onDone, onShatterComplete }) {
  const [typed, setTyped] = useState('');
  const [cursorOn, setCursorOn] = useState(true);
  const [glitching, setGlitching] = useState(false);
  const [shattering, setShattering] = useState(false);

  const doneFiredRef = useRef(false);

  useEffect(() => {
    let charIndex = 0;
    let typingId = null;

    const startTyping = () => {
      typingId = setInterval(() => {
        charIndex++;
        setTyped(COMMAND.slice(0, charIndex));

        if (charIndex >= COMMAND.length) {
          clearInterval(typingId);

          setTimeout(() => {
            if (!doneFiredRef.current) {
              doneFiredRef.current = true;
              if (onDone) onDone();
              
              setGlitching(true);
              
              setTimeout(() => {
                setGlitching(false);
                setShattering(true);
                
                setTimeout(() => {
                  if (onShatterComplete) onShatterComplete();
                }, 400);
              }, 300);
            }
          }, POST_TYPING_WAIT);
        }
      }, CHAR_DELAY);
    };

    const startDelayId = setTimeout(startTyping, START_DELAY);

    return () => {
      clearTimeout(startDelayId);
      clearInterval(typingId);
    };
  }, [onDone, onShatterComplete]);

  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`loader-overlay ${shattering ? 'shattering' : ''}`}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {FRAGMENTS.map((poly, i) => (
        <div
          key={i}
          className="loader-fragment"
          style={{
            '--clip': poly.clip,
            '--tx': poly.tx,
            '--ty': poly.ty,
            '--rot': poly.rot,
            '--delay': poly.delay,
          }}
        />
      ))}
      <div className={`loader-terminal ${glitching ? 'glitching' : ''}`}>
        <span className="loader-prompt">{typed}</span>
        <span className={`loader-cursor ${cursorOn ? 'visible' : ''}`}>█</span>
      </div>
    </div>
  );
}
