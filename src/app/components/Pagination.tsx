"use client";

import React, { useState } from "react";
import { Data } from "../../data";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";


interface item {
  id: number;
  title: string;
  image: string;
  desc: string;
  category: string;
}
const items: item[] = Data;

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
              height={150}
              src={item.image}
              alt={item.title}
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
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="flex w-full flex-col items-center justify-between px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Items currentItems={currentItems} />
        </div>
      </section>
      <ReactPaginate
        breakLabel="..."
        pageClassName="px-2 text-xl rounded-md hover:bg-black hover:text-white"
        nextLabel={<FontAwesomeIcon icon={faAnglesRight} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel={<FontAwesomeIcon icon={faAnglesLeft} />}
        renderOnZeroPageCount={null}
        className="flex flex-wrap space-x-4 items-center justify-center my-8"
        activeClassName="bg-black text-white"
        />
    </>
  );
}
