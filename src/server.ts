import app from './app';

function main() {
    let port = 3000;
    try {
        app.listen(port, 'localhost', async() => {
            console.log(`Starting server on port ${port}`);
        });

    }catch(err) {
        console.log('Starting server Error', err);
    }
}

main();