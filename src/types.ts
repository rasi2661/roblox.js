export interface Item {
  Name: string,
  AssetType: number,
  Description: string,
  AssetId: number,
  ProductId: number,
  UserAsset: number,
  SerialNumber: number,
  Thumbnail: {
    Url: string
  }
  PriceInRobux: number,
  IsForSale: boolean,
  IsLimited: boolean,
}
