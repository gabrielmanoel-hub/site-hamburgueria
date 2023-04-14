import Image from "next/image";

export const imageMock = ({ src, alt }: { src: string, alt: string }) => { 
    return <Image src={src} alt={alt} />;
};

// module.exports = imageMock