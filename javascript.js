// コンピュータとじゃんけんをするプログラム
// 1人のプレイヤーが5点に達したらゲームの勝者を発表

// INPUT
// プレイヤーの勝利数を記録する数字：playerScore
// コンピュータの勝利数を記録する数字：computerScore
// プレイヤーの選択した手を保存する数字：playerChoice
// コンピュータの選択した手を保存する数字：computerChoice

// DOM
// ゲームの結果を表示するsection要素：sec
// じゃんけんのボタン一覧：buttons
// 現在のスコアを表示するdiv要素：result
// ラウンドの結果を表示するdiv要素：matchResult
// 次のゲームを開始するボタン：resetButton
// プレイヤーとコンピュータの手を表示するdiv要素：battleText

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// ランダムにグー、チョキ、パーを返す関数 getComputerChoice
// グー：０、チョキ：１、パー：２とする

// Parameters
// 下限の数字min
// 上限の数字max

// Return
// ０～２のランダムな数字

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// プレイヤーが出す手を入力する関数 getPlayerChoice

// 押されたボタンのidで判別する
// SWITCH：入力に応じて返り値を与える
// グー：０
// チョキ：１
// パー：２
// DEFAULT
// 無効な入力と表示する

// INPUT
// なし

// Parameters
// 押されたボタンのid

// Return
// 押されたボタンに対応する０～２の数字

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// 自分とコンピュータの出した手を表示する関数 showEachHand
// SWITCH：自分の選択した手の数値によって文字列を代入する
// CASE０：選択した手の文字列にグーを代入
// CASE１：選択した手の文字列にチョキを代入
// CASE２：選択した手の文字列にパーを代入
// END
// SWITCH：コンピュータの選択した手の数値によって文字列を代入する
// CASE０：選択した手の文字列にグーを代入
// CASE１：選択した手の文字列にチョキを代入
// CASE２：選択した手の文字列にパーを代入
// END
// 自分とコンピュータの出した手の文字列を表示する

// INPUT
// プレイヤーの選択した手の文字列
//  コンピュータの選択した手の文字列

// Parameters
// 自分の選択した手の数値
// コンピュータの選択した手の数値

//Return
//なし

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// スコアを更新し、じゃんけんの勝者を返す関数 getRoundWinner

// プレイヤーから得た数値とコンピュータから得た数値を比べる
// SWITCH
// 両者の数値の合計でケースを分ける
// CASE 1：
// IF
// プレイヤーが０を選択している：playerScoreを１増加させてプレイヤー名を返す
// プレイヤーが０を選択していない：computerScoreを１増加させてコンピュータ名を返す
// IFEND
// CASE 2：
// IF
// プレイヤーが２を選択している：playerScoreを１増加させてプレイヤー名を返す
// プレイヤーが２を選択していない：computerScoreを１増加させてコンピュータ名を返す
// IFEND
// CASE 3：
// IF
// プレイヤーが１を選択している：playerScoreを１増加させてプレイヤー名を返す
// プレイヤーが１を選択していない：computerScoreを１増加させてコンピュータ名を返す
// IFEND
// DEFAULT：エラー表記

// Parameters
// プレイヤーが選択した手：playerChoice
// コンピュータが選択した手：computerChoice

// Return
// ラウンドの勝者の名前

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// ゲーム全体の勝者を返す関数 getGameWinner

// どちらかが5点に達したときに行う
// 三項演算子でPlayerScoreとcomputerScoreを比べる
// 勝者の名前を返す

// Parameters
// プレイヤーのスコア：playerScore
// コンピュータのスコア：computerScore

// Return
// ゲームの勝者の名前

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;
let computerChoice = 0;

const sec = document.querySelector("section");

const buttons = document.querySelectorAll("button");

const result = document.createElement("div");
result.classList.add("result");
result.textContent = `現在のスコア：あなた → ${playerScore} コンピュータ → ${computerScore}`;

const matchResult = document.createElement("div");
matchResult.classList.add("matchResult");

const resetButtonCase = document.createElement("div");
resetButtonCase.classList.add("resetButtonCase");

const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Next Game";
resetButtonCase.appendChild(resetButton);

const battleText = document.createElement("div");
battleText.classList.add("battleText");

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerChoice(id) {
  switch (id) {
    case "rock":
      console.log("グーを選択しました");
      return 0;
    case "scissors":
      console.log("チョキを選択しました");
      return 1;

    case "paper":
      console.log("パーを選択しました");
      return 2;

    default:
      console.log("無効な入力です");
  }
}

function showEachHand(playerChoice, computerChoice) {
  let playerHand;
  let computerHand;
  const you = document.createElement("span");
  you.textContent = "あなた：";
  const playerSpan = document.createElement("span");
  playerSpan.classList.add("playerHand");
  const vs = document.createElement("p");
  vs.classList.add("vs");
  vs.textContent = "vs";
  const computer = document.createElement("span");
  computer.textContent = "コンピュータ："
  const computerSpan = document.createElement("span");
  computerSpan.classList.add("computerHand");

  battleText.textContent = "";

  switch (playerChoice) {
    case 0:
      playerHand = "グー";
      break;
    case 1:
      playerHand = "チョキ";
      break;
    case 2:
      playerHand = "パー";
      break;
  }
  switch (computerChoice) {
    case 0:
      computerHand = "グー";
      break;
    case 1:
      computerHand = "チョキ";
      break;
    case 2:
      computerHand = "パー";
      break;
  }
  
  playerSpan.textContent = `${playerHand}`;
  computerSpan.textContent = `${computerHand}`;
  switch (playerHand) {
    case "グー":
      playerSpan.style.color = "rgb(131, 211, 204)";
      break;
    case "チョキ":
      playerSpan.style.color = "yellow";
      break;
    case "パー":
      playerSpan.style.color = "rgb(214, 93, 93)";
      break;
  }
  switch (computerHand) {
    case "グー":
      computerSpan.style.color = "rgb(131, 211, 204)";
      break;
    case "チョキ":
      computerSpan.style.color = "yellow";
      break;
    case "パー":
      computerSpan.style.color = "rgb(214, 93, 93)";
      break;
  }

  battleText.appendChild(you);
  battleText.appendChild(playerSpan);
  battleText.appendChild(vs);
  battleText.appendChild(computer);
  battleText.appendChild(computerSpan);
  sec.appendChild(battleText);
}

function getRoundWinner(playerChoice, computerChoice) {
  let winner;
  switch (playerChoice + computerChoice) {
    case 1:
      if (playerChoice === 0) {
        playerScore += 1;
        winner = "あなた";
        return winner;
      } else {
        computerScore += 1;
        winner = "コンピュータ";
        return winner;
      }

    case 2:
      if (playerChoice === 2) {
        playerScore += 1;
        winner = "あなた";
        return winner;
      } else {
        computerScore += 1;
        winner = "コンピュータ";
        return winner;
      }

    case 3:
      if (playerChoice === 1) {
        playerScore += 1;
        winner = "あなた";
        return winner;
      } else {
        computerScore += 1;
        winner = "コンピュータ";
        return winner;
      }

    default:
      console.log("エラー");
  }
}

function getGameWinner(playerScore, computerScore) {
  let winnerName = playerScore > computerScore ? "あなた" : "コンピュータ";
  return winnerName;
}

//ボタンを押したら、ラウンドが始まる
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    //プレイヤーの手を保存
    playerChoice = getPlayerChoice(e.target.id);
    // コンピュータの手を保存
    computerChoice = getComputerChoice(0, 2);
    //プレイヤーとコンピュータの手を表示
    showEachHand(playerChoice, computerChoice);
    // あいこかを判定
    if (playerChoice === computerChoice) {
      matchResult.textContent = "あいこです。";
      sec.appendChild(matchResult);
      sec.appendChild(result);
    } else {
      //じゃんけんの結果を入力、スコアを更新
      matchResult.textContent = `「${getRoundWinner(playerChoice, computerChoice)}」の勝利！`;
      // どちらかが先に五点になった場合、勝者を発表
      if (playerScore === 5 || computerScore === 5) {
        result.remove();
        battleText.remove();
        buttons.forEach((button) => (button.disabled = true));
        matchResult.textContent = `${playerScore} 対 ${computerScore} で 勝者 → 「${getGameWinner(playerScore, computerScore)}」`;
        sec.appendChild(resetButtonCase);
      } else {
        // 結果を出力
        result.textContent = `現在のスコア：あなた → ${playerScore} コンピュータ → ${computerScore}`;
        sec.appendChild(matchResult);
        sec.appendChild(result);
      }
    }
  }),
);

// リセットするとすべての値がリセットされ、新たなゲームが始まる
resetButton.addEventListener("click", () => {
  buttons.forEach((button) => (button.disabled = false));
  playerScore = 0;
  computerScore = 0;
  playerChoice = 0;
  computerChoice = 0;
  matchResult.remove();
  resetButtonCase.remove();
  result.textContent = `現在のスコア：あなた → ${playerScore} コンピュータ → ${computerScore}`;
});
