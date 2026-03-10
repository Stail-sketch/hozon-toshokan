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

  // ── サイドバー蔵書検索ボックス ──
  var sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  // パス深度を自動検出（main.jsのscript srcから判定）
  var prefix = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var src = scripts[i].getAttribute('src');
    if (src && src.indexOf('main.js') !== -1) {
      var match = src.match(/^((?:\.\.\/)*)/);
      if (match && match[1]) {
        prefix = match[1];
      }
      break;
    }
  }

  // 隠しキーワード（第1層〜第3層）
  var hiddenKeywords = {
    '奈瀬':       'hidden/nase/index.html',
    '白奈':       'hidden/shirana/index.html',
    '地下書庫':   'hidden/chika/index.html',
    '第七閲覧室': 'hidden/7th/index.html',
    '特別保存':   'hidden/tokubestu/index.html',
    '統一郎':     'hidden/toichiro/index.html',
    '澄奈':       'hidden/suminashi/index.html',
    '令和三年':   'hidden/r3/index.html',
    '封印':       'hidden/fuuin/index.html',
    '白紙':       'hidden/hakushi/index.html',
    '儀式':       'hidden/gishiki/index.html',
    '過去送り':   'hidden/kakookuri/index.html',
    '禁書':       'hidden/kinsho/index.html',
    '奈瀬家文書': 'hidden/nasebunso/index.html',
    '第三閲覧室': 'hidden/dai3/index.html',
    '失踪':       'hidden/shisso/index.html',
    '三月十四日': 'hidden/march14/index.html',
    '断絶':       'hidden/danzetsu/index.html',
    '蔵書白紙':   'hidden/zoshohakushi/index.html',
    '封印崩壊':   'hidden/fuuinhoukai/index.html',
    '地下二階':   'hidden/chikanikai/index.html',
    '奈瀬統一郎': 'hidden/toichironase/index.html',
    '白奈文香':   'hidden/shirana-fumika/index.html',
    '梶原瑞穂':   'hidden/kajiwara-mizuho/index.html',
    '主任司書':   'hidden/shuninshisho/index.html',
    '閲覧制限':   'hidden/etsuranseigen/index.html',
    '削除済み':   'hidden/sakujo/index.html',
    '非公開':     'hidden/hikoukai/index.html',
    '奈瀬町':     'hidden/nasemachi/index.html',
    '明治時代':   'hidden/meiji/index.html',
    '奈瀬家寄贈': 'hidden/nasekizo/index.html',
    '財政難':     'hidden/zaiseinan/index.html',
    '司書失踪':   'hidden/shishoshisso/index.html',
    '消去記録':   'hidden/shokyokiroku/index.html',
    '地下一階':   'hidden/chikaikkai/index.html',
    '奈瀬文書庫': 'hidden/nasebunshoko/index.html',
    '血統':       'hidden/ketto/index.html',
    '綴じ儀式':   'hidden/tojigishiki/index.html',
    '白紙の書':   'hidden/hakushinosho/index.html',
    '書庫増築':   'hidden/shokozochu/index.html',
    '第五閲覧室': 'hidden/dai5/index.html',
    '焚書':       'hidden/funsho/index.html',
    '証言録':     'hidden/shogenroku/index.html',
    '黒塗り':     'hidden/kuronuri/index.html',
    '明治秘録':   'hidden/meijihiroku/index.html',
    '奈瀬昇':     'hidden/nasenoboru/index.html',
    '行方不明者': 'hidden/yukuefumeisha/index.html',
    '手記':       'hidden/shuki/index.html',
    '調査報告':   'hidden/chosahokoku/index.html',
    '不審死':     'hidden/fushinshi/index.html',
    '記録抹消':   'hidden/kirokumassho/index.html',
    '地下三階':   'hidden/chikasangai/index.html',
    '最終封印':   'hidden/saigofuuin/index.html',
    '真相':       'hidden/shinsho/index.html',
    '誓約書':     'hidden/seiyakusho/index.html',
    '消去命令':   'hidden/shokyomeirei/index.html',
    '市民台帳':   'hidden/shimindaicho/index.html',
    '封蝋':       'hidden/furo/index.html',
    '禁室':       'hidden/kinshitsu/index.html',
    '終焉':       'hidden/shuen/index.html',
    '国家実験':   'hidden/kokka-jikken/index.html',
    '監視計画':   'hidden/kanshi-keikaku/index.html',
    '澄奈計画':   'hidden/suminashi-keikaku/index.html',
    '被験者':     'hidden/hiken-sha/index.html',
    '特務機関':   'hidden/tokumu-kikan/index.html',
    '昭和三十二年': 'hidden/showa32/index.html',
    '記録処理':   'hidden/kiroku-shori/index.html',
    '消去対象':   'hidden/shokyotaisho/index.html',
    '澄奈事案':   'hidden/suminashi-jian/index.html',
    '実験区域':   'hidden/jikken-kuiki/index.html',
    '協定書':     'hidden/kyoteisho/index.html',
    '機密指定':   'hidden/kimitsu-shitei/index.html',
    '証拠隠滅':   'hidden/shoko-inmetsu/index.html',
    '対象者名簿': 'hidden/taishosha-meibo/index.html',
    '昭和調書':   'hidden/showa-chosho/index.html',
    '実験報告':   'hidden/jikken-hokoku/index.html',
    '地域封鎖':   'hidden/chiiki-fusa/index.html',
    '特別措置':   'hidden/tokubetsu-sochi/index.html',
    '黒衣の使節': 'hidden/kuroi-shisetsu/index.html',
    '実験施設':   'hidden/jikken-shisetsu/index.html',
    '国家機密':   'hidden/kokka-kimitsu/index.html',
    '秘密指令':   'hidden/himitsu-shirei/index.html',
    '第三部':     'hidden/daisanbu/index.html',
    '実験継続':   'hidden/jikken-keizoku/index.html',
    '転出者記録': 'hidden/tenshusha-kiroku/index.html',
    '情報封鎖':   'hidden/joho-fusa/index.html',
    '記録隠蔽':   'hidden/kiroku-inpei/index.html',
    '目撃者':     'hidden/mokugekisha/index.html',
    '消去完了':   'hidden/shokyokanryo/index.html',
    '隠蔽指示':   'hidden/inpei-shiji/index.html',
    '観察記録':   'hidden/kansatsu-kiroku/index.html',
    '図書館報告': 'hidden/toshokan-hokoku/index.html',
    '職員監視':   'hidden/shokuin-kanshi/index.html',
    '選別記録':   'hidden/senbetsu-kiroku/index.html',
    '失踪確認':   'hidden/shisso-kakunin/index.html',
    '痕跡処理':   'hidden/konseki-shori/index.html',
    '最終段階':   'hidden/saigo-dankai/index.html',
    '国家証言':   'hidden/kokka-shogen/index.html',
    '内部告発':   'hidden/naibu-kokuhatsu/index.html',
    '告発者':     'hidden/kokuhatsusha/index.html',
    '封印指令':   'hidden/fuuin-shirei/index.html',
    '赤封筒':     'hidden/aka-futo/index.html',
    '禁断記録':   'hidden/kindan-kiroku/index.html',
    '第七計画':   'hidden/nanago-keikaku/index.html',
    '消滅命令':   'hidden/shometsu-meirei/index.html',
    '実験全貌':   'hidden/jikken-zenbo/index.html',
    '決定文書':   'hidden/kettei-bunsho/index.html',
    '証拠消去':   'hidden/shoko-shokyou/index.html',
    '国家指令':   'hidden/kokka-shirei/index.html',
    '消された事実': 'hidden/kesareta-jijitsu/index.html',
    '黒幕':         'hidden/kuromaku/index.html',
    '彩霧班':       'hidden/saigiri-han/index.html',
    '極秘任務':     'hidden/gokuhimitsu/index.html',
    '被害者名簿':   'hidden/higaisha-meibo/index.html',
    '抹消命令':     'hidden/massho-meirei/index.html',
    '協力関係':     'hidden/kyoryoku-kankei/index.html',
    '依頼主':       'hidden/irai-nushi/index.html',
    '奈瀬文書':     'hidden/nase-bunsho/index.html',
    '協定原本':     'hidden/kyotei-genpon/index.html',
    '昭和三十二年協定': 'hidden/showa32-kyotei/index.html',
    '依頼署名':     'hidden/irai-shomei/index.html',
    '実験名簿':     'hidden/jikken-meibo/index.html',
    '処理手順':     'hidden/shori-tejun/index.html',
    '秘匿手続':     'hidden/hito-tetsuzuki/index.html',
    '省庁連絡':     'hidden/shocho-renraku/index.html',
    '彩霧報告書':   'hidden/saigiri-hokoku/index.html',
    '疑問点':       'hidden/gimonten/index.html',
    '奈瀬側記録':   'hidden/nase-kiroku/index.html',
    '矛盾する証言': 'hidden/mujun-shogen/index.html',
    '不自然な記録': 'hidden/fushizen-kiroku/index.html',
    '隠された動機': 'hidden/kakusareta-doki/index.html',
    '財産記録':     'hidden/zaisan-kiroku/index.html',
    '土地争い':     'hidden/tochi-arasoi/index.html',
    '奈瀬の利益':   'hidden/nase-rieki/index.html',
    '真の黒幕':     'hidden/shin-kuromaku/index.html',
    '白奈の疑惑':   'hidden/shirana-giwaku/index.html',
    '梶原報告書':   'hidden/kajiwara-hokoku/index.html',
    'KJ-2021-01':  'hidden/kj-2021-01/index.html',
    '職員専用記録': 'hidden/shokuin-kiroku/index.html',
    '最終記録':     'hidden/saigo-kiroku/index.html'
  };

  // 検索ボックスHTML
  var searchBox = document.createElement('div');
  searchBox.className = 'nav-box';
  searchBox.innerHTML =
    '<div class="nav-title">■ 蔵書検索</div>' +
    '<hr class="nav-hr">' +
    '<form id="sidebar-search-form">' +
    '<input type="text" id="sidebar-search-input" class="sidebar-search-input" placeholder="キーワード">' +
    '<input type="submit" value="検索" class="sidebar-search-btn">' +
    '</form>' +
    '<div id="sidebar-search-msg" class="sidebar-search-msg"></div>';

  var br = document.createElement('br');
  var firstChild = sidebar.firstChild;
  sidebar.insertBefore(br, firstChild);
  sidebar.insertBefore(searchBox, br);

  // 検索処理
  var form = document.getElementById('sidebar-search-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var q = document.getElementById('sidebar-search-input').value.trim();
    var msg = document.getElementById('sidebar-search-msg');

    if (q === '') return;

    if (hiddenKeywords[q]) {
      msg.innerHTML = 'SEARCHING...';
      setTimeout(function() {
        window.location.href = prefix + hiddenKeywords[q];
      }, 800);
    } else {
      msg.textContent = '該当なし';
      setTimeout(function() { msg.textContent = ''; }, 2000);
    }
  });

})();
