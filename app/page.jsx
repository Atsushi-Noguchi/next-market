import React from "react";
import Image from "next/image";
import Link from "next/link";

const getAllitems = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/item/readall`,
      {
        cache: "no-store",
      }
    );
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
    <div className="grid-container-in">
      {allItems.map((item) => (
        <Link href={`/item/readsingle/${item._id}`} key={item._id}>
          <div key={item._id}>
            <Image src={item.image} alt={item.title} width={750} height={500} />
            <h2>¥{item.price}</h2>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadAllItems;
