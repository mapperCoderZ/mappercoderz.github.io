import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IActivity {
    id: number;
    name: string;
    description: string;
    date?: string;
    picture: string;
    address: string;
    city: string;
    orders?: IOrder[];
    orderTotal?: number;
    latitude?: number;
    longitude?: number;
    bewelcome?: string;
    organizerName?: string;
    registerUrl?: string;
}


export interface IOrder {
    productName: string;
    itemCost: number;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IUserLogin {
    email: string;
    password: string;
}