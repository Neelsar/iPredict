$("#getData").click(function(){
	$.ajax({
	  type: 'GET',
	  url: 'http://ipredict.azurewebsites.net/api/products',
	  dataType: 'xml',
	  timeout: 300,
	  context: $('body'),
	  success: function(data){
		console.log(data)
	  },
	  error: function(xhr, type){
		alert('Ajax error!')
	  }
	})
});


