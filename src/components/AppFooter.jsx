export default function AppFooter() {
  return (
    <footer className="bg-black py-[20px] md:py-[40px]">
      <p className="text-white text-center font-[200] text-[14px]">
        © {Date().split(" ")[3]} Peculiar Cocktails. All rights reserved.
      </p>
    </footer>
  );
}
