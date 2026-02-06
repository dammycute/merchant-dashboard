import { Branch, Merchant } from "@/types";

export const MERCHANTS: Merchant[] = [
    { id: "1", name: "Global Retail Solutions Inc." },
    { id: "2", name: "Metro Coffee House Co." },
    { id: "3", name: "TechGear Logistics" },
    { id: "4", name: "Luxe Fashion House" },
];

export const BRANCHES: Branch[] = [
    // Merchant 1 branches
    {
        id: "b1",
        merchant_id: "1",
        location: "Downtown Hub",
        address: "128 Market St, Floor 4, Suite 12",
        account_name: "GR Downtown Op",
        account_number: "**** 8920",
        qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=branch-b1",
    },
    {
        id: "b2",
        merchant_id: "1",
        location: "Eastside Plaza",
        address: "45 Plaza Rd, East Avenue",
        account_name: "GR East Distribution",
        account_number: "**** 4431",
        qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=branch-b2",
    },
    // Merchant 2 branches
    {
        id: "b4",
        merchant_id: "2",
        location: "Central Station",
        address: "1 Central Station Concourse",
        account_name: "Metro Central",
        account_number: "**** 5678",
        qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=branch-b4",
    },
    {
        id: "b5",
        merchant_id: "2",
        location: "North Wing",
        address: "Suite 10, North Mall",
        account_name: "Metro North",
        account_number: "**** 1122",
        qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=branch-b5",
    },
    // Merchant 3 branches
    {
        id: "b6",
        merchant_id: "3",
        location: "Tech Park",
        address: "Innovation Dr, Building B",
        account_name: "TG Logistics HQ",
        account_number: "**** 3344",
        qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=branch-b6",
    },
    // Merchant 4 branches
    {
        id: "b7",
        merchant_id: "4",
        location: "Luxe Flagship",
        address: "5th Avenue, Fashion District",
        account_name: "Luxe Retail",
        account_number: "**** 9900",
        qr_code_url: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=branch-b7",
    },
];

export async function fetchMerchants(): Promise<Merchant[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return MERCHANTS;
}

export async function fetchBranches(merchantId: string): Promise<Branch[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return BRANCHES.filter((branch) => branch.merchant_id === merchantId);
}
