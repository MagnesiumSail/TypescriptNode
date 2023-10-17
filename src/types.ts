export interface Options {
    method?: string,
    headers: {
        ContentType: string;
        Authorization: string;
    };
}

export interface Trait {
    symbol: string;
    name: string;
    description: string;
}

export interface DataObject {
    systemSymbol: string;
    symbol: string;
    type: string;
    x: number;
    y: number;
    traits?: Trait[];
}