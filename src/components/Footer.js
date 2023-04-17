const Footer = () => {
  return (
    <footer className="bg-white shadow mb-0">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Nafis Amiri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
