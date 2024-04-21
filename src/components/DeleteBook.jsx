export default function DeleteBook({ deleteBook, id }) {
  return (
    <div className="">
      <button className="w-8 h-8" onClick={() => deleteBook(id)}>
        <img src="../../icons/delete.png" alt="" />
      </button>
    </div>
  );
}
