import './style.css'
import BlackIncNano from './BlackIncNano.svg'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <img src="./BlackIncNano.svg" class="logo vanilla" alt="BlackInc Nano" />
    <h1>BlackInk Nano</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
