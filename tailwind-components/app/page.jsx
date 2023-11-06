import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-7xl">
        Useful Components
        <span className=" text-blue-400 dark:text-orange-400">.</span>
      </h1>
      <p className="text-lg max-w-md my-5">
        A collection of useful components to make building your dream website a
        reality
      </p>
      <div className="flex gap-5">
        <button className="dark:bg-orange-400 bg-blue-400 px-5 py-2 text-white">
          Explore
        </button>
        <button className="border dark:border-orange-400 text-blue-400 border-blue-400 px-5 py-2 dark:text-orange-400">Get in Touch</button>
      </div>
    </main>
  );
}
