import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const footerLinks = [
  {
    title: "About",
    links: ["Company Overview", "Careers", "Press & Media", "Testimonials"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Webinars & Events", "Case Studies"],
  },
  {
    title: "Support & Contact",
    links: ["Contact Us", "Technical Support", "Feedback", "Community Forum"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white  md:px-[154px]  border-t ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">DataWise</span>
              <span className="text-2xl font-bold text-green-500">=</span>
            </Link>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2023 NIMBUS - All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Term of use
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
