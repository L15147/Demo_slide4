var express = require('express');

var app = express();
var expressHbs = require('express-handlebars');
//Thiet lap thu vien handlebars
app.engine('handlebars', expressHbs({
    //Thiet lap thu muc va ten cua file layout cha
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.get('/', function (request, response) {
    var name = 'Long Moi';
    var arr = ['Apple', 'Class', 'Public', 'Name', 'ABC'];
    response.render('home',
        {title: name,
            date: '29/09/2001',
            array: arr
        });
});
app.post('/login', function (request, response) {

});
app.listen(process.env.PORT || '3000')