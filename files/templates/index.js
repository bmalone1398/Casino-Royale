
var cp = require('child_process')
var chokidar = require('chokidar')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Main.html');
});

app.get('/dist/deck.js',function(req,res){
  res.sendFile(__dirname + '/dist/deck.js')
});

app.get('/BlackJack.js',function(req,res){
  res.sendFile(__dirname + '/BlackJack.js')
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

cp.exec('mkdir -p dist')

watch('css/**/*.styl', 'npm run build-css')
watch('views/**/*.jade', 'npm run build-html')
watch('lib/**/*.js', 'npm run build-js')

function watch (glob, cmd) {
  chokidar.watch(glob)
    .on('change', function () {
      exec(cmd)
    })
}

function exec (cmd) {
  cp.exec(cmd, function (err, stdout, stderr) {
    err && console.error(err)
    stdout && console.log(stdout)
    stderr && console.log(stderr)
  })
}
