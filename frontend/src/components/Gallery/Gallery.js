import React from "react";
import "./Gallery.css"; // Import CSS for styling

const Gallery = () => {
  const images = [
    { src: require("../../images/image1.jpeg"), alt: "Tent Image 1" },
    {
      src: require("../../images/0D579990-AF32-4EB8-BC9F-42478CDEA2C7.jpg"),
      alt: "Tent Image 2",
    },
    {
      src: require("../../images/1E2A6789-68C2-475B-A427-84C0CF45CDC5.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/1E696B70-AB82-44C2-AAE5-F34FF2EA9F86.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/29BEEF2B-CD25-49F1-8D67-723D27D0CE59.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/317256654_684047236728289_1594654945841530336_n.jpg"),
      alt: "Tent Image 3",
    },

    {
      src: require("../../images/5C1CD89C-75A8-4D8B-A876-45A6EB651AD7.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/75DBDCCD-4AC2-45CB-9E00-698BB95704FE.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/8BA0EAE8-BF25-4E9D-8CC0-063DCB74CB9F.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/A0B9D1AC-5ED1-47E6-9C38-44C31A8F9C0A.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/d14bef5a774c83f955f4f8c9dd8e5445.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/ebc93100e84d63284df4f507e068cda2.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/IMG-20220716-WA0008.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/IMG-20220716-WA0009.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/IMG-20220716-WA0010.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/IMG-20220716-WA0012.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/IMG-20220716-WA0014.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/IMG-20230218-WA0023.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/new-pooja-tent-house-kanker-khera-meerut-tent-house-owid43kg80.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/rama_tent_house_wedding_decorators_delhi_15741.jpg"),
      alt: "Tent Image 3",
    },
    {
      src: require("../../images/sahoo-tent-and-caterers-rourkela-sector-4-rourkela-caterers-wxbffttph2.jpg"),
      alt: "Tent Image 3",
    },
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
