import {Link} from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"



export function DiscogTest() {

  var Crawler = require("crawler");
 
  var c = new Crawler({
      maxConnections : 10,
      // This will be called for each crawled page
      callback : function (error, res, done) {
          if(error){
              console.log(error);
          }else{
              var $ = res.$;
              // $ is Cheerio by default
              //a lean implementation of core jQuery designed specifically for the server
              console.log($("title").text());
          }
          done();
      }
  });
   
  // Queue just one URL, with default callback
  c.queue('http://www.amazon.com');

  c.queue([{
    html: '<p>This is a <strong>test</strong></p>'
}]);
}