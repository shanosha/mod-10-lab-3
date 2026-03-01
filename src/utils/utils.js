import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Custom function to use both tailwind merge nad clsx librariex
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const styles = {
    section: "rounded border border-gray-300 bg-gray-50 dark:bg-gray-800 py-8 my-8",
    h2: "mb-8 text-2xl text-center",
    button: "cursor-pointer rounded border border-gray-500 bg-gray-200 dark:bg-gray-600 py-2 px-4 disabled:text-gray-300 disabled:border-gray-300 py-1 px-2",
    buttonActive: "bg-blue-600 dark:bg-blue-600 text-white",
    input: "rounded border border-gray-500 bg-white placeholder:text-gray-500 px-2 py-2 my-2",
    inputNumber: "rounded border border-gray-500 pl-2 py-1 mx-1 w-15 text-center",
    flexRowBetween: "flex justify-between mt-4",
    flexRowCenter: "flex gap-2 flex-wrap justify-center",
    flexRow: "flex gap-2 flex-wrap items-center my-4"
}