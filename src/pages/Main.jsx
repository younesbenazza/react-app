import AccountDetails from "../components/AccountDetails";
import Card from "../components/Card";

function Main() {
  return (
    <div className="mx-4 my-10">
      <div className="flex my-4 gap-3">
        <Card
          title={"عدد الإعارات"}
          number={"20"}
          icon={"../../icons/loan.png"}
        />
        <Card
          title={"عدد التلاميذ المسجلين"}
          number={"10"}
          icon={"../../icons/person.png"}
        />
        <Card title={"عدد الكتب"} number={"5"} icon={"../../icons/books.png"} />
      </div>
      <div className="mx-2">
        <AccountDetails />
      </div>
    </div>
  );
}

export default Main;
