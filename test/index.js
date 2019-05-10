

const util = require('wangct-server-util');

const {spawn} = require('child_process');

// const p = spawn('node',['test/a'],{
//   stdio:'inherit'
// });

const addPro = spawn('git',['add','.'],{
  stdio:'inherit'
});

addPro.on('exit',(...args) => {
  console.log('exit:',...args);
  const p = spawn('git',['commit','-m','"hhwwadf"'],{
    stdio:'inherit'
  });
  p.on('exit',(...args) => {
    console.log('exit:',...args);
    const p = spawn('git',['push','--set-upstream','origin','master'],{
      stdio:'inherit'
    });
    p.on('exit',(...args) => {
      console.log('exit:',...args);
    });
  });
});




