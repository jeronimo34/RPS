exports.handler = (event, context, callback) => {
    //0 = グー, 1 = チョキ, 2 = パー
    let yourhand = JSON.parse(event.body).yourhand;
    
     if(!Validation(yourhand)){
        return;
    }

    let enemyhand = GetEnemyHand();
    let res = RPS(yourhand, enemyhand);

    callback(null, CreateResponse({"status" : 0, "enemyhand" : enemyhand, "result" : res}));

    //=========================
    //入力バリデーション処理
    //入力値が正しければtrueを返却。そうでなければfalse。
    //=========================
    function Validation(yourhand){
        //パラメーターのバリデーション
        if(yourhand == undefined){
            callback(null, CreateResponse({ "status" : -1, "message" : "yourhand is require."}));
            return false;
        }

        //0~2の整数か判定
        if(Number.isInteger(yourhand) && !(0 <= yourhand && yourhand < 3)){
            callback(null, CreateResponse({ "status" : -1, "message" : "yourhand must be integer. that is 0,1,2."}));
            return false;
        }

        return true;
    }

    //=========================
    //0 = グー, 1 = チョキ, 2 = パー
    //=========================
    function GetEnemyHand(){
        return Math.floor( Math.random() * 3 );
    }

    //=========================
    //じゃんけん実行
    //引数：youhand, enemyhand
    //戻り値：0 = あなたの勝ち, 1 = 敵の勝ち, 2 = 引き分け
    //=========================
    function RPS(yourhand, enemyhand){
        //引き分け
        if(yourhand == enemyhand)return 2;
        //勝ち
        if((yourhand == 0 && enemyhand == 1) ||
            (yourhand == 1 && enemyhand == 2) ||
            (yourhand == 2 && enemyhand == 0))return 0;
        //負け
        return 1;
    }
    
    //=========================
    //レスポンス作成
    //=========================
    function CreateResponse(data){
        let response = {
            statusCode: 200,
            headers: {
            },
            body: JSON.stringify(data)
        }; 
        
        return response;
    }
};
