function Logout() {
  return (
    <div className="font-custom text-sm mx-3 flex justify-end ">
      <a
        className="py-2.5 px-4 text-white border border-blue-50 rounded-3xl hover:bg-blue-600 bg-blue-500 font-semibold"
        href="/logout"
      >
        تسجيل الخروج
      </a>
    </div>
  );
}

export default Logout;
