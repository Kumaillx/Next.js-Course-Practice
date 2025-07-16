import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex flex-col font-sans">
      <header className="py-10 flex flex-col items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          width={80}
          height={80}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome to Next.js App made by Kumail!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
          The page is a dummy the functionalities in the Navbar are properly working.
        </p>
      </header>

      <main className="flex-1 flex flex-col items-center px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-4xl">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/file.svg" alt="Docs" width={32} height={32} />
            <h2 className="mt-4 text-xl font-semibold">Documentation</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
              Learn how to use Next.js and unlock its full potential.
            </p>
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/globe.svg" alt="Tutorials" width={32} height={32} />
            <h2 className="mt-4 text-xl font-semibold">Tutorials</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
              Step-by-step guides to help you get started quickly.
            </p>
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/window.svg" alt="Templates" width={32} height={32} />
            <h2 className="mt-4 text-xl font-semibold">Templates</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
              Explore ready-made Next.js templates for your projects.
            </p>
          </a>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} My Next.js App. Powered by Next.js & Vercel.
      </footer>
    </div>
  );
}
