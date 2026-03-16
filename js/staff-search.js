// 職員専用アーカイブ検索（Layer4〜5ページ用）
// staff-portal.html と同一のキーワードデータベース
(function() {

  var staffKeywords = {
    // Layer4 / 綻びフェーズ（171〜185番）
    '処理台帳':     '../shori-daichou/index.html',
    '相続争い':     '../souzoku-arasoi/index.html',
    '土地紛争':     '../tochi-funso/index.html',
    '届出書':       '../todokedesho/index.html',
    '奈瀬書簡':     '../nase-shokan/index.html',
    '意向書':       '../ikousho/index.html',
    '承認書':       '../shoninsho/index.html',
    '村田メモ':     '../murata-memo/index.html',
    '金銭係争':     '../kinsen-keiso/index.html',
    '選定基準':     '../sentei-kijun/index.html',
    '申請書':       '../shinseisho/index.html',
    '事務記録':     '../jimu-kiroku/index.html',
    '引継文書':     '../hikitsugi-bunsho/index.html',
    '依頼原本':     '../irai-genpon/index.html',
    '動機書':       '../dokisho/index.html',
    // Layer4 / KJ-2021フェーズ（186〜210番）
    'KJ一覧':       '../kj-ichiran/index.html',
    'KJ目次':       '../kj-mokuji/index.html',
    'KJ序文':       '../kj-jobun/index.html',
    '協定全文':     '../kyotei-zenbun/index.html',
    '断片':         '../danpen/index.html',
    '依頼者':       '../iraisha/index.html',
    '件数統計':     '../kensu-toukei/index.html',
    '対象分類':     '../taisho-bunrui/index.html',
    '名前一致':     '../namae-itchi/index.html',
    '調査ノート':   '../chosa-note/index.html',
    '依頼主':       '../irainushi/index.html',
    '誠署名':       '../makoto-shomei/index.html',
    '動機記録':     '../doki-kiroku/index.html',
    '邪魔者':       '../jamaisha/index.html',
    '完了記録':     '../kanryo-kiroku/index.html',
    '財産記録':     '../zaisan-rec/index.html',
    '係争記録':     '../keiso-kiroku/index.html',
    '目撃記録':     '../mokugeki-kiroku/index.html',
    '中間考察':     '../chuukan-kousatsu/index.html',
    '梶原記録':     '../kajiwara-kiroku/index.html',
    '地下文書':     '../chika-bunsho/index.html',
    '処理室':       '../shori-shitsu/index.html',
    '封印書':       '../fuuinsho/index.html',
    '梶原失踪':     '../kajiwara-shisso/index.html',
    'KJ結論':       '../kj-ketsuron/index.html',
    // Layer4 / 統一郎日記フェーズ（211〜230番）
    '私記':         '../shiki/index.html',
    '昭和36年':     '../s36/index.html',
    '昭和42年':     '../s42/index.html',
    '昭和55年':     '../s55/index.html',
    '昭和60年':     '../s60/index.html',
    '平成元年':     '../h1/index.html',
    '平成11年':     '../h11/index.html',
    '平成15年':     '../h15/index.html',
    '平成27年':     '../h27/index.html',
    '文香の言葉':   '../fumika-kotoba/index.html',
    '疑問録':       '../gimonroku/index.html',
    '残す理由':     '../nokosu-riyuu/index.html',
    '必要悪':       '../hitsuyouaku/index.html',
    '文香信頼':     '../fumika-shinrai/index.html',
    '日付なし':     '../hizukenashi/index.html',
    '罪の重さ':     '../tsumi-omosa/index.html',
    '父の継承':     '../chichi-keisho/index.html',
    '封印決断':     '../fuuin-ketsudan/index.html',
    '遺言':         '../yuigon/index.html',
    '梶原日誌':     '../kajiwara-nisshi/index.html',
    // Layer4 / 梶原×統一郎 交互フェーズ（231〜245番）
    'KJ台帳':       '../kj-daicho/index.html',
    '百四十七名':   '../147mei/index.html',
    '依頼者欄':     '../iraisha-ran/index.html',
    '誠の手帳':     '../makoto-techo/index.html',
    '全件一致':     '../zenken-itchi/index.html',
    '綴じの記録':   '../toji-kiroku/index.html',
    '白紙写真':     '../hakushi-shashin/index.html',
    '父の言葉':     '../chichi-kotoba/index.html',
    '梶原覚書':     '../kajiwara-oboegaki/index.html',
    '文香への伝言': '../fumika-dengon/index.html',
    'KJ最終':       '../kj-saishuu/index.html',
    '栓になる':     '../sen-ninaru/index.html',
    '処理室の音':   '../shori-oto/index.html',
    '俺の罪':       '../ore-tsumi/index.html',
    '交差':         '../kousa/index.html',
    // Layer4 / Layer5入口（246〜250番）
    '最後の日誌':   '../saigo-nisshi/index.html',
    '鍵になる':     '../kagi-ninaru/index.html',
    '選んだ理由':   '../eranda-riyuu/index.html',
    'SESSION継続':  '../session-keizoku/index.html'
  };

  // 検索UIを生成
  var wrap = document.querySelector('.wrap');
  if (!wrap) return;

  var foot = wrap.querySelector('.foot');
  if (!foot) return;

  // 検索セクションを作成
  var searchSection = document.createElement('div');
  searchSection.style.cssText = 'border-top: 1px solid #002a0c; padding-top: 18px; margin-top: 28px; margin-bottom: 28px;';
  searchSection.innerHTML =
    '<div style="color:#00cc35; font-size:12px; letter-spacing:1px; border-left:3px solid #00ff41; padding-left:10px; margin-bottom:14px;">▌ 職員専用アーカイブ検索</div>' +
    '<div style="color:#005a18; font-size:10px; margin-bottom:12px; line-height:1.8;">SEARCH_MODE : STAFF_ARCHIVE<br>DATABASE    : RESTRICTED_INTERNAL / LAYER_4-5_ACCESS</div>' +
    '<form id="staff-search-form" style="margin-bottom:6px;">' +
      '<div style="display:flex; align-items:center; gap:10px;">' +
        '<span style="color:#00aa2a; font-size:12px; white-space:nowrap;">&gt; QUERY :</span>' +
        '<input type="text" id="staff-search-input" style="background:#080815; border:1px solid #007a22; color:#00ff41; font-family:\'Courier New\',Courier,monospace; font-size:13px; padding:5px 10px; width:300px; outline:none; letter-spacing:0.5px;" maxlength="100" autocomplete="off">' +
        '<button type="submit" style="background:#050d08; border:1px solid #00cc35; color:#00ff41; font-family:\'Courier New\',Courier,monospace; font-size:11px; padding:5px 16px; cursor:pointer; letter-spacing:2px;">SEARCH</button>' +
      '</div>' +
    '</form>' +
    '<div style="color:#004010; font-size:10px; margin-top:6px; margin-bottom:14px;">注意：このシステムへのアクセスは全て記録されます　/ ACCESS_LOG : RECORDING</div>' +
    '<div id="staff-result" style="background:#060612; border:1px solid #003a10; padding:12px 16px; min-height:42px; font-size:12px; line-height:2.0;">' +
      '<span style="color:#005a18;">&gt; </span><span style="color:#00cc35;">待機中 / STANDBY</span>' +
    '</div>';

  // フッターの前に挿入
  wrap.insertBefore(searchSection, foot);

  // ホバーエフェクト
  var btn = searchSection.querySelector('button');
  btn.addEventListener('mouseenter', function() { btn.style.background = '#0a2010'; btn.style.borderColor = '#00ff41'; });
  btn.addEventListener('mouseleave', function() { btn.style.background = '#050d08'; btn.style.borderColor = '#00cc35'; });
  var input = document.getElementById('staff-search-input');
  input.addEventListener('focus', function() { input.style.borderColor = '#00ff41'; input.style.boxShadow = '0 0 8px rgba(0,255,65,0.25)'; });
  input.addEventListener('blur', function() { input.style.borderColor = '#007a22'; input.style.boxShadow = 'none'; });

  // 検索処理
  document.getElementById('staff-search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var q = document.getElementById('staff-search-input').value.trim();
    var result = document.getElementById('staff-result');

    if (q === '') {
      result.innerHTML = '<span style="color:#005a18;">&gt; </span><span style="color:#00cc35;">待機中 / STANDBY</span>';
      return;
    }

    var escaped = q.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    result.innerHTML =
      '<span style="color:#005a18;">&gt; </span><span style="color:#00cc35;">QUERY : &quot;' + escaped + '&quot;</span><br>' +
      '<span style="color:#005a18;">&gt; </span><span style="color:#00cc35;">SEARCHING .........</span>';

    setTimeout(function() {
      if (staffKeywords[q]) {
        result.innerHTML =
          '<span style="color:#005a18;">&gt; </span><span style="color:#00cc35;">QUERY : &quot;' + escaped + '&quot;</span><br>' +
          '<span style="color:#005a18;">&gt; </span><span style="color:#00ff41;">MATCH FOUND / LOADING ...</span>';
        setTimeout(function() { window.location.href = staffKeywords[q]; }, 800);
      } else {
        result.innerHTML =
          '<span style="color:#005a18;">&gt; </span><span style="color:#00cc35;">QUERY : &quot;' + escaped + '&quot;</span><br>' +
          '<span style="color:#005a18;">&gt; </span><span style="color:#886600;">該当記録なし / CLEARANCE INSUFFICIENT</span><br>' +
          '<span style="color:#005a18;">&gt; </span><span style="color:#886600;">ACCESS_LOG : RECORDED / RESULT : 0</span>';
      }
    }, 1500);
  });

})();
