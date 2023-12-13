import React from "react";
import Image from "next/image";
import Link from "next/link";

const getSingleItem = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`,
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
  console.log(singleItem);
  return (
    <div className="grid-container-si">
      <div>
        <Image
          src={singleItem.image}
          alt={singleItem.title}
          width={500}
          height={300}
        />
      </div>
      <div>
        <h2>¥{singleItem.price}</h2>
        <h2>{singleItem.title}</h2>
        <p>{singleItem.description}</p>
        <div>
          <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
          <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleItem;
