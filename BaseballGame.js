<html>
  <head>
    <style>
      .container {
        width: 500px;
        margin: 0 auto;
        text-align: center;
      }
      .inning {
        margin-top: 20px;
      }
      .strike-counter {
        font-size: 36px;
        margin-top: 20px;
      }
      .ball-counter {
        font-size: 36px;
        margin-top: 20px;
      }
      .out-counter {
        font-size: 36px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Baseball Game</h1>
      <div class="inning">Inning: <span id="inning">1</span></div>
      <div class="strike-counter">Strikes: <span id="strikes">0</span></div>
      <div class="ball-counter">Balls: <span id="balls">0</span></div>
      <div class="out-counter">Outs: <span id="outs">0</span></div>
      <button id="pitch-button">Pitch</button>
    </div>
    <script>
      const inningSpan = document.getElementById("inning");
      const strikesSpan = document.getElementById("strikes");
      const ballsSpan = document.getElementById("balls");
      const outsSpan = document.getElementById("outs");
      const pitchButton = document.getElementById("pitch-button");
      let inning = 1;
      let strikes = 0;
      let balls = 0;
      let outs = 0;
      pitchButton.addEventListener("click", function() {
        const result = Math.random();
        if (result < 0.25) {
          strikes++;
        } else if (result < 0.5) {
          balls++;
        } else {
          outs++;
        }
        strikesSpan.innerHTML = strikes;
        ballsSpan.innerHTML = balls;
        outsSpan.innerHTML = outs;
        if (strikes === 3) {
          strikes = 0;
          balls = 0;
          outs++;
        }
        if (balls === 4) {
          strikes = 0;
          balls = 0;
        }
        if (outs === 3) {
          strikes = 0;
          balls = 0;
          outs = 0;
          inning++;
        }
        inningSpan.innerHTML = inning;
      });
    </script>
  </body>
</html>
