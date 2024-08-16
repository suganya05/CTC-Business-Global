export interface INft {
  id: string;
  tokenId: string;
  createdAt: string;
  owner: {
    id: string;
  };
  tokenUri: string;
  collection: string;
  name: string;
  description: string;
  tags: string;
  royalties: string;
  attributes: {
    name: string;
    value: string;
  }[];
  image: string;
  tokenAddress: {
    id: string;
    count: string;
  };
}

export interface IAuctionData {
  id: string;
  auctionId: string;
  tokens: {
    id: string;
    tokenId: string;
    tokenUri: string;
    owner: {
      id: string;
    };
  }[];
  isAuction: boolean;
  basePrice: string;
  nativeToken: boolean;
  currentBidPrice: string;
  creator: string;
  createdAt: string;
  endTime: string;
  currentHighestBidder: string;
  bidders: IBidder[];
}

export interface IBidder {
  bidder: string;
  bidAmount: string;
  bidTime: string;
  id: string;
}

export interface ICollection {
  id: string;
  name: string;
  symbol: string;
  owner: {
    id: string;
  };
  nfts: INft[];
}

export interface ISearchCollection {
  id: string;
  name: string;
  symbol: string;
  tokenAddress: string;
  collectionUri: string;
}
export interface IGeneralStats {
  id: string;
  totalNfts: string;
  totalAuctions: string;
  totalFixedSales: string;
  totalCollections: string;
}

export interface IUserNftStats {
  id: string;
  totalNfts: string;
  totalCollections: string;
}

export interface IUserProfileData {
  id: string;
  bannerImg?: string;
  profileImg?: string;
  description?: string;
  primaryAccount?: boolean;
  socialLinks?: {
    discord?: string;
    facebook?: string;
    instagram?: string;
    medium?: string;
    telegram?: string;
    twitter?: string;
    webpage?: string;
    youtube?: string;
  };
}

export interface IUserStats {
  id: string;
  totalNfts: string;
  totalCollections: string;
}

export interface INftCollection {
  id: string;
  name: string;
  symbol: string;
  description: string;
  collectionUri: string;
  image: string;
  owner: {
    id: string;
  };
}
