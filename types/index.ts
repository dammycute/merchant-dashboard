export interface Merchant {
    id: string;
    name: string;
}

export interface Branch {
    id: string;
    merchant_id: string;
    location: string;
    address: string;
    account_name: string;
    account_number: string;
    qr_code_url: string;
}
