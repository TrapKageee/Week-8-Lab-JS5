class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Menu {
    constructor() {
        this.items = [];
    }

    createItem(name, price) {
        const newItem = new MenuItem(name, price);
        this.items.push(newItem);
        alert(`${name} added to the menu.`); // Adds item name, price and shows the item has been added to the menu in prompt
    }
    viewItems() {
        if (this.items.length > 0) {
            let itemsList = "Menu Items:\n";
         this.items.forEach((item, index) => {
            itemsList += `${index + 1}. ${item.name} - ${item.price}\n`;
        });
        alert(itemsList );  // Shows items in menu
    } else {
        alert("No items in menu.");
    }
}
    deleteItem(index) {
        if (index >= 0 && index < this.items.length) {
            const deletedItem = this.items.splice(index, 1)[0];
            alert(`${deletedItem.name} deleted from the menu.`);
        } else {
            console.log("Invalid index."); // Deletes items in menu
        }
    }
}





function main() {
    let menu = new Menu();
    while (true) {
        console.log("Menu Options");
        console.log("1. Create Menu Item");
        console.log("2. View Menu Items");
        console.log("3. Delete Menu Items");
        console.log("4. Exit");   // Added Menu Options to both console and prompt
       
        const choice = prompt(`
        Menu Options
        1. Create Menu Item
        2. View Menu Items
        3. Delete Menu Items
        4. Exit
        Enter your choice:`);

        switch (choice) {
            case "1":
                let itemName = prompt("Enter item name:");
                const price = parseFloat(prompt("Enter item price:"));
                menu.createItem(itemName, price);
                break; // Allows the user to create menu items
            case "2":
                menu.viewItems();
                break; // Allows the user to view menu items
            case "3":
                const index = parseInt(prompt("Enter item to delete:")); - 1;
                menu.deleteItem(index); // Allows the user to delete menu items
                break;
            case "4":
                console.log("Exiting Menu");
                alert("Exiting Menu...")
                return; // Allows the user to exit the menu
            default:
                alert("Invalid Choice, please try again..."); // Prompt shows if user inputs wrong choice
        }
    }
}
main();