### 製作途中 
---

- 要件
    - タイマー機能
        - 現在時刻(JTC)を表示する
        - ボタン押下時に計測を始める/止める
        - 計測開始時は開始時刻をローカルストレージに保存
        - 計測終了時は開始時刻と終了時刻の差分をデータベースに保存し、ローカルストレージのデータを削除する
        - 一時停止時はデータベースに保存しない
        - 保存形式は yyyy/MM/dd hh:mmとする
    - カレンダー機能
        - 計測した時間をデータベースに保存した日付に基づいて表示する
        - 平日、土日で色を分ける
    - カテゴリ選択
        - 行った作業のカテゴリを選択でき、データベース保存時に同様に保存する
        - カテゴリは色コードが入力でき、任意
        - カテゴリ名は任意
- **将来的にやりたいこと**
    - カレンダーをgoogleカレンダーと同期
    - カレンダー上で目標時刻を決め、タイマー画面で表示
    - 目標時刻達成時、画面をにぎやかに
