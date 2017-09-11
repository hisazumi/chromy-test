const Chromy=require('chromy')
const chromy=new Chromy()
chromy.chain()
    .start()
    .goto('https://twitter.com/')
// chromy実行側コンソールに，chromeのconsole出力をリダイレクトするためのおまじない
    .console((msg, obj) => {
        console.log(msg) // text
        //console.log(obj) // object incuding all parameters.
      })
    .evaluate(() => {
	// DOM中のscript要素すべてのcollection
	// https://developer.mozilla.org/ja/docs/Web/API/document
	ss = document.scripts; 
	for (var i=0 ; i<ss.length ; i++) {
	    // scriptsの要素はHTMLScriptElement
	    // https://developer.mozilla.org/ja/docs/Web/API/HTMLScriptElement
	    console.log(document.scripts[i].src);
	}
    })
    .end()
    .catch(e=>console.log(e))
    .then(_=>chromy.close())
