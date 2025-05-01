import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces';

@Injectable()
export class CatService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): Cat | undefined {
        return this.cats.find(cat => cat.id === id);
    }

    update(id: number, updatedCat: Partial<Cat>): Cat | undefined {
        const catIndex = this.cats.findIndex(cat => cat.id === id);
        if (catIndex === -1) return undefined;

        this.cats[catIndex] = { ...this.cats[catIndex], ...updatedCat };
        return this.cats[catIndex];
    }

    delete(id: number): boolean {
        const catIndex = this.cats.findIndex(cat => cat.id === id);
        if (catIndex === -1) return false;

        this.cats.splice(catIndex, 1);
        return true;
    }
}