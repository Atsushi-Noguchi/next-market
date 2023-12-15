import Image from "next/image";
import Link from "next/link";

const Heder = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            src="/narfar.svg"
            alt="header-image"
            width={700}
            height={100}
            priority
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/user/register">登録</Link>
          </li>
          <li>
            <Link href="/user/login">ログイン</Link>
          </li>
          <li>
            <Link href="/item/create">アイテム作成</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Heder;
