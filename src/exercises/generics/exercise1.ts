interface Identifiable {
    id: number;
}

function findById<T extends Identifiable>(items: T[], id:number) {
    const indexSearchedItem = items.findIndex(item => item.id === id);

    return indexSearchedItem !== -1 ? items[indexSearchedItem] : undefined; 
}