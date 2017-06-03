/**
 * http://usejsdoc.org/
 */
// Add event handler
addEventListener("message", function messageHandlerForWorker(event){	
	postMessage(factorial(event.data));
}, true);

function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}