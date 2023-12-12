import React from "react";
import Image from "next/image";

const getAllitems = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/item/readall", {
      cache: "no-store",
    });
    const jsonData = await response.json();
    const allItems = jsonData.data;
    console.log(jsonData);
    return allItems;
  } catch (error) {
    console.log(error);
  }
};

const ReadAllItems = async () => {
  const allItems = await getAllitems();
  return (
    <div>
      {allItems.map((item: any) => (
        <div key={item._id}>
          <Image src={item.image} alt={item.title} width={500} height={300} />
          <h2>{item.price}</h2>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadAllItems;
