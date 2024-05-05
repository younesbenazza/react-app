import AccountDetails from "../components/AccountDetails";
import Card from "../components/Card";

function Main({ bookLength, memberLength, loanLength, archiveLength }) {
  return (
    <div className="mx-4 my-10 font-custom">
      <div className="text-right  text-3xl p-6 mx-6">
        <p className="my-3">مرحباً بكم في تطبيق مكتبتي</p>
        <p className="m-3">نظام مصمم لإدارة المكتبة والأرشفة الإلكترونية</p>
      </div>
      <div className="">
        <h1 className="text-right font-semibold text-lg p-4 mx-6 ">
          إحصائيات عامة
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 my-4 gap-3">
          <Card
            title={"عدد الكتب"}
            number={bookLength}
            icon={"../../icons/books.png"}
            type={["كتب", "كتاب"]}
          />
          <Card
            title={"عدد التلاميذ"}
            number={memberLength}
            icon={"../../icons/person.png"}
            type={["تلاميذ", "تلميذ"]}
          />
          <Card
            title={"عدد الإعارات"}
            number={loanLength}
            icon={"../../icons/loan.png"}
            type={["إعارات", "إعارة"]}
          />
          <Card
            title={"عدد الملفات"}
            number={archiveLength}
            icon={"../../icons/archive.png"}
            type={["ملفات", "ملف"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
