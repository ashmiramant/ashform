$(document).ready(function() {
	$("form").on("submit", function(submitEvent){
		submitEvent.preventDefault()
		var username = $(submitEvent.currentTarget.children[0]).val()
		var password = $(submitEvent.currentTarget.children[1]).val()
		$.ajax({
			url: "/login", 
			data: {username: username, password: password},
			success: function(data, status, xhr){
				console.log(status)
			}, 
			error: function(data, status, xhr){
				console.log(data)
				console.log(status)
				console.log(xhr)
			}
		})

	});
}); 
