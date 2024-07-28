type ButtonStyle = {
  styles?: string;
};

export default function Button({ styles }: ButtonStyle) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient hover:brightness-125 font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Started
    </button>
  );
}
