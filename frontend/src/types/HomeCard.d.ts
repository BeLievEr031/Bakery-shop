
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