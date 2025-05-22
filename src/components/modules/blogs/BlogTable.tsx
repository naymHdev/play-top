"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";
import { FiDollarSign } from "react-icons/fi";
import Link from "next/link";
import { Copy } from "lucide-react";

const copyToClipboard = async (
  text: string,
  setCopied: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  } catch {
    alert("Failed to copy!");
  }
};

const codes = [
  {
    code: "fudd10",
    reward: (
      <Badge className="flex items-center gap-1 bg-[#EE7F0080]/10 border rounded border-[#EE7F0080] text-primary">
        <FiDollarSign /> $1.00
      </Badge>
    ),
  },
  {
    code: "fudd10_V2",
    reward: (
      <Badge className="flex items-center gap-1 bg-[#EE7F0080]/10 border rounded border-[#EE7F0080] text-primary">
        <FiDollarSign /> $2.00
      </Badge>
    ),
  },
  {
    code: "Chandler",
    reward: (
      <Badge className="flex items-center gap-1 bg-[#EE7F0080]/10 border rounded border-[#EE7F0080] text-primary">
        <FiDollarSign /> $0.00
      </Badge>
    ),
  },
  {
    code: "BIGNEWS",
    reward: (
      <>
        Unlocks the Title: Big News (The title is given only when you first
        enter the{" "}
        <Link href="#" className="text-blue-400 underline hover:text-blue-600">
          Second Sea
        </Link>
        , but the code itself can be redeemed in the First Sea.)
      </>
    ),
  },
  { code: "KITT_RESET", reward: "Free Stat Reset" },
  { code: "Enyu_is_Pro", reward: "20 minutes of 2x Experience" },
  { code: "StarcodeHEO", reward: "20 minutes of 2x Experience" },
  { code: "MagicBUS", reward: "20 minutes of 2x Experience" },
  { code: "KittGaming", reward: "20 minutes of 2x Experience" },
];

const BlogTable = () => {
  const [copiedCode, setCopiedCode] = useState("");

  return (
    <div className="overflow-x-auto scroll-smooth rounded-lg border border-[#585858] bg-card">
      <Table className="min-w-full">
        <TableHeader className="">
          <TableRow className="border-dashed border-gray-700">
            <TableHead className="w-40  text-white">Code</TableHead>
            <TableHead className=" text-white">Reward</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {codes.map(({ code, reward }) => (
            <TableRow
              key={code}
              className="border-b border-gray-700 border-dashed last:border-b-0"
            >
              <TableCell className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#383838] px-3 rounded">
                    <span className="select-text font-mono text-primary">
                      {code}
                    </span>
                    <Tooltip
                      content={copiedCode === code ? "Copied!" : "Copy Code"}
                    >
                      <Button
                        size="sm"
                        className=" bg-transparent hover:bg-transparent"
                        onClick={() => copyToClipboard(code, setCopiedCode)}
                        aria-label={`Copy code ${code}`}
                      >
                        <Copy />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-3 px-4 text-gray-300">
                {reward}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogTable;
