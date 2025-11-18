let items = [];

const itemsDiv = document.querySelector('items');
const itemInput = document.querySelector('itemInput');
const storageKey = 'todoitems';

// Load items from localStorage if available


let renderItems = () => 
{

    itemsDiv.innerHTML = null;

    for (const [index,item] of Object.entries(items)) 
    {
        const container = document.createElement('div');
        container.style.marginBottom = '10px';

        const text = document.createElement('p');
        text.style.display = 'inline-block';
        text.style.marginRight = '10px';
        text.textContent = item;

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.onclick = () => removeItem(index);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);

    }
}

let addItems = () => 
{

    const value = itemInput.value;

    if (!value) 
    {
        alert('item cannot be empty');
        return;
    }
    else
    {
    items.push(value);
    
    renderItems();

    itemInput.value = '';
    saveItems();
    }

}


let saveItems = () =>  
{
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems);
}



let displayItems = () => 
{
    const oldItems = localStorage.getItem(storageKey);

    if (oldItems) 
    {
        items = JSON.parse(oldItems);
        renderItems();
    }
}

let removeItem = (index) => 
{
    items.splice(index, 1);
    renderItems();
    saveItems();
}



document.getElementById('addBtn').addEventListener('click',addItems);

document.addEventListener('DOMContentLoaded',displayItems);