export default function UserLayout({ children }) {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber == 5) {
    throw new Error("Number is 5");
  }

  return (
    <div>
      <h1 className="text-2xl m-3">User layout {randomNumber}</h1>
      {children}
    </div>
  );
}
