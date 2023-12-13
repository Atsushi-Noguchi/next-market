"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useAuth from "../../../utils/useAuth";

const DeleteItem = (context) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const loginUserEmail = useAuth();

  useEffect(() => {
    const getSingleItem = async (id) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`,
        {
          cache: "no-store",
        }
      );
      const jsonData = await response.json();
      const singleItem = jsonData.data;
      setTitle(singleItem.title);
      setPrice(singleItem.price);
      setImage(singleItem.image);
      setDescription(singleItem.description);
      setEmail(singleItem.email);
    };
    getSingleItem(context.params.id);
  }, [context]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/item/delete/${context.params.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            email: loginUserEmail,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (error) {
      alert("アイテムの削除に失敗しました");
    }
  };

  if (loginUserEmail === email) {
    return (
      <div>
        <h1 className="page-title">アイテム削除</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <h2>{title}</h2>
            <Image
              src={image}
              alt="item-image"
              priority
              width={750}
              height={500}
            />
            <h3>¥{price}</h3>
            <p>{description}</p>
            <button>削除</button>
          </form>
        </div>
      </div>
    );
  } else {
    return <h1>権限がありません</h1>;
  }
};

export default DeleteItem;
