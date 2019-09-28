# RPS
    
<h2>概要:</h2>
じゃんけんAPI

<h2>エンドポイント:</h2>
https://n4wavirxvj.execute-api.us-east-2.amazonaws.com/Prod/RSP

<h2>Allowed Method:</h2>
Any

<h2>入力:</h2>
{
    "yourhand" : 2 // あなたの手　0,1,2 = グー、チョキ、パー
}

<h2>出力:</h2>
{
    "status": 0, // -1 = 入力が正しくない or 0 = APIの実行成功
    "enemyhand": 1, //敵の手 0,1,2 = グー、チョキ、パー
    "result": 1     // 0 = あなたの勝ち、1 =　敵の勝ち、2 = あいこ 
}
