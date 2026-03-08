// 澄奈市立保存図書館 - アーカイブシステム
// ARCHIVE_SYSTEM_v3.2 / last_update: 2021.03.14

(function() {

  // アクセスログ出力
  console.log("なぜここを見ているのですか");
  console.log("白奈文香は、まだ読んでいます");
  console.log("ACCESS_LOG: 外部アクセスを検知しました");

  // ページタイトルの微細な変化（F12を開いていると気づくかもしれない）
  var originalTitle = document.title;
  var altTitle = "澄奈市立保存図書館 | 読まれています";

  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      document.title = altTitle;
    } else {
      document.title = originalTitle;
    }
  });

  // 右クリック制限なし（あえて制限しない・本物のサイト感）

})();
