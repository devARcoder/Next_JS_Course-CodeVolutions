import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-10 space-y-10">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App!</h1>

      <Link href="/blog">Blog</Link>
    </div>
  );
}