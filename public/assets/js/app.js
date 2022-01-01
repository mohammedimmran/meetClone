var MyApp = (function(){

    function init(uid , mid){

        event_process_for_signalling_server();
    }
    function event_process_for_signalling_server(){
        socket = io.connect();
        socket.on("connect" , ()=>{
            alert("socket connected to client side");
        });
    }
    return{
        _init:function(uid , mid){
            init(uid,mid);
        },
    };
})();