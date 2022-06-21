const http =  require('http');

http.createServer( (req,res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write(['id', 'nombre']);
    res.write(['1', 'Fernando']);
    res.write(['2', 'Maria']);
    res.write(['3', 'Juan']);
    res.write(['4', 'Ana']);
   res.write(['5', 'Luis']);

    res.end();


}).listen( 8080 );