'use strict';

exports.ok = function(values, res){
    var data = {
        'statur':200,
        'values':values
    };

     res.json(data);
     res.end();
}