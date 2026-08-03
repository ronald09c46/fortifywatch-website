type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-yellow-500 text-black hover:bg-yellow-400"
      : "border border-white text-white hover:bg-white hover:text-black";

  return (
    <button
      className={`${styles} px-6 py-3 rounded-lg font-semibold transition`}
    >
      {text}
    </button>
  );
}