// Base Decorator
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice();
    }

    getDescription() {
        return this.product.getDescription();
    }
}

// Concrete Decorator for Gift Wrapping
class GiftWrapDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
        this.cost = 5; 
        this.feature = ", gift wrapped";
    }

    getPrice() {
        // TODO: Return the product's original price + a $5 gift wrap fee.
        return this.product.getPrice() + this.cost;
    }

    getDescription() {
        // TODO: Return the product's original description + ", gift wrapped".
        return this.product.getDescription() + this.feature;
    }
}

// Concrete Decorator for Extended Warranty
class ExtendedWarrantyDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
        this.cost = 20;
        this.feature = ", with extended warranty";
    }

    getPrice() {
        // TODO: Return the product's original price + a $20 warranty fee.
        return this.product.getPrice() + this.cost;
    }

    getDescription() {
        // TODO: Return the product's original description + ", with extended warranty".
        return this.product.getDescription() + this.feature;
    }
}

// We need a base Product class with the same interface to decorate it


class BaseProduct {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }
    getDescription() {
        return this._name;
    }
}

export { ProductDecorator, GiftWrapDecorator, ExtendedWarrantyDecorator, BaseProduct };
