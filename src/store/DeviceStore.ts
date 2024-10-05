import { makeAutoObservable } from 'mobx';

type Brand = { id: number; name: string }
type Type = { id: number; name: string }
type Device = {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string
};

export default class DeviceStore {
    constructor() {
        // @ts-ignore
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ];
        // @ts-ignore
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'}
        ];
        // @ts-ignore
        this._devices = [
            {id: 1, name: 'iPhone 12', price: 25000, rating: 5, img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'},
            {id: 2, name: 'iPhone 12', price: 25000, rating: 5, img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'},
            {id: 3, name: 'iPhone 12', price: 25000, rating: 5, img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'},
            {id: 4, name: 'iPhone 12', price: 25000, rating: 5, img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'}
        ];
        // @ts-ignore
        this._selectedType = {};
        // @ts-ignore
        this._selectedBrand = {};
        makeAutoObservable(this)
    }

    setTypes(types: Type[]) {
        // @ts-ignore
        this._types = types;
    }

    setBrands(brands: Brand[]) {
        // @ts-ignore
        this._brands = brands;
    }

    setDevices(devices: Device[]) {
        // @ts-ignore
        this._devices = devices;
    }

    setSelectedType(type: Type) {
        // @ts-ignore
        this._selectedType = type;
    }

    setSelectedBrand(brand: Brand) {
        // @ts-ignore
        this._selectedBrand = brand;
    }

    get types() {
        // @ts-ignore
        return this._types
    }

    get brands() {
        // @ts-ignore
        return this._brands
    }

    get devices() {
        // @ts-ignore
        return this._devices
    }

    get selectedType() {
        // @ts-ignore
        return this._selectedType
    }

    get selectedBrand() {
        // @ts-ignore
        return this._selectedBrand
    }
}
