import Link from "@/src/components/atoms/Link";

export default function Header() {
  return (
    <nav className="mx-auto max-w-5xl w-full my-3 flex flex-row justify-between">
      <figure className="w-[124px]">
        <img src="/logo-white.png" alt="이사과 로고" />
      </figure>
      <ul>
        <li>
          <Link href="/test1">test1</Link>
        </li>
      </ul>
    </nav>
  );
}
