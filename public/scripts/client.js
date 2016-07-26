//remove button doesnot work

angular.module('groceryApp', []);
angular.module('groceryApp').controller('MainController', function($http){
  var vm=this;
  vm.submitItem = function(){
    var sendData={};
    sendData.item = vm.groceryItem;
    sendData.quanity = vm.numOfItems;
    console.log(vm.groceryItem);
    $http.post('/', sendData).then(vm.getList, handleFailure);
  }
  vm.getList = function(){
    $http.get('/list').then(handleSuccess, handleFailure)
  }
  vm.update = function(item){
    var sendData ={};
    sendData.id = item._id;
    sendData.quanity=vm.newQuanity;
    sendData.item = vm.newItem;
    vm.newItem="";
    vm.newQuanity="";
    $http.put('/update', sendData).then(vm.getList, handleFailure);
  }
  vm.remove = function(item){
    var sendData ={};
    sendData.id = item._id;
    $http.delete('/delete', sendData).then(vm.getList, handleFailure);
  }
  function handleSuccess(response){
    console.log('got items successfully');
    vm.list=response.data;
    console.log(vm.list);
  }
  function handleFailure(){
    console.log('failed to add item');
  }
  vm.getList();
});
