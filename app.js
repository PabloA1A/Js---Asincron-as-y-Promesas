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


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const alls = data.results;
        const container = document.getElementById('todo-container');

        const table = document.createElement('div');
        table.className = 'table';

        const headerRow = document.createElement('div');
        headerRow.className = 'row header';

        const headers = ['Título', 'Prioridad', 'Completado'];
        headers.forEach(headerText => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = headerText;
            headerRow.appendChild(cell);
        });
        table.appendChild(headerRow);

        alls.forEach(all => {
            const row = document.createElement('div');
            row.className = 'row';

            const titleCell = document.createElement('div');
            titleCell.className = 'cell';
            titleCell.textContent = all.title;
            row.appendChild(titleCell);

            const priorityCell = document.createElement('div');
            priorityCell.className = 'cell';
            priorityCell.textContent = all.priority;
            row.appendChild(priorityCell);

            const isDoneCell = document.createElement('div');
            isDoneCell.className = 'cell';
            isDoneCell.textContent = all.isDone;
            row.appendChild(isDoneCell);

            table.appendChild(row);
        });

        graph.appendChild(table);
    } catch (error) {
        console.error('Error JSON:', error);
    }
});