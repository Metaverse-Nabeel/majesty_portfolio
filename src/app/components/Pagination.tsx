"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../store/hooks";

interface item {
  id: number;
  title: string;
  image: string;
  desc: string;
  category: string;
}

interface ItemsProps {
  currentItems: item[];
}

function Items({ currentItems }: ItemsProps) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <Image
              className="w-full h-[250px] object-cover hover:opacity-70"
              width={75}
              height={113}
              src={item.image}
              alt={item.title}
              quality={100}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-2">{item.desc}</p>
            </div>
          </div>
        ))}
    </>
  );
}

interface PaginatedItemsProps {
  itemsPerPage: number;
}

export default function PaginatedItems({ itemsPerPage }: PaginatedItemsProps) {
  const items = useAppSelector((state) => state.projects.projects);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <section className="flex w-full flex-col items-center justify-between px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Items currentItems={currentItems} />
        </div>
      </section>
      <div className="my-8">
        {/* Pagination */}
        <ul className="flex flex-wrap space-x-4 items-center justify-center cursor-pointer">
          <li className="px-1 sm:px-2 sm:text-xl rounded-md hover:bg-black hover:text-white" onClick={handlePrevPage}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`${index + 1 === currentPage ? "bg-black text-white rounded-md" : ""} px-1 sm:px-2 sm:text-xl rounded-md hover:bg-black hover:text-white`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
          <li className="px-1 sm:px-2 sm:text-xl rounded-md hover:bg-black hover:text-white" onClick={handleNextPage}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </li>
        </ul>
      </div>
    </>
  );
}
