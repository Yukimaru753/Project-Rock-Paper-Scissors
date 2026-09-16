// コンピュータとじゃんけんをするプログラム
// 1ゲーム5ラウンドで最後に勝敗を発表する

// INPUT
// ラウンドを記録する数字：count
// プレイヤーの勝利数を記録する数字：playerScore
// コンピュータの勝利数を記録する数字：computerScore
// プレイヤーの選択した手を保存する数字：playerChoice
// コンピュータの選択した手を保存する数字：computerChoice
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
// SWITCH入力に応じて返り値を与える
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
// 勝敗を判定する関数

// プレイヤーから得た数値とコンピュータから得た数値を比べる
// IF
// 数値が等しい：あいこの表示、もう一度じゃんけんをする
// ELSE
// SWITCH
// 両者の数値の合計でケースを分ける
// CASE 1：三項演算子でプレイヤーが０を選択したかを判別
// TRUEならばプレイヤーの勝利
// playerScoreを１増加させる
// FOLSEならばコンピュータの勝利
// computerScoreを１増加させる
// CASE 2：三項演算子でプレイヤーが２を選択したかを判別
// TRUEならばプレイヤーの勝利
// playerScoreを１増加させる
// FOLSEならばコンピュータの勝利
// computerScoreを１増加させる
// CASE 3：三項演算子でプレイヤーが１を選択したかを判別
// TRUEならばプレイヤーの勝利
// playerScoreを１増加させる
// FOLSEならばコンピュータの勝利
// computerScoreを１増加させる
// DEFAULT：エラー表記
// IFEND

// Parameters
// プレイヤーから得た数値
// コンピュータから得た数値

// Return
// なし
// ーーーーーーーーーーーーーーーーーーーーーーーーーー
// ラウンドを記録する

// WHILE
// ラウンド終了時にcountを1増加させる
// count < 5まで続ける
// WHILEEND
// ーーーーーーーーーーーーーーーーーーーーーーーーーー
// ゲーム全体の勝敗を判定する関数

// 5ラウンド終了後に行う
// 三項演算子でPlayerScoreとcomputerScoreを比べる
// 勝者の名前を返す

// Parameters
// playerScore
// computerScore

// Return
// 勝者を発表する文字列

let count = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice = 0;
let computerChoice = 0;

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerChoice() {
    let playerInput = prompt("あなたの手を入力してください/n rock, scissors, paper","入力されていません");
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