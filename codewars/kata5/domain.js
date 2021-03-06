function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  let domain = "";
  let start = 0;
  
  function base(url, start){
     let domain = '';
     while(start < url.length){
      if(url[start] === "."){
        break;
       }
      domain += url[start]
      start++;
    }
    return domain;
  }
  
  if(url[0] === "h"){
    if(url[10] === "."){
      return domain = base(url, 11);
    }else if(url[11] === "."){
      return domain = base(url, 12);
    }
    if(url[7] === "/" && url[4] === "s"){
      return domain = base(url, 8);
    }else if(url[6] === "/"){
      return domain = base(url, 7);
    }
  }else if(url[0] === "w"){
    return domain = base(url, 4);
  }else if(url[0] === "/"){
    return domain = base(url, 2);
  }else{
    return domain = base(url, start);
  }
}

// function domainName(url){
//   let domain = "";
//   let start = 0;
  
//   function base(url, start){
//      let domain = '';
//      while(start < url.length){
//       if(url[start] === "."){
//         break;
//        }
//       domain += url[start]
//       start++;
//     }
//     return domain;
//   }
  
//   if(url[0] === "h"){
//     if(url[11] === "." && (11+4) === url.length){
//       domain = domain
//     }else if(url[10] === "."){
//       return domain = base(url, 11);
//     }else if(url[11] === "."){
//       return domain = base(url, 12);
//     }
//     if(url[7] === "/" && url[4] === "s"){
//       return domain = base(url, 8);
//     }else if(url[6] === "/"){
//       return domain = base(url, 7);
//     }
//   }else if(url[0] === "w"){
//     return domain = base(url, 4);
//   }else if(url[0] === "/"){
//     return domain = base(url, 2);
//   }else{
//     return domain = base(url, start);
//   }
// }


// // Test.assertEquals(domainName("https://123.net"), "123");
