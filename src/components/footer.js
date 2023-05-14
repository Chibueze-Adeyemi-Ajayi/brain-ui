function Footer() {
    return (
      <footer className="bg-gray-100 py-16">
        <div className="container mx-auto text-center text-gray-500">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Jilo Innovations. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  export default Footer;