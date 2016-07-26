//router.delete does not work

var express = require('express');
var router = express.Router();
var path = require('path');
var Item = require('../models/items');

router.get('/', function(request, response){
  response.sendFile(path.resolve(__dirname,'../public/views/index.html'));
});

router.get('/list', function(request, response){
  Item.find({}, function(err, items){
    if(err){
      console.log('err finding items');
    }
    else{
      console.log('found items');
      response.send(items);
    }
  })
});

router.post('/', function(request, response){
  console.log('adding item');
  var data = request.body;
  console.log(data);
  var createdItem= new Item({
    item: data.item,
    quanity: data.quanity
  });
  console.log(createdItem);
  createdItem.save(function(err){
    if (err){
      console.log('error saving item', err);
      response.sendStatus(500);
    }
    else{
      console.log('save assignment success');
      response.sendStatus(200);
    }
  });
});
router.put('/update', function(request, response){
  var id = request.body.id;
  var data = request.body;
  console.log(request.body);
  Item.findByIdAndUpdate(id, {$set: data}, function(err, Item){
    if(err){
      console.log("update error", err);
    }
    else{
      console.log('updated');
      response.send(Item);
    }
  })
})
router.delete('/delete', function(request, response){
  var id = request.body.id;
  console.log(request.body);
  Item.findByIdAndRemove(id, function(err, Item){
    if(err){
      console.log("update error", err);
    }
    else{
      console.log('remove');
      response.send(Item);
    }
  })
})

module.exports = router;
