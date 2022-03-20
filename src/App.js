import { useState } from 'react';

// components
import Toggle from 'react-toggle'

// data
import { vocabulary } from './vocabulary'

function App() {
  const { part1, part2, part3 } = vocabulary;

  const [part1Text, setPart1Text] = useState('');
  const [part2Text, setPart2Text] = useState('');
  const [part3Text, setPart3Text] = useState('');

  function retrievePhrases() {
    setPart1Text( part1[0].english );
    setPart2Text( part2[0].english );
    setPart3Text( part3[0].english );
  }

  function printPhrases() {
    setTimeout(()=> {console.log( `${ part1Text } ${ part2Text } ${ part3Text }` )}, 2000)
  }

  return (
    <div className="h-screen w-full text-center p-6 flex flex-col">
      <header className="mb-5">
        <h1 className="text-xl font-bold">Winter 2022 Speed Spanish</h1>
        <h2>Week 1 - The Magic Circle</h2>
      </header>
      <main className="w-1/2 flex flex-col justify-center align-middle flex-1">
        <div className="border-2 px-6 py-8">
          <label className="flex w-full align-middle justify-center mb-4">
            <span>English</span>
              <Toggle
                icons={false}
                className="mx-3"
              />
              <span>Español</span>
            </label>
          <button
            className="
            rounded-full
            bg-cyan-500
            hover:bg-cyan-600
            px-6 py-2
            text-white
            border-2
            border-cyan-700
            mb-4
            "
            onClick={retrievePhrases}
          >
            New phrase!
          </button>
          <div className="w-full flex justify-center">
            <span>Part 1</span>
            <span>Part 2</span>
            <span>Part 3</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
