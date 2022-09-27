

process.send({
    pid: process.pid,
    msg: "init process " + process.pid
});

const interval = Math.floor(Math.random() * 3000) + 1000;

setInterval(() => {
    process.send({
        pid: process.pid,
        msg: 'alive',
        i: interval,
        rnd: Math.random()
    });
}, interval);