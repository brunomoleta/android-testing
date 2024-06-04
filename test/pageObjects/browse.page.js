import {$} from "@wdio/globals";

export class BrowsePage {
    async getProduct(name, label = false) {
        await $(`-ios predicate string:name == ${name} AND label BEGINSWITH ${label}`);
    }
    async getShoeProduct(){
        await helper.openAccTab("Browse",true)
        await this.getProduct("productDetails","Womens Wingtip");

        await $(`~Womens Wingtip Shoes Handmade Sheepskin Full Brogues Oxfords & Tie Flats`);
    }

}