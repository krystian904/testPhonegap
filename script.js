function go(){
alert("dziala")
}
function scanStart(){
	alert("scna dziala")
	ble.startScan([], function(device) {
		console.log(JSON.stringify(device));
		var logText = document.getElementById("log");
		logText.textContent =JSON.stringify(device);
		alert("dziala")
		}, failure);

	setTimeout(ble.stopScan,
		5000,
		function() {
			var logText = document.getElementById("log");
			logText.textContent ="stopScan failed";
			console.log("Scan complete"); },
		function() {
			var logText = document.getElementById("log");
			logText.textContent ="stopScan failed";
			console.log("stopScan failed"); }
	);

}
