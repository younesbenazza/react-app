import AccountDetails from "../components/AccountDetails";
import Card from "../components/Card";

function Main({ bookLength, memberLength }) {
  return (
    <div className="mx-4 my-10">
      <div className="flex my-4 gap-3">
        <Card
          title={"عدد الكتب"}
          number={bookLength}
          icon={"../../icons/books.png"}
          type={["كتب", "كتاب"]}
        />
        <Card
          title={"عدد التلاميذ المسجلين"}
          number={memberLength}
          icon={"../../icons/person.png"}
          type={["تلاميذ", "تلميذ"]}
        />
        <Card
          title={"عدد الإعارات"}
          number={"0"}
          icon={"../../icons/loan.png"}
          type={["إعارات", "إعارة"]}
        />
      </div>
      <div className="mx-2">
        <AccountDetails />
      </div>
    </div>
  );
}

export default Main;
