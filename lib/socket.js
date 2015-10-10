exports.start = function start(socket){
	console.log('a user connected');
	socket.on('ch1', function(data) {
		
		data = (data/100) + 1;

		//echo to piblaster
		console.log('echoing '+data);
		piblaster.setPwm(motor_pin, data);				
		});

}
