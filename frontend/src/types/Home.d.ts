
interface ISingleGalleryImg {
    _id: number | string;
    src: string
}

interface IHomeCardProp {
    name: string;
    imageSrc: string;
    type: "category" | "gallery";
    galleryArr?: ISingleGalleryImg[]
}

interface ISingleProduct extends ISingleGalleryImg {
    name?: string;
    category: string;
}

interface IShopeByProductTypeProp {
    productType: string;
    productArr: ISingleProduct[];
}