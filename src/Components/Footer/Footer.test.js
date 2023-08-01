import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders the about section correctly", () => {
    render(<Footer />);

    const aboutHeading = screen.getByText("About Us");
    const aboutText = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis ut felis accumsan fringilla vitae at elit."
    );

    expect(aboutHeading).toBeInTheDocument();
    expect(aboutText).toBeInTheDocument();
  });

  test("renders the quick links section correctly", () => {
    render(<Footer />);

    const quickLinksHeading = screen.getByText("Quick Links");
    const homeLink = screen.getByText("Home");
    const servicesLink = screen.getByText("Services");
    const portfolioLink = screen.getByText("Portfolio");
    const contactLink = screen.getByText("Contact");

    expect(quickLinksHeading).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("renders the contact section correctly", () => {
    render(<Footer />);

    const contactHeading = screen.getByText("Contact Us");
    const contactAddress = screen.getByText(
      /Address: 1234 Main Street, City, Country/
    );
    const contactEmail = screen.getByText(/Email: contact@example.com/);
    // const contactPhone = screen.getByText("Phone: +1 (123) 456-7890");

    expect(contactHeading).toBeInTheDocument();
    expect(contactAddress).toBeInTheDocument();
    expect(contactEmail).toBeInTheDocument();
    // expect(contactPhone).toBeInTheDocument();
  });

  test("renders the copyright information correctly", () => {
    render(<Footer />);

    const copyrightInfo = screen.getByText(
      "© 2023 Your Website Name. All rights reserved."
    );

    expect(copyrightInfo).toBeInTheDocument();
  });
});
