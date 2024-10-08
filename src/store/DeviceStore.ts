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
        this._types = [];
        // @ts-ignore
        this._brands = [];
        // @ts-ignore
        this._devices = [];
        // @ts-ignore
        this._selectedType = {};
        // @ts-ignore
        this._selectedBrand = {};
        // @ts-ignore
        this._page = 1;
        // @ts-ignore
        this._totalCount = 0;
        // @ts-ignore
        this._limit = 3;
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
        this.setPage(1);
        // @ts-ignore
        this._selectedType = type;
    }

    setSelectedBrand(brand: Brand) {
        // @ts-ignore
        this._selectedBrand = brand;
    }

    setPage(page: number) {
        // @ts-ignore
        this._page = page;
    }

    setTotalCount(count: number) {
        // @ts-ignore
        this._totalCount = count;
    }

    setLimit(limit: number) {
        // @ts-ignore
        this._limit = limit;
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

    get page() {
        // @ts-ignore
        return this._page
    }

    get totalCount() {
        // @ts-ignore
        return this._totalCount
    }

    get limit() {
        // @ts-ignore
        return this._limit
    }
}
