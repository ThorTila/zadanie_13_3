/* global process */
process.stdin.setEncoding('utf-8');
process.stdout.write('Write /ver for Node version info, /lang for user language info, or /exit to exit program.\n');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();  
                break;
            case '/ver':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/lang':
                process.stdout.write(process.env.lang + '\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});