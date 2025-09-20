export default function DownArrow({ color, size, className }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        width={size}
        viewBox="0 -960 960 960"
        fill={color}
        className={className}
      >
        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
      </svg>
    </>
  );
}
