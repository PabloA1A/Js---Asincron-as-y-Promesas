const jsonFilePath = 'data.json';

async function getData() {
    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) {
            throw new Error('Was not ok ' + response.statusText);
        }
        const data = await response.json()
        data.results.forEach(result => {
            console.log(result.title);
        });
    } catch (error) {
        console.error('There has been a problem:', error);
    }
}

getData();