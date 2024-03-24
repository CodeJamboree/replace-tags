const { execSync } = require('child_process');

const assertCommitted = () => {
    try {
        const output = execSync('git status --porcelain').toString();
        if (output.trim() !== '') {
            console.error('Error: There are uncommitted changes.');
            process.exit(1);
        }
    } catch (error) {
        console.error('Error checking for uncommitted changes:', error);
        process.exit(1);
    }
}

module.exports = assertCommitted;
