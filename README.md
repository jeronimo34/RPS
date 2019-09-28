# RPS

じゃんけんAPI
https://n4wavirxvj.execute-api.us-east-2.amazonaws.com/Prod/RSP

入力
{
    "yourhand" : 2 // あなたの手　0,1,2 = グー、チョキ、パー
}

出力
{
    "status": 0, // -1 = 入力が正しくない or 0 = APIの実行成功
    "enemyhand": 1, //敵の手 0,1,2 = グー、チョキ、パー
    "result": 1     // 0 = あなたの勝ち、1 =　敵の勝ち、2 = あいこ 
}