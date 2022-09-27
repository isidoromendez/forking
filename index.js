// node .\index.js 10 10000
const fork = require('child_process').fork;
const myArgs = process.argv.slice(2);
console.log(`Starting : ${myArgs[0]} process...`);

const procs = [];

const forkit = () => {
    const messageListener = message => {
        console.log('Recived from child:', message);
    }
    const errorListener = message => {
        console.log('Error recived from child:', message);
    }
    const cp = fork('child-process.js')
    
    const stopListen = ()=>{
        cp.off('message', messageListener);
        cp.off('error', errorListener);
    }

    const startListen = () => {
        cp.on('message', messageListener);
        cp.on('error', errorListener);
    }

    const kill = () => {
        cp.kill();
        stopListen();
    }
    
    return {
        proc: cp,
        pid: cp.pid,
        startListen,
        stopListen,
        kill
    }
} 

for (let index = 0; index < myArgs[0]; index++) {
    const forked = forkit();
    forked.startListen();
    procs.push(forked);  
}

if(myArgs[1] > 0){
    const killAt = myArgs[1];
    setTimeout(() => {
        procs.map(proc => {
            proc.kill();
            console.log(`${proc.pid} killed.`);
            return proc;
        });
    }, killAt);
}
