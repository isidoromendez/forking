# A FORK example on Nodejs

How to run:

    node .\index.js 3 3000

this command create 3 child processes and kill them after 3000ms.

Output:

    node .\index.js 3 3000
    Starting : 3 process...
    Recived from child: { pid: 29000, msg: 'init process 29000' }
    Recived from child: { pid: 620, msg: 'init process 620' }
    Recived from child: { pid: 21344, msg: 'init process 21344' }
    Recived from child: { pid: 29000, msg: 'alive', i: 1388, rnd: 0.976243658463432 }
    Recived from child: { pid: 21344, msg: 'alive', i: 2344, rnd: 0.06355569347616563 }
    Recived from child: { pid: 29000, msg: 'alive', i: 1388, rnd: 0.49904032377629104 }
    Recived from child: { pid: 620, msg: 'alive', i: 2646, rnd: 0.2631464192590518 }
    29000 killed.
    620 killed.
    21344 killed.