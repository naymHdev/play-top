"use client";

import React, { useState, FC } from "react";
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

interface RewardItem {
  code: string;
  reward: string;
  validity?: string;
  _id?: string;
  id?: string;
}

interface BlogTableProps {
  rewards: RewardItem[];
}

const BlogTable: FC<BlogTableProps> = ({ rewards }) => {
  const [copiedCode, setCopiedCode] = useState("");

  // Helper to check if reward is a currency amount like "$1.00"
  const isCurrencyReward = (reward: string) => /^\$\d/.test(reward.trim());

  // Helper to return conditional badge styles
  const getBadgeClasses = (reward: string) => {
    if (isCurrencyReward(reward)) {
      return "text-white";
    }
    // Non-currency rewards - use a different color, e.g., blue-gray
    return "bg-[#EE7F0080]/20 border-[#EE7F0080] text-white";
  };

  return (
    <div className="overflow-x-auto scroll-smooth rounded-lg border border-[#585858] bg-card mb-10">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="border-dashed border-gray-700">
            <TableHead className="w-40 text-white">Code</TableHead>
            <TableHead className="text-white">Reward</TableHead>
            <TableHead className="text-white">Validity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rewards.map(({ code, reward, validity }) => (
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
                        className="bg-transparent hover:bg-transparent"
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
                <Badge
                  className={`flex items-center gap-1 border rounded ${getBadgeClasses(
                    reward
                  )}`}
                >
                  {isCurrencyReward(reward) && <FiDollarSign />}
                  {reward}
                </Badge>
              </TableCell>
              <TableCell className="py-3 px-4 text-gray-300">
                <p className="capitalize">{validity}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogTable;
