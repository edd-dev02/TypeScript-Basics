class Collection<T> {

    constructor(private items: T[] = []) {}

    add(item: T): void {
        this.items.push(item);
    }

    remove(index: number): void {
        // this.items.filter(item => item !== this.items[index]);
        this.items.splice(index, 1);
    }

    getAll(): T[] {
        return [...this.items];
    }
}