let inventory = [
    {name : "inv1", quantity : 50},
    {name : "inv2", quantity : 10},
    {name : "inv3", quantity : 4},
    {name : "inv4", quantity : 2},
    {name : "inv5", quantity : 30}
];
let summary = {
    totalItems : 0,
    restockingItems : 0
}
for (let i = 0; i < inventory.length; i++) {
    summary.totalItems++;
    console.log(`name : ${inventory[i].name}, quantity : ${inventory[i].quantity}`);
    if (inventory[i].quantity < 5){
        summary.restockingItems++;
        console.log(`${inventory[i].name} needs restocking.`)
    }
}
console.log(summary);