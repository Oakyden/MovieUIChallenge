export interface APIResponse {
    success: boolean;
    response: Array<{}>;
}

export interface movieObject {
    id: string;
    reviews: Array<number>;
    title: string;
    filmCompanyId: string;
    cost: number;
    releaseYear: number;
  }