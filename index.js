const fs = require('fs')
fs.mkdirSync('dist')
fs.writeFileSync(
	'dist/index.html',
	`
  <!DOCTYPE html>
  <html>
    <body>
      <p>hello world</p>
    </body>
  </html>
`
)
