var express = require('express');
var router = express.Router();
const request = require('request');

router.route('/').get((req,res,next) => {
let options = {
  url:"https://jsonplaceholder.typicode.com/todos",
  method:"GET"
};
request(options,(data,header,option) => {
  option = JSON.parse(option)
  console.log(option.length);
  let senData = {
    data:option,
    tops:Object.keys(option[0]),
    style:{
      backgroundColor:"#eac0bb"
    }
  };
  res.render(
    'index',{
      senData
    });
})
  
})

module.exports = router;
