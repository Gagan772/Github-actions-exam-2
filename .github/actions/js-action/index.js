// CONCEPT 27: JavaScript Action
// This runs directly on the runner using Node.js

const core = require('@actions/core');

try {
    // Get input
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    
    // Get current time
    const time = (new Date()).toTimeString();
    console.log(`The time is: ${time}`);
    
    // Set outputs
    core.setOutput("time", time);
    core.setOutput("greeting", `Hello ${nameToGreet}!`);
    
    console.log('✅ JavaScript action completed successfully!');
} catch (error) {
    core.setFailed(error.message);
}
