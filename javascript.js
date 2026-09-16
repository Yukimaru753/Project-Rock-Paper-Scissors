// コンピュータとじゃんけんをするプログラム
// 1ゲーム5ラウンドで最後に勝敗を発表する

// INPUT
// ラウンドを記録する数字：count
// プレイヤーの勝利数を記録する数字：playerScore
// コンピュータの勝利数を記録する数字：computerScore
// プレイヤーの選択した手を保存する数字：playerChoice
// コンピュータの選択した手を保存する数字：computerChoice
// あいこかどうかを判別するブール：drawCheck

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

// プロンプトでrock, scissors, paperのうち一つを入力
// SWITCH：入力に応じて返り値を与える
// グー：０
// チョキ：１
// パー：２
// DEFAULT
// 無効な入力と表示する

// input
// プレイヤーの入力した文字列 playerInput

// Parameters
// なし

// Return
// ０～２のランダムな数字

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

// あいこかを判別して、あいこならもう一度じゃんけんを行う
// あいこでないなら勝敗判定にうつる

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// じゃんけんの勝敗を判定する関数 judgeRoundWinner

// プレイヤーから得た数値とコンピュータから得た数値を比べる
// SWITCH
// 両者の数値の合計でケースを分ける
// CASE 1：
// IF
// プレイヤーが０を選択している：playerScoreを１増加させる
// プレイヤーが０を選択していない：computerScoreを１増加させる
// IFEND
// CASE 2：
// IF
// プレイヤーが２を選択している：playerScoreを１増加させる
// プレイヤーが２を選択していない：computerScoreを１増加させる
// IFEND
// CASE 3：
// IF
// プレイヤーが１を選択している：playerScoreを１増加させる
// プレイヤーが１を選択していない：computerScoreを１増加させる
// IFEND
// DEFAULT：エラー表記

// Parameters
// プレイヤーから得た数値
// コンピュータから得た数値

// Return
// なし

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// ラウンドを記録する

// WHILE
// ラウンド終了時にcountを1増加させる
// round < 5まで続ける
// WHILEEND

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

// ゲーム全体の勝者を返す関数 getGameWinner

// 5ラウンド終了後に行う
// 三項演算子でPlayerScoreとcomputerScoreを比べる
// 勝者の名前を返す

// INPUT
// 文字列 winnerName

// Parameters
// playerScore
// computerScore

// Return
// 勝者の名前の文字列

// ーーーーーーーーーーーーーーーーーーーーーーーーーー

let round = 0; //ラウンド数を記録する
let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;
let computerChoice = 0;
let drawCheck = true;

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerChoice() {
  let playerInput = prompt(
    "あなたの手を入力してください/n rock, scissors, paper",
    "入力されていません",
  );
  switch (playerInput.toLowerCase()) {
    case "rock":
      console.log("グーを選択しました");
      return 0;
      break;
    case "scissors":
      console.log("チョキを選択しました");
      return 1;
      break;
    case "paper":
      console.log("パーを選択しました");
      return 2;
      break;
    default:
      console.log("無効な入力です");
  }
}

function showEachHand(playerChoice, computerChoice) {
  let playerHand;
  let computerHand;
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
  console.log(`あなた → 「${playerHand}」 コンピュータ → 「${computerHand}」`);
}

function judgeRoundWinner(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
      case 1:
        if (playerChoice === 0) {
          playerScore += 1;
          console.log("あなたの勝利です");
        } else {
          computerScore += 1;
          console.log("コンピュータの勝利です");
        }
        break;
      case 2:
        if (playerChoice === 2) {
          playerScore += 1;
          console.log("あなたの勝利です");
        } else {
          computerScore += 1;
          console.log("コンピュータの勝利です");
        }
        break;
      case 3:
        if (playerChoice === 1) {
          playerScore += 1;
          console.log("あなたの勝利です");
        } else {
          computerScore += 1;
          console.log("コンピュータの勝利です");
        }
        break;
      default:
        console.log("エラー");
    }
}

function getGameWinner(playerScore, computerScore) {
  let winnerName = playerScore > computerScore ? "あなた" : "コンピュータ";
  return winnerName;
}

console.log("じゃんけんを開始します。");

while (round < 5) {
  console.log(`ラウンド${round + 1}`);
  console.log("最初はグー、じゃんけん...");
  battleText = "ぽんっ！"
  //あいこならtrueで繰り返す。あいこでないなら勝敗判定へ
  while (drawCheck) {
    computerChoice = getComputerChoice(0, 2); //コンピュータの手を選択
    playerChoice = getPlayerChoice(); //プレイヤーの手を選択
    console.log(battleText);
    showEachHand(playerChoice, computerChoice); //プレイヤーとコンピュータの手を表示
    if (playerChoice === computerChoice) {
        battleText = "しょっ！"
    console.log("あいこで...");
  } else {
    break;
  }



  round++;
}
