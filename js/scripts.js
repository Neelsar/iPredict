$("#getData").click(function(){
	$.ajax({
	  type: 'GET',
	  url: 'http://ipredict.azurewebsites.net/api/products',
	  dataType: 'xml',
	  timeout: 300,
	  context: $('body'),
	  success: function(data){
		console.log(data);
		//xml2json(data);
		//$('footer').append(data)
	  },
	  error: function(xhr, type){
		alert('Ajax error!')
	  }
	})
});

function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    console.log(obj);
  } catch (e) {
      console.log(e.message);
  }
}


