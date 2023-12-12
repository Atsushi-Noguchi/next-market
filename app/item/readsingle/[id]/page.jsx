import React from "react";
import Image from "next/image";

const getSingleItem = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/item/readsingle/${id}`,
    {
      cache: "no-store",
    }
  );
  const jsonData = await response.json();
  const singleItem = jsonData.data;
  return singleItem;
};

const ReadSingleItem = async (context) => {
  const singleItem = await getSingleItem(context.params.id);
  return (
    <div>
      <div>
        <Image
          src={singleItem.image}
          alt={singleItem.title}
          width={500}
          height={300}
        />
      </div>
      <div>
        <h2>{singleItem.price}</h2>
        <h2>{singleItem.title}</h2>
        <p>{singleItem.description}</p>
      </div>
    </div>
  );
};

export default ReadSingleItem;
