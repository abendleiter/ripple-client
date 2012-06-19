var rpc=[];
rpc.reload = function()
{
	rpc.url="http://"+SERVER_IP+":"+SERVER_PORT;
}

rpc.url="http://"+SERVER_IP+":"+SERVER_PORT;

rpc.displayResult = function(response,success) 
{
	if(success)
		$('#status').text(JSON.stringify(response));
	else $('#error').text('No response from server. Please check if it is running.');
};

rpc.call =function(request,callback)
{
	//request.id = 1;
	
	$.ajax({
  		type: 'POST',
  		url: rpc.url,
  		data: JSON.stringify(request),
  		success: function(x){ callback(x,true); },
  		error: function(x){ callback(x,false); },
  		dataType: "json"
	});
}


rpc.send=function(key,fromAccount,toAccount,amount,callback)
{
	var request = {};
	request.method = "send";
	request.params = [key,fromAccount,toAccount,amount];
	
	rpc.call(request,callback);
}

rpc.server_info=function(callback)
{
	var request = {};
	request.method = "server_info";
	request.params = [];
	
	rpc.call(request,callback);
}

rpc.wallet_propose=function(callback)
{
	var request = {};
	request.method = "wallet_propose";
	request.params = [];
	
	rpc.call(request,callback);
}

rpc.wallet_accounts=function(key,callback)
{
	var request = {};
	request.method = "wallet_accounts";
	request.params = [key];
	
	rpc.call(request,callback);
}

rpc.data_fetch=function (key,callback)
{
	var request = {};
	request.method = "data_fetch";
	request.params = [key];
	
	rpc.call(request,callback);
}

rpc.data_store=function(key,value)
{
	var request = {};
	request.method = "data_store";
	request.params = [key,value];
	
	rpc.call(request,rpc.displayResult);
}

rpc.data_delete=function(key)
{
	var request = {};
	request.method = "data_delete";
	request.params = [key];
	
	rpc.call(request,rpc.displayResult);
}

rpc.connect=function(ip,port)
{
	var request = {};
	request.method = "connect";
	request.params = [ip,port];
	
	rpc.call(request,rpc.displayResult);
}

rpc.unl_add=function(addr,note)
{
	var request = {};
	request.method = "unl_add";
	request.params = [addr,note];
	
	rpc.call(request,rpc.displayResult);
}

rpc.unl_delete=function(addr)
{
	var request = {};
	request.method = "unl_delete";
	request.params = [addr];
	
	rpc.call(request,rpc.displayResult);
}

rpc.peers=function (callback)
{
	var request = {};
	request.method = "peers";
	request.params = [];
	
	rpc.call(request,callback);
}

rpc.stop=function ()
{
	var request = {};
	request.method = "stop";
	request.params = [];
	
	rpc.call(request,rpc.displayResult);
}

rpc.ledger=function(callback)
{
	var request = {};
	request.method = "ledger";
	request.params = ["lastclosed","full"];
	
	rpc.call(request,callback);
}

rpc.unl_list=function(callback)
{
	var request = {};
	request.method = "unl_list";
	request.params = [];
	
	rpc.call(request,callback);
}
