const _ = require('lodash');
const randomWord = require('random-word');
const sillyName = require('sillyname');

var Nightmare = require('nightmare');
const nightmare = Nightmare({
	show: true,
	waitTimeout: 1000000,
	typeInterval: 300,
	openDevTools: {
		mode: 'detach'
	}
});

nightmare
	.goto('http://localhost:3000')
	.wait('input#username-input')
	.type('input#username-input', sillyName())
	.click('button#connect-btn')
	.wait('ul#users-list div.user-name strong')
	.evaluate(() => {
		var users = document.querySelectorAll('ul#users-list div.user-name');
		for (var i = 0;  i < users.length; i++) {
			var user = users[i]
			if (user.innerText.includes('You')) { return user.innerText; }
		}
		return 'fuxk';
	})
	.click('div.ql-editor')
	// .type('div.ql-editor', randomWord())
	.wait(2000)
	.insert('div.ql-editor', '!!!')
	.type('div.ql-editor', '\u0008')
	.type('div.ql-editor', '\u0008')
	.type('div.ql-editor', '8') //delete 3 times
	.wait(3000)
	.type('div.ql-editor', '\u000d')
	.type('div.ql-editor', '\u000d')
	.type('div.ql-editor', '\u000d') //enter 3 times
	.wait(2000)
	.end()
	.then((res) => console.log(res))
	.catch((err) => {
		console.log('opps', err);
	})
