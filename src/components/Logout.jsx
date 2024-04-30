function Logout() {
  return (
    <div className="font-custom text-sm mx-3 flex justify-end ">
      <a
        className=" hodver:text-red-600 p-3 border border-red-500 rounded-lg hover:bg-red-200 bg-red-100"
        href="/logout"
      >
        تسجيل الخروج
      </a>
    </div>
  );
}

export default Logout;
