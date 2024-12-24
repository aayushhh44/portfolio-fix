import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h2>Not Aayush</h2>
      <img
        loading="eager"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
        alt="Not found image"
      />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
