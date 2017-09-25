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
	for (var prop in document) {
	    console.log(prop);
	}
    })
    .end()
    .catch(e=>console.log(e))
    .then(_=>chromy.close())
