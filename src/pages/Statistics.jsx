import React from "react";
import PlanSummaryCard from "../components/StatsCard";

const Statistics = ({ books, members, archives, loans }) => {
  const rentedBooks = books.filter((book) => book.status === "rented").length;
  const availableBooks = books.filter(
    (book) => book.status === "available"
  ).length;
  const borrowedBooks = loans.filter((loan) => !loan.isReturned).length;
  const totalCategories = Array.from(
    new Set(books.map((book) => book.category))
  ).length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-12">
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب المتاحة"
          usedValue={54}
          maxValue={100}
          icon={"../icons/books.png"}
          color={"text-indigo-500"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب المستعارة"
          usedValue={54}
          maxValue={100}
          icon={"../icons/books.png"}
          color={"text-indigo-500"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب الضائعة"
          usedValue={21}
          maxValue={50}
          icon={"../icons/loan.png"}
          color={"text-red-400"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب المستعارة"
          usedValue={54}
          maxValue={100}
          icon={"../icons/person.png"}
          color={"text-indigo-500"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب الضائعة"
          usedValue={21}
          maxValue={50}
          icon={"../icons/card.png"}
          color={"text-red-400"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب المستعارة"
          usedValue={54}
          maxValue={100}
          icon={"../icons/books.png"}
          color={"text-indigo-500"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب الضائعة"
          usedValue={21}
          maxValue={50}
          icon={"../icons/loan.png"}
          color={"text-red-400"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب المستعارة"
          usedValue={54}
          maxValue={100}
          icon={"../icons/person.png"}
          color={"text-indigo-500"}
        />
        <PlanSummaryCard
          title="عدد الكتب"
          title2="الكتب الضائعة"
          usedValue={21}
          maxValue={50}
          icon={"../icons/card.png"}
          color={"text-red-400"}
        />
      </div>
    </>
  );
};

export default Statistics;
