module.exports = function(request, response){
    var http = require('http');
    var fs = require('fs');

    if(request.url === '/'){
        fs.readFile('./views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

        else if(request.url === '/cats'){
            fs.readFile('./views/cats.html', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
            })
        }

        else if (request.url === '/images/aston_martin.jpg'){
            fs.readFile('./images/aston_martin.jpg',  function(errors, contents){
                response.writeHead(200, {'Content-Type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        }

            else if(request.url === '/cat_timing.jpg'){
                fs.readFile('./images/cat_timing.jpg', function(errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                });
            }

            else if(request.url === '/winter_cat.jpg'){
                fs.readFile('./images/winter_cat.jpg', function(errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                });
            }

            else if(request.url === '/questionable.jpg'){
                fs.readFile('./images/questionable.jpg', function(errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                });
            }
            else if (request.url === '/images/mercedes.jpg'){
                fs.readFile('./images/mercedes.jpg', function(errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                })
            }
            else if (request.url === '/images/lfa.jpg'){
                fs.readFile('./images/lfa.jpg', function(errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                })
            }
            else{
                response.writeHead(404);
                response.end('File Not Found');
            }


    }
