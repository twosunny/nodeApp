exports.render = function(req,res){
    
    if(req.session.lastVisitTime){
        console.log(req.session.lastVisitTime);
    }

    var time = new Date();
    req.session.lastVisitTime = time.getFullYear() + "-" + (time.getMonth()+1)+"-"+time.getDate()+" .. "
    +time.getHours()+"-"+time.getMinutes()+"-"+time.getSeconds();
    

    res.render('index',{title : 'First title'});
}
